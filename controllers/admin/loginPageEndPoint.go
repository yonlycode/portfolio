package admin

import (
	"net/http"

	"github.com/labstack/echo"
)

/*LoginPageEndPoint render index front page */
func LoginPageEndPoint(c echo.Context) error {
	d := homePage{Title: "un titre"}
	return c.Render(http.StatusOK, "adminLoginPage", d)
}
