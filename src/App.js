import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import TTO from './Components/TTO/TTO';
import CourseDetails_Form from './Components/Student/CourseDetails_Form';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/create-tto" element={<TTO/>} />
          <Route path="/create-courseDetails" element={<CourseDetails_Form/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
