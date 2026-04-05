import React, { useState } from "react";
import API from "../api";

function EditStudent({ id, student, refresh }) {

  const [data, setData] = useState(student);
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const updateStudent = async () => {

    await API.put(`/students/${id}`, data);

    setEditing(false);

    refresh();
  };

  if (!editing) {
    return <button onClick={() => setEditing(true)}>Edit</button>;
  }

  return (
    <div>

      <input name="name" value={data.name} onChange={handleChange}/>
      <input name="age" value={data.age} onChange={handleChange}/>
      <input name="dept" value={data.dept} onChange={handleChange}/>
      <input name="email" value={data.email} onChange={handleChange}/>

      <button onClick={updateStudent}>Save</button>

    </div>
  );
}

export default EditStudent;