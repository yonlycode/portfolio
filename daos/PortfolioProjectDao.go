package daos

import (
	"portfolio/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	PortfolioProject = "portfolio"
)

//FindAllPortfolioProjects return all portfolio project
func (m *DbAccess) FindAllPortfolioProjects() ([]models.PortfolioProjectModel, error) {
	var projects []models.PortfolioProjectModel
	err := db.C(PortfolioProject).Find(bson.M{}).Sort("-date").All(&projects)
	return projects, err
}

//FindPortfolioProjectByID return id's project
func (m *DbAccess) FindPortfolioProjectByID(id string) (models.PortfolioProjectModel, error) {
	var project models.PortfolioProjectModel
	err := db.C(PortfolioProject).FindId(bson.ObjectIdHex(id)).One(&project)
	return project, err
}

//InsertPortfolioProject insert a project
func (m *DbAccess) InsertPortfolioProject(project models.PortfolioProjectModel) error {
	err := db.C(PortfolioProject).Insert(&project)
	return err
}

//DeletePortfolioProject delete a project
func (m *DbAccess) DeletePortfolioProject(id string) error {
	err := db.C(PortfolioProject).RemoveId(bson.ObjectIdHex(id))
	return err
}

//UpdatePortfolioProject update a project
func (m *DbAccess) UpdatePortfolioProject(project models.PortfolioProjectModel, id string) error {
	err := db.C(PortfolioProject).Update(bson.M{"_id": bson.ObjectIdHex(id)}, &project)
	return err
}
