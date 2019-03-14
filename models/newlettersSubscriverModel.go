package models

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

//NewsLetterSubscriverModel is subscriver to new's letter model
type NewsLetterSubscriverModel struct {
	ID      bson.ObjectId `bson:"_id" json:"_id"`
	Mail    string        `bson:"mail" json:"mail"`
	Created time.Time     `bson:"created" json:"created"`
}
