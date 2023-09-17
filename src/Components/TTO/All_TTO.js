import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';
import './all.css';

function All_TTO() {
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`http://localhost:3001/tto/getAllTTODetails`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={divStyle}>
      <div style={titleStyle}>All_TTO</div>
      <div>
        {data !== undefined && <ViewAll data={data} />}
      </div>
    </div>
  );
}

export default All_TTO;
