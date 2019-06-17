package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandleExperienceAPI bind user api router to @e app  */
func HandleExperienceAPI(e *echo.Group) {
	e.GET("/experience", controllers.AllExperiencesEndPoint)

	e.POST("/experience", controllers.CreateExperienceEndPoint)

	e.PUT("/experience/:id", controllers.UpdateExperienceEndPoint)

	e.GET("/experience/:id", controllers.FindExperienceByIDEndPoint)

	e.DELETE("/experience/:id", controllers.DeleteExperienceEndPoint)
}
