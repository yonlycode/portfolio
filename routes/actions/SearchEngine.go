package actions

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

func SearchEngine(a *echo.Echo) {
	a.GET("/search", controllers.SearchEndPoint)
}
