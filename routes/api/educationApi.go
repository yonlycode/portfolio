package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandleEducationAPI bind user api router to @e app  */
func HandleEducationAPI(e *echo.Echo) {
	e.GET("/api/education-skill", controllers.AllEducationsEndPoint)

	e.POST("/api/education-skill", controllers.CreateEducationEndPoint)

	e.PUT("/api/education-skill/:id", controllers.UpdateEducationEndPoint)

	e.GET("/api/education-skill/:id", controllers.FindEducationByIDEndPoint)

	e.DELETE("/api/education-skill/:id", controllers.DeleteEducationEndPoint)
}
