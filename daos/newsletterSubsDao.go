package daos

import (
	"portfolio/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	newletterSubsCollection = "newletterSubs"
)

//FindAllSubs return all subs data
func (m *DbAccess) FindAllSubs() ([]models.NewsLetterSubscriverModel, error) {
	var subs []models.NewsLetterSubscriverModel
	err := db.C(newletterSubsCollection).Find(bson.M{}).Sort("-created").All(&subs)
	return subs, err
}

//FindSubByID return id's work Experience
func (m *DbAccess) FindSubByID(id string) (models.NewsLetterSubscriverModel, error) {
	var sub models.NewsLetterSubscriverModel
	err := db.C(newletterSubsCollection).FindId(bson.ObjectIdHex(id)).One(&sub)
	return sub, err
}

//FindSubByMail return admin
func (m *DbAccess) FindSubByMail(mail string) (models.NewsLetterSubscriverModel, error) {
	var sub models.NewsLetterSubscriverModel
	err := db.C(newletterSubsCollection).Find(bson.M{"mail": mail}).One(&sub)
	return sub, err
}

//InsertSub insert a work Experience
func (m *DbAccess) InsertSub(sub models.NewsLetterSubscriverModel) error {
	err := db.C(newletterSubsCollection).Insert(&sub)
	return err
}

//DeleteSub delete a work Experience
func (m *DbAccess) DeleteSub(id string) error {
	err := db.C(newletterSubsCollection).RemoveId(bson.ObjectIdHex(id))
	return err
}

//UpdateSub update a work Experience
func (m *DbAccess) UpdateSub(workExperience models.NewsLetterSubscriverModel, id string) error {
	err := db.C(newletterSubsCollection).Update(bson.M{"_id": bson.ObjectIdHex(id)}, &workExperience)
	return err
}
