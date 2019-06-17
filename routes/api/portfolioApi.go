package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandlePortfolioAPI bind user api router to @e app  */
func HandlePortfolioAPI(e *echo.Group) {
	e.GET("/work", controllers.AllWorksEndPoint)

	e.POST("/work", controllers.CreateWorkEndPoint)

	e.PUT("/work/:id", controllers.UpdateWorkEndPoint)

	e.GET("/work/:id", controllers.FindWorkByIDEndPoint)

	e.DELETE("/work/:id", controllers.DeleteWorkEndPoint)
}
