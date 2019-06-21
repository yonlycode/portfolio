package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandlePortfolioAPI bind user api router to @e app  */
func HandleImageAPI(e *echo.Group) {
	e.GET("/img", controllers.AllImagesEndPoint)

	e.POST("/img", controllers.UploadImageEndPoint)

	e.PUT("/img/:id", controllers.UpdateImageEndPoint)

	e.GET("/img/:id", controllers.FindImageByIDEndPoint)

	e.DELETE("/img/:id", controllers.DeleteImageEndPoint)
}
