import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Profile from '../Profile';

function Display_Tto() {

  const {id} = useParams();
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`http://localhost:3001/tto/getSpecificTTODetails/${id}`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    })
  }

  useEffect(() => {
    getData();
  },[])
  return (
    <div className="bg-gray-200 p-4 grid place-item-center w-full">
      <div className="text-2xl font-bold mb-4">
        Display TTO
      </div>
      <div className="bg-white border p-4 shadow-md">
        {data !== undefined && (
          <Profile data={data} />
        )}
      </div>
    </div>
  )
}

export default Display_Tto