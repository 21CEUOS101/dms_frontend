import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';
import '../all.css';

function All_Students() {
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`http://localhost:3001/student/getAllStudents`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='divStyle'>
      <div className='textStyle'>All_Students</div>
      <div>
        {data !== undefined && <ViewAll data={data?.studentDetails} />}
      </div>
    </div>
  );
}

export default All_Students;
