package client

import (
	"net/http"

	"github.com/labstack/echo"
)

/*AllBlogPostPageEndPoint render all blog client page */
func AllBlogPostPageEndPoint(c echo.Context) error {
	d := workPage{Title: "Mes travaux"}
	return c.Render(http.StatusOK, "home", d)
}
