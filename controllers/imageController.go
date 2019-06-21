package controllers

import (
	"log"
	"portfolio/models"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

// AllImagesEndPoint return all images
func AllImagesEndPoint(c echo.Context) error {
	images, err := Dba.FindAllImages()
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, images)
}

// FindImageByIDEndPoint return an image
func FindImageByIDEndPoint(c echo.Context) error {
	image, err := Dba.FindImageByID(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, image)

}

// UploadImageEndPoint upload new image
func UploadImageEndPoint(c echo.Context) error {
	//set Model
	var m models.ImageModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//generate id/date and hash password
	m.ID = bson.NewObjectId()
	m.Uploaded = time.Now()

	//insert to model to database
	if err := Dba.InsertImage(m); err != nil {
		return c.String(500, "error : "+err.Error())
	}

	//return success
	return c.String(200, "image uploaded successfully")
}

// UpdateImageEndPoint update blog post data
func UpdateImageEndPoint(c echo.Context) error {
	//set Model
	var m models.ImageModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//insert to model to database
	if err := Dba.UpdateImage(m, c.Param("id")); err != nil {
		log.Println(err)
		return c.String(500, "error : "+err.Error())
	}
	//return success
	return c.String(200, "image Updated successfully")
}

// DeleteImageEndPoint delete post by id
func DeleteImageEndPoint(c echo.Context) error {
	err := Dba.DeleteImage(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, "success")
}
