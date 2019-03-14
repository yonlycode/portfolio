package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandleSocialAPI bind subs api router to @e app  */
func HandleSocialAPI(e *echo.Echo) {
	e.GET("/api/sub", controllers.AllSubsEndPoint)

	e.POST("/api/sub", controllers.CreateSubEndPoint)

	e.PUT("/api/sub/:id", controllers.UpdateSubEndPoint)

	e.GET("/api/sub/:id", controllers.FindSubByIDEndPoint)

	e.DELETE("/api/sub/:id", controllers.DeleteSubEndPoint)
}
