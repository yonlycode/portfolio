package daos

import (
	"log"

	mgo "gopkg.in/mgo.v2"
)

/*DbAccess is database server's access information interface */
type DbAccess struct {
	Server   string
	Database string
}

var (

	/*Dao is used db access information */
	Dao DbAccess

	/*db is database internal instance */
	db *mgo.Database
)

//Connect methods is set in the beginning. check if all database and collections ares already created. It create them it's not.
func (m *DbAccess) Connect() {
	session, err := mgo.Dial(m.Server)
	if err != nil {
		log.Fatal(err.Error())
	}
	db = session.DB(m.Database)
}
