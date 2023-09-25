import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';
import '../all.css';

function All_Placement_Company() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getData = () => {
    axios.get(`http://localhost:3001/tpo/getAllPlacementCompanyDetails`)
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
      placement_company_id: 'Company ID',
      placement_company_name: 'Company Name',
      placement_company_email: 'Email',
      placement_company_mobile_number: 'Mobile Number',
      placement_company_address: 'Address',
      placement_company_city: 'City',
      placement_company_state: 'State',
      placement_company_pincode: 'Pincode',
      placement_company_country: 'Country',
      placement_company_website: 'Website',
      placement_company_type: 'Company Type',
      placement_company_description: 'Description',
      placement_company_job_role: 'Job Role',
      placement_company_job_description: 'Job Description',
      no_of_student_placed: 'Number of Students Placed',
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
      <div className='textStyle'>All_Placement_Company</div>
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

export default All_Placement_Company;
