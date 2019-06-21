package models

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

//ImageModel is représantation of an image uploaded from panel on db
type ImageModel struct {
	ID          bson.ObjectId `bson:"_id" json:"_id" binding:"required"`
	Name        string        `bson:"name" json:"name" binding:"required"`
	Description string        `bson:"description" json:"description" binding:"required"`
	Tags        []string      `bson:"tags" json:"tags" binding:"required"`
	URI         string        `bson:"uri" json:"uri" binding:"required"`
	Uploaded    time.Time     `bson:"uploaded" json:"uploaded" binding:"required"`
}
