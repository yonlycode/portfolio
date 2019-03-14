package daos

import (
	"portfolio/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	experienceCollection = "experience"
)

//FindAllExperiences return all work Experience data
func (m *DbAccess) FindAllExperiences() ([]models.ExperienceModel, error) {
	var workExperiences []models.ExperienceModel
	err := db.C(experienceCollection).Find(bson.M{}).Sort("-created").All(&workExperiences)
	return workExperiences, err
}

//FindExperienceByID return id's work Experience
func (m *DbAccess) FindExperienceByID(id string) (models.ExperienceModel, error) {
	var workExperience models.ExperienceModel
	err := db.C(experienceCollection).FindId(bson.ObjectIdHex(id)).One(&workExperience)
	return workExperience, err
}

//InsertExperience insert a work Experience
func (m *DbAccess) InsertExperience(workExperience models.ExperienceModel) error {
	err := db.C(experienceCollection).Insert(&workExperience)
	return err
}

//DeleteExperience delete a work Experience
func (m *DbAccess) DeleteExperience(id string) error {
	err := db.C(experienceCollection).RemoveId(bson.ObjectIdHex(id))
	return err
}

//UpdateExperience update a work Experience
func (m *DbAccess) UpdateExperience(workExperience models.ExperienceModel, id string) error {
	err := db.C(experienceCollection).Update(bson.M{"_id": bson.ObjectIdHex(id)}, &workExperience)
	return err
}
