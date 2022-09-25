import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Data from './Components/Store/Data';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Student from './Components/Student';
import Edit from './Components/Edit';
import AddStudent from './Components/AddStudent';



function App() {
  return (
  <div>
    <Data>
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/contact" element={<Contact />} />
          <Route path = "/edit/:id" element={<Edit/>}/>
          <Route path = "/addStudent" element={<AddStudent/>}/>
        </Routes>
      </BrowserRouter>
    </Data>
  </div>
  );
}

export default App;
