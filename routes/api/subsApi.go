package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandleSubsAPI bind subs api router to @e app  */
func HandleSubsAPI(e *echo.Group) {

	/* Api routes */
	e.GET("/social-network", controllers.AllSocialNetworksEndPoint)

	e.POST("/social-network", controllers.CreateSocialNetworkEndPoint)

	e.PUT("/social-network/:id", controllers.UpdateSocialNetworkEndPoint)

	e.DELETE("/social-network/:id", controllers.DeleteSocialNetworkEndPoint)

	/* Action routes */

	e.POST("/subscribe-to-newsletter", controllers.HandleNewSubscriber)

}
