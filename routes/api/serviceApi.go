package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandlePortfolioAPI bind user api router to @e app  */
func HandleServiceAPI(e *echo.Group) {
	e.GET("/service", controllers.AllServicesEndPoint)

	e.POST("/service", controllers.CreateServiceEndPoint)

	e.PUT("/service/:id", controllers.UpdateServiceEndPoint)

	e.GET("/service/:id", controllers.FindServiceByIDEndPoint)

	e.DELETE("/service/:id", controllers.DeleteServiceEndPoint)
}
