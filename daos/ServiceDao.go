package daos

import (
	"portfolio/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	serviceCollection = "services"
)

//FindAllServices return all services
func (m *DbAccess) FindAllServices() ([]models.ServiceModel, error) {
	var services []models.ServiceModel
	err := db.C(serviceCollection).Find(bson.M{}).Sort("-created").All(&services)
	return services, err
}

//FindServiceByID return name
func (m *DbAccess) FindServiceByID(id string) (models.ServiceModel, error) {
	var service models.ServiceModel
	err := db.C(adminCollection).FindId(bson.ObjectIdHex(id)).One(&service)
	return service, err
}

//InsertService create new service
func (m *DbAccess) InsertService(service models.ServiceModel) error {
	err := db.C(serviceCollection).Insert(&service)
	return err
}

//DeleteService delete service
func (m *DbAccess) DeleteService(id string) error {
	err := db.C(serviceCollection).RemoveId(bson.ObjectIdHex(id))
	return err
}

//UpdateService update service
func (m *DbAccess) UpdateService(service models.ServiceModel, id string) error {
	err := db.C(serviceCollection).Update(bson.M{"_id": bson.ObjectIdHex(id)}, &service)
	return err
}
