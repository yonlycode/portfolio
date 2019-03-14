package daos

import (
	"portfolio/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	portfolioCollection = "portfolio"
)

//FindAllPortfolioProjects return all portfolio project
func (m *DbAccess) FindAllPortfolioProjects() ([]models.PortfolioProjectModel, error) {
	var projects []models.PortfolioProjectModel
	err := db.C(portfolioCollection).Find(bson.M{}).Sort("-created").All(&projects)
	return projects, err
}

//FindPortfolioProjectByID return id's project
func (m *DbAccess) FindPortfolioProjectByID(id string) (models.PortfolioProjectModel, error) {
	var project models.PortfolioProjectModel
	err := db.C(portfolioCollection).FindId(bson.ObjectIdHex(id)).One(&project)
	return project, err
}

//InsertPortfolioProject insert a project
func (m *DbAccess) InsertPortfolioProject(project models.PortfolioProjectModel) error {
	err := db.C(portfolioCollection).Insert(&project)
	return err
}

//DeletePortfolioProject delete a project
func (m *DbAccess) DeletePortfolioProject(id string) error {
	err := db.C(portfolioCollection).RemoveId(bson.ObjectIdHex(id))
	return err
}

//UpdatePortfolioProject update a project
func (m *DbAccess) UpdatePortfolioProject(project models.PortfolioProjectModel, id string) error {
	err := db.C(portfolioCollection).Update(bson.M{"_id": bson.ObjectIdHex(id)}, &project)
	return err
}
