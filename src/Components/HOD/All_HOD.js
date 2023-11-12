import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';

function All_HOD() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getData = () => {
    axios.get('https://dms2901.onrender.com/hod/getAllHOD')
      .then((response) => {
        const simplifiedData = response.data.map(({ _id, hod_id, hod_name, hod_department, hod_designation }) => ({
          _id,
          hod_id,
          hod_name,
          hod_department,
          hod_designation,
        }));
        setData(simplifiedData);
      })
      .catch((error) => {
        console.error('Error fetching HOD data:', error);
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
            <h1 className="text-3xl font-semibold mb-4">All HODs</h1>
            {data !== undefined && (
              <ViewAll data={data} setRefresh={setRefresh} refresh={refresh} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default All_HOD;
