import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Profile from '../Profile';

function Display_Placement_Company() {
  const { id } = useParams();
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`https://dms2901.onrender.com/tpo/getSpecificPlacementCompanyDetails/${id}`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full text-center bg-gray-200 p-4">
      <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        Display Placement Company
      </div>
      <hr style={{ border: "1px solid #333", margin: "10px 0" }} />
      <div className="grid grid-row-3">
        {data !== undefined && (
          <Profile data={data} />
        )}
      </div>
    </div>
  )
}

export default Display_Placement_Company
