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

	/* Serve react static application on router */
	clientRoutes()
}
