import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../Profile';

function Display_HOD() {
  const { id } = useParams();
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`https://dms2901.onrender.com/hod/getHODDetails/${id}`).then((response) => {
      console.log(response?.data);
      setData(response?.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full text-center bg-gray-200 p-4">
      <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>HOD PROFILE</div>
      <div className="bg-white border p-4 shadow-md">
        {data !== undefined && <Profile data={data} />}
      </div>
    </div>
  );
}

export default Display_HOD;
