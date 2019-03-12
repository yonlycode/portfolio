package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandleAdminAPI bind user api router to @e app  */
func HandleAdminAPI(e *echo.Echo) {
	e.GET("/api/admin", controllers.AllAdminsEndPoint)

	e.POST("/api/admin", controllers.CreateAdminEndPoint)

	e.PUT("/api/admin/:id", controllers.UpdateAdminEndPoint)

	e.GET("/api/admin/:id", controllers.FindAdminByIDEndPoint)

	e.DELETE("/api/admin/:id", controllers.DeleteAdminEndPoint)
}
