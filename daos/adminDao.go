package daos

import (
	"portfolio/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	admincol = "admin"
)

//FindAllAdmins return all admin accounts
func (m *DbAccess) FindAllAdmins() ([]models.AdminModel, error) {
	var admins []models.AdminModel
	err := db.C(admincol).Find(bson.M{}).Sort("-date").All(&admins)
	return admins, err
}

//FindAdminByID return admin
func (m *DbAccess) FindAdminByID(id string) (models.AdminModel, error) {
	var admin models.AdminModel
	err := db.C(admincol).FindId(bson.ObjectIdHex(id)).One(&admin)
	return admin, err
}

//InsertAdmin add admin to db
func (m *DbAccess) InsertAdmin(admin models.AdminModel) error {
	err := db.C(admincol).Insert(&admin)
	return err
}

//DeleteAdmin delete admin
func (m *DbAccess) DeleteAdmin(id string) error {
	err := db.C(admincol).RemoveId(bson.ObjectIdHex(id))
	return err
}

//UpdateAdmin update admin
func (m *DbAccess) UpdateAdmin(admin models.AdminModel, id string) error {
	err := db.C(admincol).Update(bson.M{"_id": bson.ObjectIdHex(id)}, &admin)
	return err
}
