package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandlePortfolioAPI bind user api router to @e app  */
func HandlePortfolioAPI(e *echo.Echo) {
	e.GET("/api/work", controllers.AllWorksEndPoint)

	e.POST("/api/work", controllers.CreateWorkEndPoint)

	e.PUT("/api/work/:id", controllers.UpdateWorkEndPoint)

	e.GET("/api/work/:id", controllers.FindWorkByIDEndPoint)

	e.DELETE("/api/work/:id", controllers.DeleteWorkEndPoint)
}
