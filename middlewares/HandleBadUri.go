package middlewares

import (
	"log"
	"strings"

	"github.com/labstack/echo"
)

//BadURIHandler get all uri that don't end with a "/" and and it to them
func BadURIHandler(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		log.Println(c.Path())
		if strings.HasSuffix(c.Path(), "/") {
			return next(c)
		}
		return c.Redirect(308, string(c.Path()+`/`))

	}
}
