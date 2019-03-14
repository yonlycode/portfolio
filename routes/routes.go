package routes

import (
	"portfolio/routes/api"

	"github.com/labstack/echo"
)

/*A is a pointer to the App instance */
var A *echo.Echo

/*SetRoutes bind routes to the application */
func SetRoutes() {
	clientRoutes()
	adminRoutes()
	api.HandlePortfolioAPI(A)
	api.HandleBlogAPI(A)
	api.HandleAdminAPI(A)
	api.HandleExperienceAPI(A)
	api.HandleEducationAPI(A)
	api.HandleSocialAPI(A)

}
