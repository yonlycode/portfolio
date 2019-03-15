package routes

/*
	clientRoutes bind all client routes to @A
*/
func clientRoutes() {
	/*
		serve static folder "static-client" with "/" for root path
	*/
	A.Static("/*", "./clients/user/build")
	A.Static("/about-me", "./clients/user/build")
	A.Static("/contact", "./clients/user/build")
	A.Static("/works", "./clients/user/build")
	A.Static("/services", "./clients/user/build")
	A.Static("/blog", "./clients/user/build")

}
