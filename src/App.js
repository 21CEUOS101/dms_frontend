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
import Make_Announcement from './Components/MakeAnnouncement';
import Update_Time_Table from './Components/TTO/Update_Time_Table';
export const AppContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(localStorage.getItem("id"));

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
    <AppContext.Provider value={{isLoggedIn , setIsLoggedIn}}>
    <div className="App justify-start flex">
      <Router>
        <div className='inline h-full sticky'>
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
          <Route path="/create-admin" element={<Admin_Form />} />
          <Route path="/display-student/:id" element={<Display_Student/>} />
          <Route path="/display-result/:id" element={<ViewResult/>} />
          <Route path="/display-tto/:id" element={<Display_Tto/>} />
          <Route path="/display-tpo/:id" element={<Display_Tpo/>} />
          <Route path="/display-hod/:id" element={<Display_HOD/>} />
          <Route path="/display-admin/:id" element={<Display_Admin/>} />
          <Route path="/display-faculty/:id" element={<Display_Faculty/>} />
          <Route path="/all-faculty" element={<All_Faculty/>} />
          <Route path="/all-admin" element={<All_Admin/>} />
          <Route path="/all-tto" element={<All_TTO/>} />
          <Route path="/update-tto/:id" element={<Update_Tto/>} />
          <Route path="/update-tpo/:id" element={<Update_TPO/>} />
          <Route path="/update-faculty/:id" element={<Update_Faculty/>} />
          <Route path="/update-hod/:id" element={<Update_HOD/>} />
          <Route path="/update-admin/:id" element={<Update_Admin/>} />
          <Route path="/update-course/:id" element={<Update_Course/>} />
          <Route path="/update-placement-company/:id" element={<Update_Placement_Company/>} />
          <Route path="/update-student/:id" element={<Update_Student/>} />
          <Route path="/all-hod" element={<All_HOD/>} />
          <Route path="/all-tpo" element={<All_TPO/>} />
          <Route path="/all-course" element={<All_Courses />} />
          <Route path="/all-placement-company" element={<All_Placement_Company/>} />
          <Route path="/all-student" element={<All_Students/>} />
          <Route path='/marks-entry' element={<Marks_Entry_Form/>}/>
          <Route path='/add-placement-company' element={<Placement_Company_Form/>} />
          <Route path='/add-timetable' element={<Time_Table_Form/>} />
          <Route path='/create-course' element={<Course_Form />} />
          <Route path='/dashboard-hod' element={<Dashboard_HOD />} />
          <Route path='/dashboard-admin' element={<Dashboard_Admin />} />
          <Route path='/dashboard-faculty' element={<Dashboard_Faculty />} />
          <Route path='/dashboard-student' element={<Dashboard_Student />} />
          <Route path='/dashboard-tpo' element={<Dashboard_Tpo />} />
          <Route path='/dashboard-tto' element={<Dashboard_Tto />} />
          <Route path='/display-timetable' element={<View_TimeTable />} />
          <Route path='/current-course' element={<Display_Course />} />
          <Route path='/sem-result' element={<SemResult />} />
          <Route path='/make-announcement' element={<Make_Announcement />} />
          <Route path='/update-timetable/:bid/:ttid' element={<Update_Time_Table />} />
        </Routes>
      </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
