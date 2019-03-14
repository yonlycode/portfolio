package models

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

//SocialNetworkModel is structure of an account on a social network
type SocialNetworkModel struct {
	ID          bson.ObjectId `bson:"_id" json:"_id" binding:"required"`
	URI         string        `bson:"uri" json:"uri" binding:"required"`
	FontAwesome string        `bson:"fontAwesome" json:"fontAwesome" binding:"required"`
	Name        string        `bson:"name" json:"name" binding:"required"`
	Created     time.Time     `bson:"created" json:"created" binding:"required"`
}
