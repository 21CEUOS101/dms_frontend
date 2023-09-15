import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Display_Tto() {

  const {id} = useParams();
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get('').then((data) => {
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
    </>
  )
}

export default Display_Tto