package main

import (
	"bytes"
	"encoding/json"
	"io/ioutil"
	"net/http"
)

const baseURL = "https://student-record2-default-rtdb.firebaseio.com/students"

func firebaseGet() ([]byte, error) {
	resp, err := http.Get(baseURL + ".json")
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	return ioutil.ReadAll(resp.Body)
}

func firebasePost(data interface{}) error {
	jsonData, _ := json.Marshal(data)
	_, err := http.Post(baseURL+".json", "application/json", bytes.NewBuffer(jsonData))
	return err
}

func firebasePut(id string, data interface{}) error {
	jsonData, _ := json.Marshal(data)
	req, _ := http.NewRequest("PUT", baseURL+"/"+id+".json", bytes.NewBuffer(jsonData))
	req.Header.Set("Content-Type", "application/json")
	client := &http.Client{}
	_, err := client.Do(req)
	return err
}

func firebaseDelete(id string) error {
	req, _ := http.NewRequest("DELETE", baseURL+"/"+id+".json", nil)
	client := &http.Client{}
	_, err := client.Do(req)
	return err
}