package daos

import (
	"portfolio/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	blogPostCollection = "blog"
)

//FindAllBlogPosts return all posts
func (m *DbAccess) FindAllBlogPosts() ([]models.BlogPostModel, error) {
	var posts []models.BlogPostModel
	err := db.C(blogPostCollection).Find(bson.M{}).Sort("-created").All(&posts)
	return posts, err
}

//FindBlogPostByID return blog post
func (m *DbAccess) FindBlogPostByID(id string) (models.BlogPostModel, error) {
	var post models.BlogPostModel
	err := db.C(blogPostCollection).FindId(bson.ObjectIdHex(id)).One(&post)
	return post, err
}

//InsertBlogPost add blogpost
func (m *DbAccess) InsertBlogPost(post models.BlogPostModel) error {
	err := db.C(blogPostCollection).Insert(&post)
	return err
}

//DeleteBlogPost delete a blogpost
func (m *DbAccess) DeleteBlogPost(id string) error {
	err := db.C(blogPostCollection).RemoveId(bson.ObjectIdHex(id))
	return err
}

//UpdateBlogPost upade blog post data
func (m *DbAccess) UpdateBlogPost(post models.BlogPostModel, id string) error {
	err := db.C(blogPostCollection).Update(bson.M{"_id": bson.ObjectIdHex(id)}, post)
	return err
}
