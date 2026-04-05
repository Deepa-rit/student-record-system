import axios from "axios";

const API = axios.create({
  baseURL:"https://student-record-system-blek.onrender.com"
});

export default API;
