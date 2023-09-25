import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';
import '../all.css';

function All_TPO() {
  const [data, setData] = useState();
  const [refresh, setRefresh] = useState(false);

  const getData = () => {
    axios.get(`http://localhost:3001/tpo/getAllTPODetails`)
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
      tpo_id: 'TPO ID',
      tpo_name: 'TPO Name',
      tpo_email: 'Email',
      tpo_mobile_number: 'Mobile Number',
      tpo_experience: 'Experience',
      tpo_qualification: 'Qualification',
      tpo_designation: 'Designation',
      tpo_department: 'Department',
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
      <div className='textStyle'>All_TPO</div>
      <div className='grid place-items-center h-screen'>
        {data !== undefined && <ViewAll data={data} setRefresh={setRefresh} refresh={refresh} />}
      </div>
    </div>
  );
}

export default All_TPO;
