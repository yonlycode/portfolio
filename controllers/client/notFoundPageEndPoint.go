package client

import (
	"net/http"

	"github.com/labstack/echo"
)

/*NotFoundPageEndPoint render 404 not found client page */
func NotFoundPageEndPoint(c echo.Context) error {
	d := workPage{Title: "Mes travaux"}
	return c.Render(http.StatusOK, "home", d)
}
