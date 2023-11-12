import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../Profile';

function Display_Current_Course() {
  const role = localStorage.getItem("role");
  const id = localStorage.getItem("id");
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`https://dms2901.onrender.com/${role}/getCourseForCurrentSemester/${id}`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="w-full text-center bg-gray-200 p-4">
      <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>Display Courses</div>
       <hr style={{ border: "1px solid #333", margin: "10px 0" }} />
      <div className="grid grid-row-3">
        {data?.courseDetails.map((item, index) => (
          <div key={index} className="w-full">
            <Profile data={item} />
            <hr style={{ border: "1px solid #333", margin: "10px 0" }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Display_Current_Course;
