import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "./Store/Data";
import "./Compo.css";

const Student = () => {
  const [student] = useContext(dataContext);

  return (
    <div>
      <Link to="/addStudent">
        <button className="button" id="btn-add">
          Add New Details
        </button>
      </Link>

      <center>
        <table className="GeneratedTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {student.map((item) => (
              <tr key={item.id}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td className="edit">
                  <Link to={`/edit/${item.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};
export default Student;
