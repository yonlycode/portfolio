package controllers

import (
	"log"
	"portfolio/models"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

// AllWorksEndPoint return all blog posts
func AllWorksEndPoint(c echo.Context) error {
	posts, err := Dba.FindAllPortfolioProjects()
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, posts)
}

// FindWorkByIDEndPoint return a blog post
func FindWorkByIDEndPoint(c echo.Context) error {
	post, err := Dba.FindPortfolioProjectByID(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, post)

}

// CreateWorkEndPoint create new blog post
func CreateWorkEndPoint(c echo.Context) error {
	//set Model
	var m models.PortfolioProjectModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//generate id/date and hash password
	m.ID = bson.NewObjectId()
	m.Created = time.Now()

	//insert to model to database
	if err := Dba.InsertPortfolioProject(m); err != nil {
		return c.String(500, "error : "+err.Error())
	}

	//return success
	return c.String(200, "Project Created successfully")
}

// UpdateWorkEndPoint update blog post data
func UpdateWorkEndPoint(c echo.Context) error {
	//set Model
	var m models.PortfolioProjectModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//insert to model to database
	if err := Dba.UpdatePortfolioProject(m, c.Param("id")); err != nil {
		log.Println(err)
		return c.String(500, "error : "+err.Error())
	}
	//return success
	return c.String(200, "Project Updated successfully")
}

// DeleteWorkEndPoint delete post by admin
func DeleteWorkEndPoint(c echo.Context) error {
	err := Dba.DeletePortfolioProject(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, "deleted successfully")
}
