package models

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

//CustomerModel for db dba
type CustomerModel struct {
	ID      bson.ObjectId `bson:"_id" json:"_id" binding:"required"`
	Mail    string        `bson:"mail" json:"mail" binding:"required"`
	Name    string        `bson:"name" json:"name" binding:"required"`
	Job     string        `bson:"job" json:"job" binding:"required"`
	Created time.Time     `bson:"created" json:"created" binding:"required"`
}
