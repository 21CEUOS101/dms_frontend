import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Profile from '../Profile';

function Display_Faculty() {

  const {id} = useParams();
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`https://dms2901.onrender.com/faculty/getSpecificFacultyDetails/${id}`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    })
  }

  useEffect(() => {
    getData();
  },[])
  return (
    <div className="w-full text-center bg-gray-200 p-4">
      <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        FACULTY PROFILE
      </div>
      <div className="bg-white border p-4 shadow-md">
        {data !== undefined && (
          <Profile data={data} />
        )}
      </div>
    </div>
  )
}

export default Display_Faculty