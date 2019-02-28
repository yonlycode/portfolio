package utils

import (
	"html/template"
	"io"

	"github.com/labstack/echo"
)

/*Template is template engine structure */
type Template struct {
	templates *template.Template
}

/*SetTmpEngine Parse template from directory and bind render engine to application instance
@A is application instance
*/
func SetTmpEngine(A *echo.Echo) {
	t := &Template{
		templates: template.Must(template.ParseGlob("./tmp/**/*.go.html")),
	}
	A.Renderer = t
}

/*Render is template rendering engine function */
func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}
