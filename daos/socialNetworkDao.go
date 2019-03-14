package daos

import (
	"portfolio/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	networkCollection = "networks"
)

//FindAllNetworks return all social network links
func (m *DbAccess) FindAllNetworks() ([]models.SocialNetworkModel, error) {
	var networks []models.SocialNetworkModel
	err := db.C(networkCollection).Find(bson.M{}).Sort("-created").All(&networks)
	return networks, err
}

//InsertNetwork create new social network link
func (m *DbAccess) InsertNetwork(network models.SocialNetworkModel) error {
	err := db.C(networkCollection).Insert(&network)
	return err
}

//DeleteNetwork delete social network link
func (m *DbAccess) DeleteNetwork(id string) error {
	err := db.C(networkCollection).RemoveId(bson.ObjectIdHex(id))
	return err
}

//UpdateNetwork update social network link
func (m *DbAccess) UpdateNetwork(network models.SocialNetworkModel, id string) error {
	err := db.C(networkCollection).Update(bson.M{"_id": bson.ObjectIdHex(id)}, &network)
	return err
}
