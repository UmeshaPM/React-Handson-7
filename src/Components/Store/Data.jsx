import React, { createContext, useState } from "react";

export const dataContext = createContext();

const Data = (props) => {
  const [students, setStudents] = useState([
    {
      id: "1",
      Name: "Umesh PM",
      Age: "25",
      Course: "Full Stack Developer",
      Batch: "May",
    },

  ]);
  return (
    <div>
      <dataContext.Provider value={[students, setStudents]}>
        {props.children}
      </dataContext.Provider>
    </div>
  );
};

export default Data;
