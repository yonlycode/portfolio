package main

import (
	"os"
	"portfolio/controllers"
	"portfolio/daos"
	"portfolio/routes"
	"portfolio/utils"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"golang.org/x/crypto/acme/autocert"
)

var (
	a *echo.Echo

	dba daos.DbAccess
)

func init() {

	/*
		Load Env variables from ".env" root directory see .exmpla.env for exemple
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

}

func main() {
	/* If prod is true in .env file */
	if os.Getenv("PROD") == "true" {

		/* dns autorisation */
		a.AutoTLSManager.HostPolicy = autocert.HostWhitelist("yoannfort.ga", "www.yoannfort.ga")

		/* cache file */
		a.AutoTLSManager.Cache = autocert.DirCache("/var/www/.cache")

		/* Http server */
		go func(c *echo.Echo) {
			/* https redirection */
			a.Pre(middleware.HTTPSWWWRedirect())

			a.Logger.Fatal(a.Start(os.Getenv("HTTP")))

		}(a)

		/* https redirection */
		a.Pre(middleware.HTTPSWWWRedirect())
		a.Use(middleware.Secure())
		a.Use(middleware.GzipWithConfig(middleware.GzipConfig{
			Level: 5,
		}))

		/* Https server */
		a.Logger.Fatal(a.StartAutoTLS(os.Getenv("HTTPS")))

	} else {
		/*
			Starting app
		*/
		a.Logger.Fatal(a.Start(os.Getenv("HTTP")))
	}

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
