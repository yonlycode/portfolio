package daos

import (
	"portfolio/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	networkCol = "networks"
)

func (m *DbAccess) FindAllNetworks() ([]models.SocialNetworkModel, error) {
	var networks []models.SocialNetworkModel
	err := db.C(networkCol).Find(bson.M{}).Sort("-date").All(&networks)
	return networks, err
}

func (m *DbAccess) InsertNetwork(network models.SocialNetworkModel) error {
	err := db.C(networkCol).Insert(&network)
	return err
}

func (m *DbAccess) DeleteNetwork(id string) error {
	err := db.C(networkCol).RemoveId(id)
	return err
}

func (m *DbAccess) UpdateNetwork(network models.SocialNetworkModel, id string) error {
	err := db.C(networkCol).UpdateId(id, &network)
	return err
}
