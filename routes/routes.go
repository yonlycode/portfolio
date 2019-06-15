package routes

import (
	"portfolio/routes/api"

	"github.com/labstack/echo"
)

/*A is a pointer to the App instance */
var A *echo.Echo

/*SetRoutes bind routes to the application */
func SetRoutes() {

	A.Static("/public", "./static")

	/* Handle server actions on router */
	api.HandlePortfolioAPI(A)
	api.HandleBlogAPI(A)
	api.HandleAdminAPI(A)
	api.HandleExperienceAPI(A)
	api.HandleEducationAPI(A)
	api.HandleSocialAPI(A)
	api.HandleSubsAPI(A)

	/*Set redirection to application on 404  */
	A.HTTPErrorHandler = func(err error, c echo.Context) {
		// render 404 page
		c.File("./client/build/index.html")
	}
}
