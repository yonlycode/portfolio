package routes

import "portfolio/controllers/admin"

/*
	adminRoutes bind all admin routes to @A
*/
func adminRoutes() {
	/*
		serve static folder "static-admin" with "/admin" for root path
	*/
	A.Static("/admin", "./static/admin")

	/*
		Define admin pages and bind controller to them
	*/
	A.GET("admin/", admin.HomePageEndPoint)
	A.GET("admin/login", admin.LoginPageEndPoint)
}
