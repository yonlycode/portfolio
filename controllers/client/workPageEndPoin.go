package client

import (
	"net/http"

	"github.com/labstack/echo"
)

/*WorkPageEndPoint render Works page */
func WorkPageEndPoint(c echo.Context) error {
	d := workPage{Title: "Mes travaux"}
	return c.Render(http.StatusOK, "home", d)
}
