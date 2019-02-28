package models

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

//ExperienceModel is structure of an account on a social network
type ExperienceModel struct {
	ID           bson.ObjectId `bson:"_id" json:"_id" binding:"required"`
	Company      string        `bson:"company" json:"company" binding:"required"`
	Job          string        `bson:"job" json:"job" binding:"required"`
	Localisation string        `bson:"localisation" json:"localisation" binding:"required"`
	From         time.Time     `bson:"from" json:"from" binding:"required"`
	To           time.Time     `bson:"to" json:"created" binding:"required"`
}
