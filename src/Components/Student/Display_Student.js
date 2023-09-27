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
  }, []);

  const studentDetails = data?.studentDetails[0];
  const studentGuardianInfo = data?.studentGuardianInfo[0];
  const studentOtherDetails = data?.studentOtherDetails[0];
  return (
    <div className='w-full text-center bg-gray-200 p-4'>
          <div className='text-2xl font-bold mb-4'>Display_Student</div>
          <div className='grid grid-cols-3'>
              {
                  data !== undefined && <Profile data={studentDetails !== undefined && studentDetails}/>
              }
              {
                  data !== undefined && <Profile data={studentGuardianInfo !== undefined && studentGuardianInfo}/>
              }
              {
                  data !== undefined && <Profile data={studentOtherDetails !== undefined && studentOtherDetails}/>
              }
              
          </div>
    </div>
  )
}

export default Display_Student