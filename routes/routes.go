package routes

import (
	"github.com/labstack/echo"
)

/*A is a pointer to the App instance */
var A *echo.Echo

/*SetRoutes bind routes to the application */
func SetRoutes() {
	clientRoutes()
	adminRoutes()
}
