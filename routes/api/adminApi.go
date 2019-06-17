package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandleAdminAPI bind user api router to @e app  */
func HandleAdminAPI(e *echo.Group) {
	e.GET("/admin", controllers.AllAdminsEndPoint)

	e.POST("/admin", controllers.CreateAdminEndPoint)

	e.PUT("/admin/:id", controllers.UpdateAdminEndPoint)

	e.GET("/admin/:id", controllers.FindAdminByIDEndPoint)

	e.DELETE("/admin/:id", controllers.DeleteAdminEndPoint)
}
