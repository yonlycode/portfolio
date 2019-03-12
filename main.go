package main

import (
	"os"
	"portfolio/controllers"
	"portfolio/daos"
	"portfolio/routes"
	"portfolio/utils"

	"github.com/labstack/echo"
)

var (
	a *echo.Echo

	dba daos.DbAccess
)

func init() {

	/*
		Load Env variables from ".env" root directory see .exmple.env for exemple
	*/
	utils.DotEnv()

	/*
		Create Application Instance
	*/
	a = echo.New()

	//a.Use(middlewares.BadURIHandler)

	/*
		Pass Application pointer to routes packages then binding router to app
	*/
	routes.A = a
	routes.SetRoutes()

	/*
		Set db's connection params and connect to it
	*/
	dbConnection()

	/*
		Parse template and attach tmp engine to application render function
	*/
	utils.SetTmpEngine(a)
}

func main() {

	/*
		Starting app
	*/
	a.Logger.Fatal(a.Start(os.Getenv("PORT")))
}

/*
	dbConnection get server's information from .env file then sync @dbAccess to controller's modules
*/
func dbConnection() {
	/*
		Get Dba information from .env file end create connection instance
	*/
	dba = daos.DbAccess{
		Server:   os.Getenv("DB_HOST"),
		Database: os.Getenv("DB_NAME"),
	}
	dba.Connect()
	/*
		sync @dbAccess to controller's modules
	*/
	controllers.Dba = &dba
}
