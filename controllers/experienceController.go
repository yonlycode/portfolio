package controllers

import (
	"log"
	"portfolio/models"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

// AllExperiencesEndPoint return all blog posts
func AllExperiencesEndPoint(c echo.Context) error {
	posts, err := Dba.FindAllExperiences()
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, posts)
}

// FindExperienceByIDEndPoint return a blog post
func FindExperienceByIDEndPoint(c echo.Context) error {
	post, err := Dba.FindExperienceByID(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, post)

}

// CreateExperienceEndPoint create new blog post
func CreateExperienceEndPoint(c echo.Context) error {
	//set Model
	var m models.ExperienceModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//generate id/date and hash password
	m.ID = bson.NewObjectId()
	m.Created = time.Now()

	//insert to model to database
	if err := Dba.InsertExperience(m); err != nil {
		return c.String(500, "error : "+err.Error())
	}

	//return success
	return c.String(200, "Experience skill Created successfully")
}

// UpdateExperienceEndPoint update blog post data
func UpdateExperienceEndPoint(c echo.Context) error {
	//set Model
	var m models.ExperienceModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//insert to model to database
	if err := Dba.UpdateExperience(m, c.Param("id")); err != nil {
		log.Println(err)
		return c.String(500, "error : "+err.Error())
	}
	//return success
	return c.String(200, "Experience Updated successfully")
}

// DeleteExperienceEndPoint delete post by admin
func DeleteExperienceEndPoint(c echo.Context) error {
	err := Dba.DeleteExperience(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, "success")
}
