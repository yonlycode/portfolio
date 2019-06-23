package routes

import (
	"fmt"
	"net/http"
	"os"
	"portfolio/routes/actions"
	"portfolio/routes/api"
	"strings"

	//"strings"

	"github.com/labstack/echo/middleware"

	"github.com/labstack/echo"
)

/*A is a pointer to the App instance */
var (
	A    *echo.Echo
	apiG *echo.Group
)

type HTTPError struct {
	Code     int
	Message  interface{}
	Internal error // Stores the error returned by an external dependency
}

// Map defines a generic map of type `map[string]interface{}`.
type Map map[string]interface{}

// NewHTTPError creates a new HTTPError instance.
func NewHTTPError(code int, message ...interface{}) *HTTPError {
	he := &HTTPError{Code: code, Message: http.StatusText(code)}
	if len(message) > 0 {
		he.Message = message[0]
	}
	return he
}

// Error makes it compatible with `error` interface.
func (he *HTTPError) Error() string {
	return fmt.Sprintf("code=%d, message=%v", he.Code, he.Message)
}

// SetInternal sets error to HTTPError.Internal
func (he *HTTPError) SetInternal(err error) *HTTPError {
	he.Internal = err
	return he
}

/*SetRoutes bind routes to the application */
func SetRoutes() {
	/* create api router group and securise it with jwt */
	apiG = A.Group("/api")
	apiG.Use(middleware.JWTWithConfig(middleware.JWTConfig{
		SigningKey: []byte(os.Getenv("SECRET")),
	}))

	/* Handle server actions on router */
	api.HandleAdminAPI(apiG)
	api.HandlePortfolioAPI(apiG)
	api.HandleBlogAPI(apiG)
	api.HandleExperienceAPI(apiG)
	api.HandleEducationAPI(apiG)
	api.HandleSocialAPI(apiG)
	api.HandleSubsAPI(apiG)

	api.HandleSkillAPI(apiG)
	api.HandleServiceAPI(apiG)
	api.HandleImageAPI(apiG)

	actions.HandleConnection(A)

	A.Static("/", "./client/build")

	A.Static("/upload", "./uploads")

	/*Set redirection to application on 404  */
	A.HTTPErrorHandler = func(err error, c echo.Context) {
		var (
			code = http.StatusInternalServerError
			msg  interface{}
		)

		fmt.Println(strings.Contains(err.Error(), "=404"))

		if he, ok := err.(*HTTPError); ok {
			code = he.Code
			msg = he.Message
			if he.Internal != nil {
				err = fmt.Errorf("%v, %v", err, he.Internal)
			}
		} else if A.Debug {
			msg = err.Error()
		} else {
			msg = http.StatusText(code)
		}
		if _, ok := msg.(string); ok {
			msg = Map{"message": msg}
		}

		if !c.Response().Committed {
			if strings.Contains(err.Error(), "code=404") {
				err = c.File("./client/build/index.html")
			} else if c.Request().Method == http.MethodHead { // Issue #608
				err = c.NoContent(code)
			} else {
				err = c.JSON(code, msg)
			}
			if err != nil {
				A.Logger.Error(err)
			}
		}

	}
}
