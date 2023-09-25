import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';
import '../all.css';

function All_TTO() {
  const [data, setData] = useState();
  const [refresh, setRefresh] = useState(false);

  const getData = () => {
    axios.get(`http://localhost:3001/tto/getAllTTODetails`)
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
      tto_id: 'TTO ID',
      tto_name: 'TTO Name',
      tto_email: 'Email',
      tto_mobile_number: 'Mobile Number',
      tto_experience: 'Experience',
      tto_qualification: 'Qualification',
      tto_designation: 'Designation',
      tto_department: 'Department',
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
      <div className='textStyle'>All_TTO</div>
      <div>
        {data !== undefined && <ViewAll data={data} setRefresh={setRefresh} refresh={refresh} />}
      </div>
    </div>
  );
}

export default All_TTO;
