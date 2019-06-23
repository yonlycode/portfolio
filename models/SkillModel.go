package models

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

/*SkillModel is database represantation of a personnal skill */
type SkillModel struct {
	ID       bson.ObjectId `bson:"_id" json:"_id"`
	Name     string        `bson:"name" json:"name"`
	Info     string        `bson:"info" json:"info"`
	Firepost bool          `bson:"firepost" json:"firepost"`
	Created  time.Time     `bson:"created" json:"created"`
}
