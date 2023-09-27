import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../Profile';

function Display_Current_Course() {
  const role = localStorage.getItem("role");
  const id = localStorage.getItem("id");
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`http://localhost:3001/${role}/getCourseForCurrentSemester/${id}`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="bg-gray-100 p-4">
      <div className="text-2xl font-bold mb-4">Display Courses</div>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.courseDetails.map((item, index) => (
          <div key={index} className="w-full">
            <Profile data={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Display_Current_Course;
