package controllers

import (
	"net/http"
	"os"
	"portfolio/utils"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/labstack/echo"
)

/*AuthClaims JWT expended with user ID struct declaration */
type admin struct {
	Mail     string `json:"mail" form:"mail" query:"mail"`
	Password string `json:"password" form:"password" query:"password"`
}

//AdminLoginActionEndPoint return JW token for the authentification
func AdminLoginActionEndPoint(c echo.Context) error {
	/*
		Get mail from query then check database for existing admin logged with that mail

	*/
	u := new(admin)
	if err := c.Bind(u); err != nil {
		return c.String(500, "Internal problem")
	}
	admin, err := Dba.FindAdminByMail(u.Mail)

	/* If mail not found in db */
	if err != nil {
		return c.String(301, "Mail not found")
	}

	/* Test Password with database's hash */
	if utils.VerifyHash(admin.Password, u.Password) {

		// Create token
		token := jwt.New(jwt.SigningMethodHS256)

		// Set claims
		claims := token.Claims.(jwt.MapClaims)
		claims["mail"] = admin.Mail
		claims["admin"] = true
		claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

		// Generate encoded token and send it as response.
		t, err := token.SignedString([]byte(os.Getenv("SECRET")))
		if err != nil {
			return err
		}
		return c.JSON(http.StatusOK, map[string]string{
			"token": t,
		})
	}

	/* If bad password */
	return echo.ErrUnauthorized
}
