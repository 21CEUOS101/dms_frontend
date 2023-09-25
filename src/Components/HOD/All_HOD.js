import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';
import '../all.css';

function All_HOD() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getData = () => {
    axios.get(`http://localhost:3001/hod/getAllHOD`)
      .then((response) => {
        console.log(response?.data);
        const aliasedData = aliasDataFields(response?.data);
        setData(aliasedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  const aliasDataFields = (originalData) => {
    if (!originalData) {
      return [];
    }

    const aliasMap = {
      hod_id: 'HOD ID',
      hod_name: 'HOD Name',
      hod_email: 'Email',
      hod_mobile_number: 'Mobile Number',
      hod_experience: 'Experience',
      hod_qualification: 'Qualification',
      hod_designation: 'Designation',
      hod_department: 'Department',
    };

    return originalData.map((item) => {
      const aliasedItem = {};
      for (const key in item) {
        if (aliasMap[key]) {
          aliasedItem[aliasMap[key]] = item[key];
        }
      }
      return aliasedItem;
    });
  }

  useEffect(() => {
    getData();
  }, [refresh]);

  return (
    <div className='divStyle'>
      <div className='textStyle'>All_HOD</div>
      <div className='grid place-items-center h-screen'>
        {data.length > 0 ? (
          <ViewAll data={data} setRefresh={setRefresh} refresh={refresh} />
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
}

export default All_HOD;
