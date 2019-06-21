package models

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

/*ServiceModel is db représantation of a service */
type ServiceModel struct {
	ID          bson.ObjectId `bson:"_id" json:"_id" binding:"required"`
	Name        string        `bson:"name" json:"name" binding:"required"`
	Description string        `bson:"description" json:"description" binding:"required"`
	Icon        string        `bson:"icon" json:"icon" binding:"required"`
	Text        string        `bson:"text" json:"text" binding:"required"`
	Created     time.Time     `bson:"created" json:"created" binding:"required"`
}
