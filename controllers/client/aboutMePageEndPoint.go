package client

import (
	"net/http"

	"github.com/labstack/echo"
)

/*AboutmePageEndPoint render about me page */
func AboutmePageEndPoint(c echo.Context) error {
	d := workPage{Title: "Mes travaux"}
	return c.Render(http.StatusOK, "home", d)
}
