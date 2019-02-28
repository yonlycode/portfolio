package controllers

import (
	"portfolio/controllers/admin"
	"portfolio/controllers/client"
	"portfolio/daos"
)

var Dba *daos.DbAccess

func SyncDba() {
	client.Dba = Dba
	admin.Dba = Dba
}
