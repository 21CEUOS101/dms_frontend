import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../Profile';

function Display_HOD() {
  const { id } = useParams();
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`http://localhost:3001/hod/getHODDetails/${id}`).then((response) => {
      console.log(response?.data);
      setData(response?.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='w-full text-center bg-gray-200 p-4'>
      <div className='text-2xl font-bold mb-4'>Display_HOD</div>
      <div className='grid grid-row-1'>
        {data !== undefined && <Profile data={data} />}
      </div>
    </div>
  );
}

export default Display_HOD;
