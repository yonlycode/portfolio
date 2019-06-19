package utils

import (
	"os"
	"portfolio/daos"
	"portfolio/models"

	"gopkg.in/mgo.v2/bson"
)

/*
HaveAdminRegister Check is an admin is register to db or create it
*/
func HaveAdminRegister(dba daos.DbAccess) {
	_, err := dba.FindAdminByMail(os.Getenv("ADMIN_MAIL"))
	if err != nil {
		admin := models.AdminModel{
			ID:       bson.NewObjectId(),
			Mail:     os.Getenv("ADMIN_MAIL"),
			Password: GenerateHash(os.Getenv("ADMIN_PASS")),
		}
		err := dba.InsertAdmin(admin)
		if err != nil {
			panic(err.Error())
		}
	}
}
