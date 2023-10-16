import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../Profile';

function Display_Student() {
  const { id } = useParams();
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`http://localhost:3001/student/getStudentByRollNumber/${id}`).then((response) => {
      console.log(response?.data);
      setData(response?.data);
    });
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
      <div className='grid grid-row-3'>
        {data !== undefined && (
          <>
            <h1>Student Details</h1>
            <Profile data={studentDetails !== undefined && studentDetails} />
          </>
        )}
        {data !== undefined && (
          <>
            <h1>Guardian Information</h1>
            <Profile data={studentGuardianInfo !== undefined && studentGuardianInfo} />
          </>
        )}
        {data !== undefined && (
          <>
            <h1>Other Details</h1>
            <Profile data={studentOtherDetails !== undefined && studentOtherDetails} />
          </>
        )}
      </div>
    </div>
  );
}

export default Display_Student;
