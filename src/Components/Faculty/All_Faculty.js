import axios from 'axios';
import React, { useEffect, useState } from 'react'

function All_Faculty() {

  const [data, setData] = useState();

  const getData = () => {
    axios.get(`http://localhost:3001/faculty/getAllFacultyDetails`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    })
  }

  useEffect(() => {
    getData();
  },[])
  return (
    <>
          <div>All_Faculty</div>
          <p>
              {
                  data !== undefined && JSON.stringify(data)
              }
          </p>
    </>
  )
}

export default All_Faculty