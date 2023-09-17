import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';
import '../all.css';

function All_HOD() {
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`http://localhost:3001/hod/getAllHOD`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='divStyle'>
      <div className='textStyle'>All_HOD</div>
      <div>
        {data !== undefined && <ViewAll data={data} />}
      </div>
    </div>
  );
}

export default All_HOD;
