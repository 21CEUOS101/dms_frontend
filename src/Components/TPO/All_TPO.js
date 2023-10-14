import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';

function AllTPO() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const fetchData = () => {
    axios.get('http://localhost:3001/tpo/getAllTPODetails')
      .then((response) => {
        const simplifiedData = response.data.map(({ _id, tpo_id, tpo_name, tpo_department, tpo_designation }) => ({
          _id,
          tpo_id,
          tpo_name,
          tpo_department,
          tpo_designation,
        }));
        setData(simplifiedData);
      })
      .catch((error) => {
        console.error('Error fetching TPO data:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4 sm:px-6 lg:px-8 flex place-items-center w-full">
      <div className="max-w-screen-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <h1 className="text-3xl font-semibold mb-4">All TPO</h1>

            {data.length > 0 ? (
              <ViewAll data={data} setRefresh={setRefresh} refresh={refresh} />
            ) : (
              <div className="text-gray-600 text-lg">Loading...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTPO;
