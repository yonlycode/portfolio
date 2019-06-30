package utils

import (
	"fmt"
	"net/http"
	"strings"

	//"strings"

	"github.com/labstack/echo"
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

/*RedirectToClientHandlerSet redirection to application on 404  */
func RedirectToClientHandler(err error, c echo.Context) {
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
			fmt.Println(err)
		}
	}

}
