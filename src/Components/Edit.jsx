import React, { useContext, useState, useEffect } from "react";
import { dataContext } from "./Store/Data";
import { Link, useParams } from "react-router-dom";
import "./Compo.css";

const Edit = () => {
  const [Name, setName] = useState(" ");
  const [Age, setAge] = useState(" ");
  const [Course, setCourse] = useState(" ");
  const [Batch, setBatch] = useState(" ");
  const { id } = useParams();

  const [students, setStudents] = useContext(dataContext);

  useEffect(() => {
    students.forEach((item) => {
      if (item.id === id) {
        setName(item.Name);
        setAge(item.Age);
        setCourse(item.Course);
        setBatch(item.Batch);
      }
    });
  }, [id, students]);

  const addUpdatedData = () => {
    setStudents((items) =>
      items.map((dataContext) =>
        dataContext.id === id
          ? {
              id: id,
              Name: Name,
              Age: Age,
              Batch: Batch,
              Course: Course,
            }
          : dataContext
      )
    );
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
        <div className="button" onClick={addUpdatedData}>
          Update
          <div></div>
        </div>
      </Link>
      <Link to="/student">
        <button className="btn-cancel">Cancel</button>
      </Link>
    </div>
  );
};

export default Edit;
