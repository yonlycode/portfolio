package daos

import (
	"portfolio/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	blogPostCol = "blog"
)

//FindAllBlogPosts return all posts
func (m *DbAccess) FindAllBlogPosts() ([]models.BlogPostModel, error) {
	var posts []models.BlogPostModel
	err := db.C(blogPostCol).Find(bson.M{}).Sort("-date").All(&posts)
	return posts, err
}

//FindBlogPostByID return blog post
func (m *DbAccess) FindBlogPostByID(id string) (models.BlogPostModel, error) {
	var post models.BlogPostModel
	err := db.C(blogPostCol).FindId(bson.ObjectIdHex(id)).One(&post)
	return post, err
}

//InsertBlogPost add blogpost
func (m *DbAccess) InsertBlogPost(post models.BlogPostModel) error {
	err := db.C(blogPostCol).Insert(&post)
	return err
}

//DeleteBlogPost delete a blogpost
func (m *DbAccess) DeleteBlogPost(id string) error {
	err := db.C(blogPostCol).RemoveId(bson.ObjectIdHex(id))
	return err
}

//UpdateBlogPost upade blog post data
func (m *DbAccess) UpdateBlogPost(post models.BlogPostModel, id string) error {
	err := db.C(blogPostCol).Update(bson.M{"_id": bson.ObjectIdHex(id)}, post)
	return err
}
