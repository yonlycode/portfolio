package models

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

/*SkillModel is database represantation of a personnal skill */
type SkillModel struct {
	ID        bson.ObjectId `bson:"_id" json:"_id"`
	Mail      string        `bson:"mail" json:"mail"`
	Categorie string        `bson:"categorie" json:"categorie"`
	Created   time.Time     `bson:"created" json:"created"`
}
