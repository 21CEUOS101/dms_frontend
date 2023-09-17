import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Profile from '../Profile';

function Display_Student() {

  const {id} = useParams();
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`http://localhost:3001/student/getStudentByRollNumber/${id}`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    })
  }

  useEffect(() => {
    getData();
  },[])
  return (
    <>
          <div>Display_Student</div>
          <div>
              {
                  data !== undefined && <Profile data={data}/>
              }
          </div>
    </>
  )
}

export default Display_Student