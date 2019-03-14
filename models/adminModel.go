package models

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

//AdminModel is structure of an account on a social network
type AdminModel struct {
	ID           bson.ObjectId `bson:"_id" json:"_id" binding:"required"`
	FirstName    string        `bson:"firstName" json:"firstName" binding:"required"`
	LastName     string        `bson:"lastName" json:"lastName" binding:"required"`
	Password     string        `bson:"password" json:"password" binding:"required"`
	Job          string        `bson:"job" json:"job" binding:"required"`
	Description  string        `bson:"description" json:"description" binding:"required"`
	Birthdate    string        `bson:"birthdate" json:"birthdate" binding:"required"`
	Mail         string        `bson:"mail" json:"mail" binding:"required"`
	Localisation string        `bson:"localisation" json:"localisation" binding:"required"`
	Created      time.Time     `bson:"created" json:"created" binding:"required"`
}
