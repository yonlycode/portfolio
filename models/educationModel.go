package models

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

//EducationModel is structure of an account on a social network
type EducationModel struct {
	ID           bson.ObjectId `bson:"_id" json:"_id" binding:"required"`
	School       string        `bson:"school" json:"company" binding:"required"`
	Diploma      string        `bson:"diploma" json:"diploma" binding:"required"`
	Localisation string        `bson:"localisation" json:"localisation" binding:"required"`
	From         time.Time     `bson:"from" json:"from" binding:"required"`
	To           time.Time     `bson:"to" json:"created" binding:"required"`
}
