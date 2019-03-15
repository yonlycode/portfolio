package routes

/*
	clientRoutes bind all client routes to @A
*/
func clientRoutes() {
	/*
		serve static folder "static-client" with "/" for root path
	*/

	A.File("/*", "./clients/user/build/index.html")
	A.Static("/", "./clients/user/build/")

}
