package admin

import "portfolio/daos"

/*Dba is database access object  */
var Dba *daos.DbAccess

type homePage struct {
	Title string
}

type workPage struct {
	Title string
}

type contactPage struct {
	Title string
}

type servicePage struct {
	Title string
}

type aboutMePage struct {
	Title string
}

type notFoundPage struct {
	Title string
}
