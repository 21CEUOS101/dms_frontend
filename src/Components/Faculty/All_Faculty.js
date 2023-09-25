import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';
import '../all.css';

function All_Faculty() {
  const [data, setData] = useState();
  const [refresh, setRefresh] = useState(false);
  
  const getData = () => {
    axios.get(`http://localhost:3001/faculty/getAllFacultyDetails`)
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
      faculty_id: 'Faculty ID',
      faculty_name: 'Faculty Name',
      faculty_email: 'Email',
      faculty_mobile_number: 'Mobile Number',
      faculty_experience: 'Experience',
      faculty_qualification: 'Qualification',
      faculty_department: 'Department',
      faculty_designation: 'Designation',
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
      <div className='textStyle'>All_Faculty</div>
      <div className='grid place-items-center h-screen'>
        {data !== undefined && <ViewAll data={data} setRefresh={setRefresh} refresh={refresh} />}
      </div>
    </div>
  );
}

export default All_Faculty;
