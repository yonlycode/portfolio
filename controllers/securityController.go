package controllers

import (
	"le-refuge/utils"
	"os"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

/*AuthClaims JWT expended with user ID struct declaration */
type AuthClaims struct {
	UserID bson.ObjectId `json:"userId"`
	jwt.StandardClaims
}

//AdminLoginActionEndPoint return JW token for the authentification
func AdminLoginActionEndPoint(c echo.Context) error {
	/*
		Get mail from query then check database for existing admin logged with that mail

	*/
	mail := c.QueryParams().Get("mail")
	user, err := Dba.FindAdminByMail(mail)

	/* If mail not found in db */
	if err != nil {
		return c.String(301, "Mail not found")
	}

	/* Test Password with database's hash */
	if utils.VerifyHash(user.Password, c.QueryParams().Get("password")) {

		/* Genereta hashing key */
		key := []byte(os.Getenv("SECRET"))
		/* init JWT Claims */
		claims := AuthClaims{
			user.ID,
			jwt.StandardClaims{
				ExpiresAt: time.Now().Add(time.Minute * 9999).Unix(),
				Issuer:    "test",
			},
		}
		/* create token */
		token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
		/* Sign token */
		signedToken, err := token.SignedString(key)
		if err != nil {
			panic("internal error")
		}

		/* send token  */
		return c.JSON(200, bson.M{"token": signedToken})
	}

	/* If bad password */
	return c.String(301, "Bad Password")
}
