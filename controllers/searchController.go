package controllers

import (
	"github.com/labstack/echo"
)

type searchParam struct {
}

func SearchEndPoint(c echo.Context) error {
	if c.QueryParam("type") != "" {
		if c.QueryParam("q") != "" {
			switch c.QueryParam("type") {
			case "skill":
				skills, _ := Dba.FindSkillsByName(c.QueryParam("q"))
				return c.JSON(200, skills)
				break
			case "blog":
				return c.String(200, "search for blog")
				break
			case "service":
				return c.String(200, "search for services")
				break
			case "all":
				return c.String(200, "search for all")
				break
			default:
				return c.String(500, "internal error")
				break
			}

		} else {
			return c.JSON(200, "with type and without param search")
		}
	} else {
		if c.QueryParam("q") != "" {
			return c.JSON(200, "with param type and search")
		} else {
			return c.JSON(200, "with type and without param search")
		}
	}
	return c.JSON(200, "wtf")

}
