import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';

function All_Placement_Company() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getData = () => {
    axios.get('http://localhost:3001/tpo/getAllPlacementCompanyDetails')
      .then((response) => {
        const simplifiedData = response.data.map(({ _id, placement_company_id, placement_company_name, placement_company_country, placement_company_job_role }) => ({
          _id,
          placement_company_id,
          placement_company_name,
          placement_company_country,
          placement_company_job_role: placement_company_job_role.join(', '),
        }));
        setData(simplifiedData);
      })
      .catch((error) => {
        console.error('Error fetching placement company data:', error);
      });
  };

  useEffect(() => {
    getData();
  }, [refresh]);

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4 sm:px-6 lg:px-8 flex place-items-center w-full">
      <div className="max-w-screen-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <h1 className="text-3xl font-semibold mb-4">All Placement Companies</h1>
            {data !== undefined && (
              <ViewAll data={data} setRefresh={setRefresh} refresh={refresh} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default All_Placement_Company;
