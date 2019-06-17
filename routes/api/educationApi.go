package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandleEducationAPI bind user api router to @e app  */
func HandleEducationAPI(e *echo.Group) {
	e.GET("/education", controllers.AllEducationsEndPoint)

	e.POST("/education", controllers.CreateEducationEndPoint)

	e.PUT("/education/:id", controllers.UpdateEducationEndPoint)

	e.GET("/education/:id", controllers.FindEducationByIDEndPoint)

	e.DELETE("/education/:id", controllers.DeleteEducationEndPoint)
}
