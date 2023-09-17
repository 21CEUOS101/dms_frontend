import axios from 'axios';
import React, { useEffect, useState } from 'react'

function All_TTO() {

  const [data, setData] = useState();

  const getData = () => {
    axios.get(`http://localhost:3001/tto/getAllTTODetails`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    })
  }

  useEffect(() => {
    getData();
  },[])
  return (
    <>
          <div>All_TTO</div>
          <div>
              {
                  data !== undefined && JSON.stringify(data)
              }
          </div>
    </>
  )
}

export default All_TTO