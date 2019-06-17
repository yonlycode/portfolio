package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandleSocialAPI bind subs api router to @e app  */
func HandleSocialAPI(e *echo.Group) {
	e.GET("/sub", controllers.AllSubsEndPoint)

	e.POST("/sub", controllers.CreateSubEndPoint)

	e.PUT("/sub/:id", controllers.UpdateSubEndPoint)

	e.GET("/sub/:id", controllers.FindSubByIDEndPoint)

	e.DELETE("/sub/:id", controllers.DeleteSubEndPoint)
}
