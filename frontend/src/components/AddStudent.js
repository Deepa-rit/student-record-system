import React, { useState } from "react";
import API from "../api";

function AddStudent({ refresh }) {

  const [student, setStudent] = useState({
    name: "",
    age: "",
    dept: "",
    email: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {

    await API.post("/students", student);

    alert("Student Added");

    setStudent({
      name: "",
      age: "",
      dept: "",
      email: ""
    });

    refresh();
  };

  return (
    <div>

      <h3>Add Student</h3>

      <input name="name" placeholder="Name" value={student.name} onChange={handleChange}/>
      <input name="age" placeholder="Age" value={student.age} onChange={handleChange}/>
      <input name="dept" placeholder="Department" value={student.dept} onChange={handleChange}/>
      <input name="email" placeholder="Email" value={student.email} onChange={handleChange}/>

      <button onClick={handleSubmit}>Add</button>

    </div>
  );
}

export default AddStudent;