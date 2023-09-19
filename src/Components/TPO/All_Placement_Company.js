import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';
import '../all.css';

function All_Placement_Company() {
  const [data, setData] = useState();
  const [refresh, setRefresh] = useState(false);

  const getData = () => {
    axios.get(`http://localhost:3001/tpo/getAllPlacementCompanyDetails`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    });
  }

  useEffect(() => {
    getData();
  }, [refresh]);

  return (
    <div className='divStyle'>
      <div className='textStyle'>All_Placement_Company</div>
      <div className=' grid place-items-center h-screen'>
        {data !== undefined && <ViewAll data={data} setRefresh={setRefresh} refresh={refresh}/>}
      </div>
    </div>
  );
}

export default All_Placement_Company