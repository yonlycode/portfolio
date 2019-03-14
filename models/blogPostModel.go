package models

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

//BlogPostModel blog post data model
type BlogPostModel struct {
	ID          bson.ObjectId `bson:"_id" json:"_id" binding:"required"`
	Name        string        `bson:"name" json:"name" binding:"required"`
	Description string        `bson:"description" json:"description" binding:"required"`
	Tag         []string      `bson:"tag" json:"tag" binding:"required"`
	Text        string        `bson:"text" json:"text" binding:"required"`
	Images      []string      `bson:"images" json:"images" binding:"required"`
	Creator     string        `bson:"creator" json:"creator" binding:"required"`
	Created     time.Time     `bson:"created" json:"created" binding:"required"`
}
