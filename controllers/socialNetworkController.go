package controllers

import (
	"log"
	"portfolio/models"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

// AllSocialNetworksEndPoint return all network links
func AllSocialNetworksEndPoint(c echo.Context) error {
	network, err := Dba.FindAllNetworks()
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, network)
}

// CreateSocialNetworkEndPoint create new blog post
func CreateSocialNetworkEndPoint(c echo.Context) error {
	//set Model
	var m models.SocialNetworkModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//generate id/date and hash password
	m.ID = bson.NewObjectId()
	m.Created = time.Now()

	//insert to model to database
	if err := Dba.InsertNetwork(m); err != nil {
		return c.String(500, "error : "+err.Error())
	}

	//return success
	return c.String(200, "Network Created successfully")
}

// UpdateSocialNetworkEndPoint update blog post data
func UpdateSocialNetworkEndPoint(c echo.Context) error {
	//set Model
	var m models.SocialNetworkModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//insert to model to database
	if err := Dba.UpdateNetwork(m, c.Param("id")); err != nil {
		log.Println(err)
		return c.String(500, "error : "+err.Error())
	}
	//return success
	return c.String(200, "Network Updated successfully")
}

// DeleteSocialNetworkEndPoint delete post by admin
func DeleteSocialNetworkEndPoint(c echo.Context) error {
	err := Dba.DeleteNetwork(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, "Network deleted successfully")
}
