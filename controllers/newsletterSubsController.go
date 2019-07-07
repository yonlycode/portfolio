package controllers

import (
	"fmt"
	"log"
	"net/http"
	"portfolio/models"
	"portfolio/utils"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

// AllSubsEndPoint return all blog posts
func AllSubsEndPoint(c echo.Context) error {
	subs, err := Dba.FindAllSubs()
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, subs)
}

// FindSubByIDEndPoint return a blog post
func FindSubByIDEndPoint(c echo.Context) error {
	sub, err := Dba.FindSubByID(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, sub)

}

// CreateSubEndPoint create new blog post
func CreateSubEndPoint(c echo.Context) error {
	//set Model
	var m models.NewsLetterSubscriverModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//generate id/date and hash password
	m.ID = bson.NewObjectId()
	m.Created = time.Now()

	//insert to model to database
	if err := Dba.InsertSub(m); err != nil {
		return c.String(500, "error : "+err.Error())
	}

	//return success
	return c.String(200, "Sub Added successfully")
}

// UpdateSubEndPoint update blog post data
func UpdateSubEndPoint(c echo.Context) error {
	//set Model
	var m models.NewsLetterSubscriverModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//insert to model to database
	if err := Dba.UpdateSub(m, c.Param("id")); err != nil {
		log.Println(err)
		return c.String(500, "error : "+err.Error())
	}

	//return success
	return c.String(200, "Sub Updated successfully")
}

// DeleteSubEndPoint delete post by admin
func DeleteSubEndPoint(c echo.Context) error {
	err := Dba.DeleteSub(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, "deleted successfully")
}

//HandleNewSubscriber new subscriver handler end point
func HandleNewSubscriber(c echo.Context) error {

	//set Model
	var m models.NewsLetterSubscriverModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//check if mail is already registered to db
	checkInDb, err := Dba.FindSubByMail(m.Mail)
	if err != nil {
		//if mail is valid
		if utils.IsMail(m.Mail) {
			fmt.Println("good mail")

			//generate id/date and hash password
			m.ID = bson.NewObjectId()
			m.Created = time.Now()

			//insert to model to database
			if err := Dba.InsertSub(m); err != nil {
				return c.String(500, "error : "+err.Error())
			}
			return c.JSON(200, "added to newsletter list successfully")
		}
		//else
		fmt.Println("bad mail")

		return c.JSON(http.StatusBadRequest, "need a valid mail")

	}
	fmt.Println(" mail already exist")

	return c.JSON(http.StatusBadRequest, "mail "+checkInDb.Mail+" already registered")

}
