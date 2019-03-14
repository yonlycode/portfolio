package controllers

import (
	"log"
	"portfolio/models"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

// AllBlogPostsEndPoint return all blog posts
func AllBlogPostsEndPoint(c echo.Context) error {
	posts, err := Dba.FindAllBlogPosts()
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, posts)
}

// FindBlogPostByIDEndPoint return a blog post
func FindBlogPostByIDEndPoint(c echo.Context) error {
	post, err := Dba.FindBlogPostByID(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, post)

}

// CreateBlogPostEndPoint create new blog post
func CreateBlogPostEndPoint(c echo.Context) error {
	//set Model
	var m models.BlogPostModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//generate id/date and hash password
	m.ID = bson.NewObjectId()
	m.Created = time.Now()

	//insert to model to database
	if err := Dba.InsertBlogPost(m); err != nil {
		return c.String(500, "error : "+err.Error())
	}

	//return success
	return c.String(200, "Blog Post Created successfully")
}

// UpdateBlogPostEndPoint update blog post data
func UpdateBlogPostEndPoint(c echo.Context) error {
	//set Model
	var m models.BlogPostModel

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}

	//insert to model to database
	if err := Dba.UpdateBlogPost(m, c.Param("id")); err != nil {
		log.Println(err)
		return c.String(500, "error : "+err.Error())
	}
	//return success
	return c.String(200, "User Updated successfully")
}

// DeleteBlogPostEndPoint delete post by admin
func DeleteBlogPostEndPoint(c echo.Context) error {
	err := Dba.DeleteBlogPost(c.Param("id"))
	if err != nil {
		return c.String(500, "error : "+err.Error())
	}
	return c.JSON(200, "success")
}
