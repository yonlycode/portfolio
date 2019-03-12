package routes

/*
	adminRoutes bind all admin routes to @A
*/
func adminRoutes() {
	/*
		serve static folder "static-admin" with "/admin" for root path
	*/
	g := A.Group("/admin/")
	g.Static("/", "./clients/admin/build")

	/*
		Define admin pages and bind controller to them
	*/

}
