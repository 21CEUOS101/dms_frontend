import axios from 'axios';
import React, { useEffect, useState } from 'react'

function All_TPO() {

  const [data, setData] = useState();

  const getData = () => {
    axios.get(`http://localhost:3001/tpo/getAllTPODetails`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    })
  }

  useEffect(() => {
    getData();
  },[])
  return (
    <>
          <div>All_TPO</div>
          <div>
              {
                  data !== undefined && JSON.stringify(data)
              }
          </div>
    </>
  )
}

export default All_TPO