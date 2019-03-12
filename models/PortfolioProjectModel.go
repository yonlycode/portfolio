package models

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

//PortfolioProjectModel portfolio project data model
type PortfolioProjectModel struct {
	ID          bson.ObjectId `bson:"_id" json:"_id" binding:"required"`
	Name        string        `bson:"first_name" json:"first_name" binding:"required"`
	Description string        `bson:"last_name" json:"last_name" binding:"required"`
	Tag         []string      `bson:"job" json:"job" binding:"required"`
	Text        string        `bson:"birthdate" json:"birthdate" binding:"required"`
	Images      []string      `bson:"mail" json:"mail" binding:"required"`
	Creator     string        `bson:"localisation" json:"localisation" binding:"required"`
	Created     time.Time     `bson:"created" json:"created" binding:"required"`
}
