package daos

import (
	"portfolio/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	imageCollection = "images"
)

//FindAllImages return all images
func (m *DbAccess) FindAllImages() ([]models.ImageModel, error) {
	var images []models.ImageModel
	err := db.C(imageCollection).Find(bson.M{}).Sort("-created").All(&images)
	return images, err
}

//FindImageByID return name
func (m *DbAccess) FindImageByID(id string) (models.ImageModel, error) {
	var image models.ImageModel
	err := db.C(imageCollection).Find(bson.M{"_id": bson.ObjectIdHex(id)}).One(&image)
	return image, err
}

//InsertImage create new image
func (m *DbAccess) InsertImage(image models.ImageModel) error {
	err := db.C(imageCollection).Insert(&image)
	return err
}

//DeleteImage delete image
func (m *DbAccess) DeleteImage(id string) error {
	err := db.C(imageCollection).RemoveId(bson.ObjectIdHex(id))
	return err
}

//UpdateImage update image
func (m *DbAccess) UpdateImage(image models.ImageModel, id string) error {
	err := db.C(imageCollection).Update(bson.M{"_id": bson.ObjectIdHex(id)}, &image)
	return err
}
