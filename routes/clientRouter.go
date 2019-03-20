package routes

/*
	clientRoutes bind all client routes to @A
*/
func clientRoutes() {
	/*
		serve static folder "static-client" with "/" for root path
	*/
	A.Static("*", "./clients/build")
	A.Static("/about-me", "./clients/build")
	A.Static("/contact", "./clients/build")
	A.Static("/works", "./clients/build")
	A.Static("/services", "./clients/build")
	A.Static("/blog", "./clients/build")

}
