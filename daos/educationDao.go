package daos

import (
	"portfolio/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	educationCollection = "education"
)

//FindAllEducations return all education data
func (m *DbAccess) FindAllEducations() ([]models.EducationModel, error) {
	var projects []models.EducationModel
	err := db.C(educationCollection).Find(bson.M{}).Sort("-created").All(&projects)
	return projects, err
}

//FindEducationByID return id's education
func (m *DbAccess) FindEducationByID(id string) (models.EducationModel, error) {
	var project models.EducationModel
	err := db.C(educationCollection).FindId(bson.ObjectIdHex(id)).One(&project)
	return project, err
}

//InsertEducation insert a project
func (m *DbAccess) InsertEducation(project models.EducationModel) error {
	err := db.C(educationCollection).Insert(&project)
	return err
}

//DeleteEducation delete a project
func (m *DbAccess) DeleteEducation(id string) error {
	err := db.C(educationCollection).RemoveId(bson.ObjectIdHex(id))
	return err
}

//UpdateEducation update a project
func (m *DbAccess) UpdateEducation(project models.EducationModel, id string) error {
	err := db.C(educationCollection).Update(bson.M{"_id": bson.ObjectIdHex(id)}, &project)
	return err
}
