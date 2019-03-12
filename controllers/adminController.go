package controllers

import (
	"portfolio/models"
	"portfolio/utils"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

// AllAdminsEndPoint ( ) => all admins
func AllAdminsEndPoint(c echo.Context) error {
	admins, err := Dba.FindAllAdmins()
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, admins)
}

// FindAdminByIDEndPoint ( admin.ID ) => admin
func FindAdminByIDEndPoint(c echo.Context) error {
	admin, err := Dba.FindAdminByID(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, admin)

}

// CreateAdminEndPoint ( user data) => create user
func CreateAdminEndPoint(c echo.Context) error {
	//set Model
	var m models.AdminModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//generate id/date and hash password
	m.ID = bson.NewObjectId()
	m.Password = utils.GenerateHash(m.Password)
	m.Created = time.Now()

	//insert to model to database
	if err := Dba.InsertAdmin(m); err != nil {
		return c.String(500, "error : "+err.Error())
	}

	//return success
	return c.String(200, "User Created successfully")
}

// UpdateAdminEndPoint ( admin data ) => update admin data
func UpdateAdminEndPoint(c echo.Context) error {
	//set Model
	var m models.AdminModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}
	//insert to model to database
	if err := Dba.UpdateAdmin(m, c.Param("id")); err != nil {
		return c.String(500, "error : "+err.Error())
	}
	//return success
	return c.String(200, "User Updated successfully")
}

// DeleteAdminEndPoint ( admin id ) => delete admin
func DeleteAdminEndPoint(c echo.Context) error {
	err := Dba.DeleteAdmin(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, "success")
}
