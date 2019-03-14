package controllers

import (
	"log"
	"portfolio/models"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

// AllEducationsEndPoint return all blog posts
func AllEducationsEndPoint(c echo.Context) error {
	posts, err := Dba.FindAllEducations()
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, posts)
}

// FindEducationByIDEndPoint return a blog post
func FindEducationByIDEndPoint(c echo.Context) error {
	post, err := Dba.FindEducationByID(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, post)

}

// CreateEducationEndPoint create new blog post
func CreateEducationEndPoint(c echo.Context) error {
	//set Model
	var m models.EducationModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//generate id/date and hash password
	m.ID = bson.NewObjectId()
	m.Created = time.Now()

	//insert to model to database
	if err := Dba.InsertEducation(m); err != nil {
		return c.String(500, "error : "+err.Error())
	}

	//return success
	return c.String(200, "Eucation skill Created successfully")
}

// UpdateEducationEndPoint update blog post data
func UpdateEducationEndPoint(c echo.Context) error {
	//set Model
	var m models.EducationModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//insert to model to database
	if err := Dba.UpdateEducation(m, c.Param("id")); err != nil {
		log.Println(err)
		return c.String(500, "error : "+err.Error())
	}
	//return success
	return c.String(200, "Education Updated successfully")
}

// DeleteEducationEndPoint delete post by admin
func DeleteEducationEndPoint(c echo.Context) error {
	err := Dba.DeleteEducation(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, "success")
}
