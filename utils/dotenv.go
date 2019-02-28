package utils

import (
	"log"

	"github.com/alexsasharegan/dotenv"
)

//DotEnv load .env file at root of the file.
func DotEnv() {
	err := dotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}
}
