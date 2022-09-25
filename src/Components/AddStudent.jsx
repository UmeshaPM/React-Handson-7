import React, { useContext } from "react";
import { dataContext } from "./Store/Data";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Compo.css";

const AddStudent = () => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Course, setCourse] = useState("");
  const [Batch, setBatch] = useState("");
  const [students, setStudents] = useContext(dataContext);

  const addNewData = () => {
    if(((Name && setName) && (Age && setAge)  && (Course && setCourse) && (Batch && setBatch)) === null){
      alert('enter')
    }
    else(
      setStudents([
        ...students,
        {
          Name: Name,
          Age: Age,
          Course: Course,
          Batch: Batch,
          id: new Date().getTime().toString(),
        },
      ])
    )
  };
  return (
    <div>
      <div className="edit-div">
        <input
          name="Name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={Name}
          placeholder="Name"
          type="text"
        />

        <input
          name="Age"
          required
          onChange={(e) => {
            setAge(e.target.value);
          }}
          value={Age}
          placeholder="Age"
          type="text"
        />

        <input
          name="Course"
          required
          onChange={(e) => {
            setCourse(e.target.value);
          }}
          value={Course}
          placeholder="Course"
          type="text"
        />

        <input
          name="Batch"
          required
          onChange={(e) => {
            setBatch(e.target.value);
          }}
          value={Batch}
          placeholder="Batch"
          type="text"
        />
      </div>

      <Link to="/student">
        <div className="button" onClick={addNewData}>
          Submit
          <div></div>
        </div>
      </Link>
      <Link to="/student">
        <button className="btn-cancel">Cancel</button>
      </Link>
    </div>
  );
};

export default AddStudent;
