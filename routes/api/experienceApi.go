package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandleExperienceAPI bind user api router to @e app  */
func HandleExperienceAPI(e *echo.Echo) {
	e.GET("/api/experience", controllers.AllExperiencesEndPoint)

	e.POST("/api/experience", controllers.CreateExperienceEndPoint)

	e.PUT("/api/experience/:id", controllers.UpdateExperienceEndPoint)

	e.GET("/api/experience/:id", controllers.FindExperienceByIDEndPoint)

	e.DELETE("/api/experience/:id", controllers.DeleteExperienceEndPoint)
}
