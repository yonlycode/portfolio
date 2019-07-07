package actions

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

//SyncOpenAPI expose the data that haven't to be restricted
func SyncOpenAPI(a *echo.Echo) {

	a.POST("/subscribe-to-newsletter", controllers.HandleNewSubscriber)
	a.GET("/last-skills", controllers.LastSkillsEndPoint)
	a.GET("/hot-services", controllers.LastServicesEndPoint)
}
