package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandleBlogAPI bind user api router to @e app  */
func HandleBlogAPI(e *echo.Echo) {
	e.GET("/api/blog", controllers.AllBlogPostsEndPoint)

	e.GET("/api/blog/:id", controllers.FindBlogPostByIDEndPoint)

	e.POST("/api/blog", controllers.CreateBlogPostEndPoint)

	e.PUT("/api/blog/:id", controllers.UpdateBlogPostEndPoint)

	e.DELETE("/api/blog/:id", controllers.DeleteBlogPostEndPoint)
}
