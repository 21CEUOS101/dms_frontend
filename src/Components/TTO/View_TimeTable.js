import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../all.css';
import TimeTable from '../TimeTable';

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
    
    let set = new Set();

    data?.map((value, index) => {
        set.add(value.time_table_id);
    });

    console.log(set);

    let arr = Array.from(set);

  return (
    <div className='divStyle'>
        {
            arr?.map((value, index) => {
                return (
                    <div key={index}>
                        {data !== undefined && <TimeTable data={data} setRefresh={setRefresh} refresh={refresh} timetableId={value}/>}
                    </div>  
                );
            })
        }
    </div>
  );
}

export default View_TimeTable;
