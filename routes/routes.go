package routes

import (
	"os"
	"portfolio/routes/actions"
	"portfolio/routes/api"

	"github.com/labstack/echo/middleware"

	"github.com/labstack/echo"
)

/*A is a pointer to the App instance */
var (
	A    *echo.Echo
	apiG *echo.Group
)

/*SetRoutes bind routes to the application */
func SetRoutes() {
	A.Static("/", "./client/build")
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
	actions.HandleConnection(A)

	/*Set redirection to application on 404  */
	A.HTTPErrorHandler = func(err error, c echo.Context) {
		if err.Error() == "code=400, message=missing or malformed jwt" {
			// render 404 page
			c.String(400, "bad auth or malformed jwt")
		} else {
			// render 404 page
			c.File("./client/build/index.html")
		}

	}
}
