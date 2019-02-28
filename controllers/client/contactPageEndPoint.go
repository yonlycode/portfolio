package client

import (
	"net/http"

	"github.com/labstack/echo"
)

/*ContactPageEndPoint render contact page */
func ContactPageEndPoint(c echo.Context) error {
	d := workPage{Title: "Mes travaux"}
	return c.Render(http.StatusOK, "home", d)
}
