package controllers

import (
	"log"
	"portfolio/models"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

// AllServicesEndPoint return all services
func AllServicesEndPoint(c echo.Context) error {
	services, err := Dba.FindAllServices()
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, services)
}

// FindServiceByIDEndPoint return a blog post
func FindServiceByIDEndPoint(c echo.Context) error {
	post, err := Dba.FindServiceByID(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, post)

}

// CreateServiceEndPoint create new blog post
func CreateServiceEndPoint(c echo.Context) error {
	//set Model
	var m models.ServiceModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//generate id/date and hash password
	m.ID = bson.NewObjectId()
	m.Created = time.Now()

	//insert to model to database
	if err := Dba.InsertService(m); err != nil {
		return c.String(500, "error : "+err.Error())
	}

	//return success
	return c.String(200, "service Created successfully")
}

// UpdateServiceEndPoint update blog post data
func UpdateServiceEndPoint(c echo.Context) error {
	//set Model
	var m models.ServiceModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//insert to model to database
	if err := Dba.UpdateService(m, c.Param("id")); err != nil {
		log.Println(err)
		return c.String(500, "error : "+err.Error())
	}
	//return success
	return c.String(200, "Service Updated successfully")
}

// DeleteServiceEndPoint delete post by id
func DeleteServiceEndPoint(c echo.Context) error {
	err := Dba.DeleteService(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, "success")
}
