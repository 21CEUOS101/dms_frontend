import axios from 'axios';
import React, { useEffect, useState } from 'react'

function All_Admin() {
    
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`http://localhost:3001/admin/getAllAdminDetails`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    })
  }

  useEffect(() => {
    getData();
  },[])
  return (
    <>
          <div>All_Admin</div>
          <div>
              {
                  data !== undefined && JSON.stringify(data)
              }
          </div>
    </>
  )
}

export default All_Admin