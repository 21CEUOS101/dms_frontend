import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../all.css';
import TimeTable from '../TimeTable';

function View_TimeTable() {

const role = localStorage.getItem("role");
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

    const print = async(id) => {
        try {
            await axios.get(`http://localhost:3001/tto/generateTimeTablePDF/${id}`).then(
                (data) => {
                    console.log("Printed");
                    console.log(data?.data);
                }
            );
        }
        catch (error)
        {
            console.log(error);
        }
    }

  return (
    <div className='divStyle'>
        {
            arr?.map((value, index) => {
                return (
                    <>
                        <div key={index}>
                            {data !== undefined && <TimeTable data={data} setRefresh={setRefresh} refresh={refresh} timetableId={value}/>}
                        </div>
                        <div>
                            <button onClick={() => print(value)}>Download</button>
                        </div>
                    </>
                );
            })
        }
    </div>
  );
}

export default View_TimeTable;
