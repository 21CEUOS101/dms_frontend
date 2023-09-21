import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';
import '../all.css';

function View_TimeTable() {
  const [data, setData] = useState();
  const [refresh, setRefresh] = useState(false);
  const getData = () => {
    axios.get(`http://localhost:3001/tto/getAllTimeTableBlockDetails`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    });
  }

  useEffect(() => {
    getData();
  }, [refresh]);

  return (
    <div className='divStyle'>
      <div className='textStyle'>View_TimeTable</div>
      <div>
        {data !== undefined && <ViewAll data={data} setRefresh={setRefresh} refresh={refresh}/>}
      </div>
    </div>
  );
}

export default View_TimeTable;
