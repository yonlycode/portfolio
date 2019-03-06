package routes

/*
	clientRoutes bind all client routes to @A
*/
func clientRoutes() {
	/*
		serve static folder "static-client" with "/" for root path
	*/
	A.Static("/", "./clients/user/build")
	A.Static("/public", "./static")

	/*
		Define client pages and bind controller to them
	*/
	/*
		A.GET("/", client.HomePageEndPoint)
		A.GET("/works", client.WorkPageEndPoint)
		A.GET("/about-me", client.AboutmePageEndPoint)
		A.GET("services", client.ServicePageEndPoint)
		A.GET("/contact", client.ContactPageEndPoint)
	*/
}
