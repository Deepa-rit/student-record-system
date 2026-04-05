package main

import (
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()

	// Enable CORS
	r.Use(cors.Default())

	r.GET("/students", GetStudents)
	r.POST("/students", AddStudent)
	r.PUT("/students/:id", UpdateStudent)
	r.DELETE("/students/:id", DeleteStudent)

	port := os.Getenv("PORT")

	if port == "" {
		port = "8081" // local fallback
	}

	r.Run(":" + port)
}
