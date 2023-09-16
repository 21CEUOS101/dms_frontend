import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Profile from '../Profile';

function Display_Tto() {

  const {id} = useParams();
  const [data, setData] = useState([]);

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
    <>
      <div>Display_Tto</div>
      <p>
              {
          data !== undefined && <Profile data={data}/>
              }
      </p>
    </>
  )
}

export default Display_Tto