import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';
import './all.css';

function All_Courses() {
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`http://localhost:3001/student/getAllCourseDetails`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='divStyle'>
      <div className='textStyle'>All_Courses</div>
      <div>
        {data !== undefined && <ViewAll data={data} />}
      </div>
    </div>
  );
}

export default All_Courses;
