package controllers

import (
	"log"
	"portfolio/models"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

// AllSkillsEndPoint return all skills
func AllSkillsEndPoint(c echo.Context) error {
	skills, err := Dba.FindAllSkills()
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, skills)
}

// LastSkillsEndPoint return 15 last skills
func LastSkillsEndPoint(c echo.Context) error {
	skills, err := Dba.FindLastSkills()
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, skills)
}

// FindSkillByIDEndPoint return a skill by id
func FindSkillByIDEndPoint(c echo.Context) error {
	skill, err := Dba.FindSkillByID(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, skill)

}

// CreateSkillEndPoint create new skill
func CreateSkillEndPoint(c echo.Context) error {
	//set Model
	var m models.SkillModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//generate id/date and hash password
	m.ID = bson.NewObjectId()
	m.Created = time.Now()

	//insert to model to database
	if err := Dba.InsertSkill(m); err != nil {
		return c.String(500, "error : "+err.Error())
	}

	//return success
	return c.String(200, "skill Created successfully")
}

// UpdateSkillEndPoint update skill
func UpdateSkillEndPoint(c echo.Context) error {
	//set Model
	var m models.SkillModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//insert to model to database
	if err := Dba.UpdateSkill(m, c.Param("id")); err != nil {
		log.Println(err)
		return c.String(500, "error : "+err.Error())
	}
	//return success
	return c.String(200, "Skill Updated successfully")
}

// DeleteSkillEndPoint delete skill by id
func DeleteSkillEndPoint(c echo.Context) error {
	err := Dba.DeleteSkill(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, "success")
}
