package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandleBlogAPI bind user api router to @e app  */
func HandleBlogAPI(e *echo.Group) {
	e.GET("/blog", controllers.AllBlogPostsEndPoint)

	e.GET("/blog/:id", controllers.FindBlogPostByIDEndPoint)

	e.POST("/blog", controllers.CreateBlogPostEndPoint)

	e.PUT("/blog/:id", controllers.UpdateBlogPostEndPoint)

	e.DELETE("/blog/:id", controllers.DeleteBlogPostEndPoint)
}
