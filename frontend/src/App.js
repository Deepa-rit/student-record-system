/*import React, { useEffect, useState } from "react";
import API from "./api";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {

  const [students, setStudents] = useState({});

  const fetchStudents = async () => {

    const res = await API.get("/students");

    setStudents(res.data || {});
  };

  useEffect(() => {

    fetchStudents();

  }, []);

  return (
    <div style={{padding:"20px"}}>

      <h1>Student Record System</h1>

      <AddStudent refresh={fetchStudents}/>

      <StudentList students={students} refresh={fetchStudents}/>

    </div>
  );
}

export default App;*/
import React, { useEffect, useState } from "react";
import "./App.css";
import API from "./api";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {

  const [students,setStudents]=useState({})

  const fetchStudents=async()=>{
    const res=await API.get("/students")
    setStudents(res.data || {})
  }

  useEffect(()=>{
    fetchStudents()
  },[])

  return(
    <div className="container">

      <h1>Student Record System</h1>

      <AddStudent refresh={fetchStudents}/>

      <StudentList students={students} refresh={fetchStudents}/>

    </div>
  )
}

export default App