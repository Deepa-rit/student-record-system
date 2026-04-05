package main

import (
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Student struct {
	Name  string `json:"name"`
	Age   string `json:"age"`
	Dept  string `json:"dept"`
	Email string `json:"email"`
}

func GetStudents(c *gin.Context) {
	data, err := firebaseGet()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	var result map[string]Student
	json.Unmarshal(data, &result)
	c.JSON(http.StatusOK, result)
}

func AddStudent(c *gin.Context) {
	var student Student
	if err := c.BindJSON(&student); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	err := firebasePost(student)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Student added"})
}

func UpdateStudent(c *gin.Context) {
	id := c.Param("id")
	var student Student
	if err := c.BindJSON(&student); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	err := firebasePut(id, student)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Student updated"})
}

func DeleteStudent(c *gin.Context) {
	id := c.Param("id")
	err := firebaseDelete(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Student deleted"})
}