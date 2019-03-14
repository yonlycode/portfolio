package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandleSubsAPI bind subs api router to @e app  */
func HandleSubsAPI(e *echo.Echo) {
	e.GET("/api/social-network", controllers.AllSocialNetworksEndPoint)

	e.POST("/api/social-network", controllers.CreateSocialNetworkEndPoint)

	e.PUT("/api/social-network/:id", controllers.UpdateSocialNetworkEndPoint)

	e.DELETE("/api/social-network/:id", controllers.DeleteSocialNetworkEndPoint)
}
