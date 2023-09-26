import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';

function All_Faculty() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const fetchData = () => {
    axios.get(`http://localhost:3001/faculty/getAllFacultyDetails`)
      .then((response) => {
        console.log(response?.data);
        setData(response?.data);
      })
      .catch((error) => {
        console.error('Error fetching faculty data:', error);
      });
  }

  useEffect(() => {
    fetchData();
  }, [refresh]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-screen-8xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <h1 className="text-3xl font-semibold mb-4">All Faculty</h1>

            <div className="grid place-items-center">
              {data.length > 0 && <ViewAll data={data} setRefresh={setRefresh} refresh={refresh} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default All_Faculty;
