package api

import (
	"portfolio/controllers"

	"github.com/labstack/echo"
)

/*HandleSkillAPI bind user api router to @e app  */
func HandleSkillAPI(e *echo.Group) {
	e.GET("/skill", controllers.AllSkillsEndPoint)

	e.POST("/skill", controllers.CreateSkillEndPoint)

	e.PUT("/skill/:id", controllers.UpdateSkillEndPoint)

	e.GET("/skill/:id", controllers.FindSkillByIDEndPoint)

	e.DELETE("/skill/:id", controllers.DeleteSkillEndPoint)
}
