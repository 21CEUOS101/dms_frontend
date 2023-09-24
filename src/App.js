import React, { createContext, useContext, useEffect, useState } from 'react';
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
import ViewResult from './Components/Student/ViewResult';
import All_Courses from './Components/Student/All_Courses';
import Admin_Form from './Components/Admin/Admin_Form';
import Marks_Entry_Form from './Components/Student/Marks_Entry_Form';
import Placement_Company_Form from './Components/TPO/Placement_Company_Form';
import Time_Table_Form from './Components/TTO/Time_Table_Form';
import All_Placement_Company from './Components/TPO/All_Placement_Company';
import Course_Form from './Components/Student/CourseDetails_Form';
import All_Students from './Components/Student/All_Students';
import Update_TPO from './Components/TPO/Update_TPO';
import Update_Tto from './Components/TTO/Update_Tto';
import Update_Faculty from './Components/Faculty/Update_Faculty';
import Update_HOD from './Components/HOD/Update_HOD';
import Update_Admin from './Components/Admin/Update_Admin';
import Update_Course from './Components/Student/Update_Course';
import Update_Placement_Company from './Components/TPO/Update_Placement_Company';
import Update_Student from './Components/Student/Update_Student';
import Dashboard_HOD from './Components/HOD/Dashboard_HOD';
import Dashboard_Admin from './Components/Admin/Dashboard_Admin';
import Dashboard_Faculty from './Components/Faculty/Dashboard_Faculty';
import Dashboard_Student from './Components/Student/Dashboard_Student';
import Dashboard_Tpo from './Components/TPO/Dashboard_Tpo';
import Dashboard_Tto from './Components/TTO/Dashboard_Tto';
import axios from 'axios';
import View_TimeTable from './Components/TTO/View_TimeTable';
import Display_Course from './Components/Student/Display_Course';
import SemResult from './Components/Student/SemResult';
import ErrorPage from './Components/ErrorPage';
import NA from './Components/NA';
import Display_Current_Course from './Components/Student/Display_Current_Course';
import Update_Time_Table from './Components/TTO/Update_Time_Table';
import Update_Exam_Result from './Components/Student/Update_Exam_Result';
import MakeAnnouncement from './Components/MakeAnnouncement'
import LogOut from './Components/LogOut';
import HomePage from './Components/HomePage';
import Display_Placement_Company from './Components/TPO/Display_Placement_Company';
export const AppContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(localStorage.getItem("id"));

  const [role , setRole] = useState(localStorage.getItem("role"));

  const checkLogin = async () => {

    await axios.post('http://localhost:3001/login', {
      user_id: localStorage.getItem("id"),
      role: localStorage.getItem("role"),
      password: localStorage.getItem("password")
    }).then((data) => {
      console.log(data?.data);
      if (data.data.status === "success") {
        setIsLoggedIn(true);
      }
      else {
        console.log("Login Failed");
        setIsLoggedIn(false);
      }
    })
  }

  useEffect(() => checkLogin(), []);
  console.log(isLoggedIn);

  return (
    <AppContext.Provider value={{isLoggedIn , setIsLoggedIn , role , setRole}}>
    <div className="App justify-start flex">
      <Router>
        <div className='inline h-full sticky'>
          {isLoggedIn && <NavbarNested/>}
        </div>
        <Routes>
          <Route path="/" element={isLoggedIn ? <HomePage/> : <Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/create-tto" element={(isLoggedIn) ? ((["admin"].includes(localStorage.getItem("role"))) ? <TTO_Form/> : <NA/>) : <Login/>} />
          <Route path="/create-courseDetails" element={(isLoggedIn) ? ((["admin"].includes(localStorage.getItem("role"))) ? <CourseDetails_Form/> : <NA/>) : <Login/>} />
          <Route path="/create-hod" element={(isLoggedIn) ? ((["hod"].includes(localStorage.getItem("role"))) ? <HOD_Form/> : <NA/>) : <Login/>} />
          <Route path="/create-faculty" element={(isLoggedIn) ? ((["admin"].includes(localStorage.getItem("role"))) ? <Faculty_Form/> : <NA/>) : <Login/>} />
          <Route path="/create-tpo" element={(isLoggedIn) ? ((["admin"].includes(localStorage.getItem("role"))) ? <TPO_Form/> : <NA/>) : <Login/>} />
          <Route path="/create-student" element={(isLoggedIn) ? ((["admin"].includes(localStorage.getItem("role"))) ? <Student_Form/> : <NA/>) : <Login/>} />
          <Route path="/create-admin" element={(isLoggedIn) ? ((["hod"].includes(localStorage.getItem("role"))) ? <Admin_Form/> : <NA/>) : <Login/>} />
          <Route path="/display-student/:id" element={(isLoggedIn) ? ((["admin","hod","tpo","tto","student","faculty"].includes(localStorage.getItem("role"))) ? <Display_Student/> : <NA/>) : <Login/>} />
          <Route path="/display-result/:id" element={(isLoggedIn) ? ((["admin","hod","tpo","tto","student","faculty"].includes(localStorage.getItem("role"))) ? <ViewResult/> : <NA/>) : <Login/>} />
          <Route path="/display-tto/:id" element={(isLoggedIn) ? ((["admin","hod","tto"].includes(localStorage.getItem("role"))) ? <Display_Tto/> : <NA/>) : <Login/>} />
          <Route path="/display-tpo/:id" element={(isLoggedIn) ? ((["admin","hod","tpo"].includes(localStorage.getItem("role"))) ? <Display_Tpo/> : <NA/>) : <Login/>} />
          <Route path="/display-hod/:id" element={(isLoggedIn) ? ((["hod"].includes(localStorage.getItem("role"))) ? <Display_HOD/> : <NA/>) : <Login/>} />
          <Route path="/display-admin/:id" element={(isLoggedIn) ? ((["admin","hod"].includes(localStorage.getItem("role"))) ? <Display_Admin/> : <NA/>) : <Login/>} />
          <Route path="/display-faculty/:id" element={(isLoggedIn) ? ((["admin","hod","faculty"].includes(localStorage.getItem("role"))) ? <Display_Faculty/> : <NA/>) : <Login/>} />
          <Route path="/all-faculty" element= {(isLoggedIn) ? ((["admin","hod","faculty"].includes(localStorage.getItem("role"))) ? <All_Faculty/> : <NA/>) : <Login/>}/>
          <Route path="/all-admin" element={(isLoggedIn) ? ((["admin","hod"].includes(localStorage.getItem("role"))) ? <All_Admin/> : <NA/>) : <Login/>} />
          <Route path="/all-tto" element={(isLoggedIn) ? ((["admin","hod","tto"].includes(localStorage.getItem("role"))) ? <All_TTO/> : <NA/>) : <Login/>} />
          <Route path="/update-tto/:id" element={(isLoggedIn) ? ((["admin"].includes(localStorage.getItem("role"))) ? <Update_Tto/> : <NA/>) : <Login/>}/>
          <Route path="/update-tpo/:id" element={(isLoggedIn) ? ((["admin"].includes(localStorage.getItem("role"))) ? <Update_TPO/> : <NA/>) : <Login/>} />
          <Route path="/update-faculty/:id" element={(isLoggedIn) ? ((["admin"].includes(localStorage.getItem("role"))) ? <Update_Faculty/> : <NA/>) : <Login/>} />
          <Route path="/update-hod/:id" element={(isLoggedIn) ? ((["hod"].includes(localStorage.getItem("role"))) ? <Update_HOD/> : <NA/>) : <Login/>} />
          <Route path="/update-admin/:id" element={(isLoggedIn) ? ((["hod"].includes(localStorage.getItem("role"))) ? <Update_Admin/> : <NA/>) : <Login/>} />
          <Route path="/update-course/:id" element={(isLoggedIn) ? ((["admin"].includes(localStorage.getItem("role"))) ? <Update_Course/> : <NA/>) : <Login/>} />
          <Route path="/update-placement-company/:id" element={(isLoggedIn) ? ((["admin","tpo"].includes(localStorage.getItem("role"))) ? <Update_Placement_Company/> : <NA/>) : <Login/>}/>
          <Route path="/update-student/:id" element={(isLoggedIn) ? ((["admin"].includes(localStorage.getItem("role"))) ? <Update_Student/> : <NA/>) : <Login/>} />
          <Route path="/all-hod" element={(isLoggedIn) ? ((["hod"].includes(localStorage.getItem("role"))) ? <All_HOD/> : <NA/>) : <Login/>} />
          <Route path="/all-tpo" element={(isLoggedIn) ? ((["admin","hod","tpo"].includes(localStorage.getItem("role"))) ? <All_TPO/> : <NA/>) : <Login/>} />
          <Route path="/all-course" element={(isLoggedIn) ? ((["admin","hod","student","faculty"].includes(localStorage.getItem("role"))) ? <All_Courses/> : <NA/>) : <Login/>} />
          <Route path="/all-placement-company" element={(isLoggedIn) ? ((["admin","hod","tpo","student","faculty"].includes(localStorage.getItem("role"))) ? <All_Placement_Company/> : <NA/>) : <Login/>} />
          <Route path="/all-student" element={(isLoggedIn) ? ((["admin","hod","tpo","tto","student","faculty"].includes(localStorage.getItem("role"))) ? <All_Students/> : <NA/>) : <Login/>} />
          <Route path='/marks-entry' element={(isLoggedIn) ? ((["faculty"].includes(localStorage.getItem("role"))) ? <Marks_Entry_Form/> : <NA/>) : <Login/>}/>
          <Route path='/add-placement-company' element={(isLoggedIn) ? ((["tpo"].includes(localStorage.getItem("role"))) ? <Placement_Company_Form/> : <NA/>) : <Login/>} />
          <Route path='/add-timetable' element={(isLoggedIn) ? ((["tto"].includes(localStorage.getItem("role"))) ? <Time_Table_Form/> : <NA/>) : <Login/>} />
          <Route path='/create-course' element={(isLoggedIn) ? ((["admin"].includes(localStorage.getItem("role"))) ? <CourseDetails_Form/> : <NA/>) : <Login/>}/>
          <Route path='/dashboard-hod' element={(isLoggedIn) ? ((["hod"].includes(localStorage.getItem("role"))) ? <Dashboard_HOD/> : <NA/>) : <Login/>} />
          <Route path='/dashboard-admin' element={(isLoggedIn) ? ((["admin"].includes(localStorage.getItem("role"))) ? <Dashboard_Admin/> : <NA/>) : <Login/>} />
          <Route path='/dashboard-faculty' element={(isLoggedIn) ? ((["faculty"].includes(localStorage.getItem("role"))) ? <Dashboard_Faculty/> : <NA/>) : <Login/>} />
          <Route path='/dashboard-student' element={(isLoggedIn) ? ((["student"].includes(localStorage.getItem("role"))) ? <Dashboard_Student/> : <NA/>) : <Login/>} />
          <Route path='/dashboard-tpo' element={(isLoggedIn) ? ((["tpo"].includes(localStorage.getItem("role"))) ? <Dashboard_Tpo/> : <NA/>) : <Login/>} />
          <Route path='/dashboard-tto' element={(isLoggedIn) ? ((["tto"].includes(localStorage.getItem("role"))) ? <Dashboard_Tto/> : <NA/>) : <Login/>}/>
          <Route path='/display-timetable' element={(isLoggedIn) ? ((["tto","student","hod"].includes(localStorage.getItem("role"))) ? <View_TimeTable/> : <NA/>) : <Login/>} />
          <Route path='/display-course/:id' element={(isLoggedIn) ? ((["tto","student","hod"].includes(localStorage.getItem("role"))) ? <Display_Course/> : <NA/>) : <Login/>} />
          <Route path='/current-course' element={(isLoggedIn) ? ((["student","admin","hod","faculty","tto"].includes(localStorage.getItem("role"))) ? <Display_Current_Course/> : <NA/>) : <Login/>} />
          <Route path='/sem-result/:id' element = {(isLoggedIn) ? ((["student", "hod", "admin", "faculty"].includes(localStorage.getItem("role"))) ? <SemResult/> : <NA/ >) : <Login/>} / >
          <Route path='/update-timetable/:bid/:ttid' element={(isLoggedIn) ? ((["tto"].includes(localStorage.getItem("role"))) ? <Update_Time_Table /> : <NA />) : <Login />} />
          <Route path='/display-placement-company/:id' element={(isLoggedIn) ? ((["tpo","hod","student"].includes(localStorage.getItem("role"))) ? <Display_Placement_Company /> : <NA />) : <Login />} />
          <Route path='/make-announcement' element={(isLoggedIn) ? ((["tto","tpo","hod","faculty"].includes(localStorage.getItem("role"))) ? <MakeAnnouncement /> : <NA />) : <Login />} />
          <Route path='/update-result/:sem/:sid' element={(isLoggedIn) ? ((["hod"].includes(localStorage.getItem("role"))) ? <Update_Exam_Result/> : <NA/ >) : <Login/>}  />
          <Route path='/logout' element={isLoggedIn ? <LogOut/> : <Login/>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
