import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Display_Admin() {

  const {id} = useParams();
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`http://localhost:3001/admin/getAdminDetails/${id}`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    })
  }

  useEffect(() => {
    getData();
  },[])
  return (
    <>
          <div>Display_Admin</div>
          <p>
              {
                  data !== undefined && JSON.stringify(data)
              }
          </p>
    </>
  )
}

export default Display_Admin