package actions

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

func HandleConnection(e *echo.Echo) {
	e.POST("/login-admin", controllers.AdminLoginActionEndPoint)
}
