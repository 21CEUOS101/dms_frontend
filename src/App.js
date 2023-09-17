import React, { createContext, useContext, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TTO_Form from './Components/TTO/TTO_Form';
import CourseDetails_Form from './Components/Student/CourseDetails_Form';
import HOD_Form from './Components/HOD/HOD_Form';
import Faculty_Form from './Components/Faculty/Faculty_Form';
import TPO_Form from './Components/TPO/TPO_Form';
import Student_Form from './Components/Student/Student_Form';
import Login from './Components/Login/Login';
import { NavbarNested } from './Components/NavbarNested';
import Display_Student from './Components/Student/Display_Student';
import Display_Tto from './Components/TTO/Display_Tto';
import Display_Admin from './Components/Admin/Display_Admin';
import Display_Faculty from './Components/Faculty/Display_Faculty';
import All_Faculty from './Components/Faculty/All_Faculty';
import All_Admin from './Components/Admin/All_Admin';
import All_TTO from './Components/TTO/All_TTO';
import All_HOD from './Components/HOD/All_HOD';
import Display_Tpo from './Components/TPO/Display_Tpo';
import Display_HOD from './Components/HOD/Display_HOD';
import All_TPO from './Components/TPO/All_TPO';

export const AppContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState();
  
  return (
    <AppContext.Provider value={{isLoggedIn , setIsLoggedIn}}>
    <div className="App justify-start flex">
      <Router>
        <div className='inline h-screen'>
          <NavbarNested/>
        </div>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/create-tto" element={<TTO_Form/>} />
          <Route path="/create-courseDetails" element={<CourseDetails_Form/>} />
          <Route path="/create-hod" element={<HOD_Form/>} />
          <Route path="/create-faculty" element={<Faculty_Form/>} />
          <Route path="/create-tpo" element={<TPO_Form/>} />
          <Route path="/create-student" element={<Student_Form />} />
          <Route path="/display-student" element={<Display_Student/>} />
          <Route path="/display-tto/:id" element={<Display_Tto/>} />
          <Route path="/display-tpo/:id" element={<Display_Tpo/>} />
          <Route path="/display-hod/:id" element={<Display_HOD/>} />
          <Route path="/display-admin/:id" element={<Display_Admin/>} />
          <Route path="/display-faculty/:id" element={<Display_Faculty/>} />
          <Route path="/all-faculty" element={<All_Faculty/>} />
          <Route path="/all-admin" element={<All_Admin/>} />
          <Route path="/all-tto" element={<All_TTO/>} />
          <Route path="/all-hod" element={<All_HOD/>} />
          <Route path="/all-tpo" element={<All_TPO/>} />
        </Routes>
      </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
