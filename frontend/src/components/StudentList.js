/*import React, { useEffect, useState } from "react";
import API from "../api";
import EditStudent from "./EditStudent";

function StudentList({ students, refresh }) {

  const deleteStudent = async (id) => {

    await API.delete(`/students/${id}`);

    refresh();
  };

  return (
    <div>

      <h3>Student List</h3>

      {Object.keys(students).map((id) => (

        <div key={id} style={{border:"1px solid gray",margin:"10px",padding:"10px"}}>

          <p>Name: {students[id].name}</p>
          <p>Age: {students[id].age}</p>
          <p>Dept: {students[id].dept}</p>
          <p>Email: {students[id].email}</p>

          <EditStudent
  id={id}
  student={students[id]}
  refresh={refresh}
/>

<button onClick={()=>deleteStudent(id)}>Delete</button>
        </div>

      ))}

    </div>
  );
}

export default StudentList;*/
import React from "react";
import API from "../api";
import EditStudent from "./EditStudent";

function StudentList({students,refresh}){

  const deleteStudent=async(id)=>{
    await API.delete(`/students/${id}`)
    refresh()
  }

  return(

    <table>

      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Department</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {Object.keys(students).map(id=>(
          <tr key={id}>

            <td>{students[id].name}</td>
            <td>{students[id].age}</td>
            <td>{students[id].dept}</td>
            <td>{students[id].email}</td>

            <td>

              <EditStudent
                id={id}
                student={students[id]}
                refresh={refresh}
              />

              <button
                className="delete-btn"
                onClick={()=>deleteStudent(id)}
              >
                Delete
              </button>

            </td>

          </tr>
        ))}

      </tbody>

    </table>

  )
}

export default StudentList