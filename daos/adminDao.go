package daos

import (
	"portfolio/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	admincol = "admin"
)

func (m *DbAccess) FindAllAdmins() ([]models.AdminModel, error) {
	var admins []models.AdminModel
	err := db.C(admincol).Find(bson.M{}).Sort("-date").All(&admins)
	return admins, err
}

func (m *DbAccess) FindAdminByID(id string) (models.AdminModel, error) {
	var admin models.AdminModel
	err := db.C(admincol).FindId(bson.ObjectIdHex(id)).One(&admin)
	return admin, err
}

func (m *DbAccess) InsertAdmin(admin models.AdminModel) error {
	err := db.C(admincol).Insert(&admin)
	return err
}

func (m *DbAccess) DeleteAdmin(id string) error {
	err := db.C(admincol).RemoveId(id)
	return err
}

func (m *DbAccess) UpdateAdmin(admin models.AdminModel, id string) error {
	err := db.C(admincol).UpdateId(id, &admin)
	return err
}
