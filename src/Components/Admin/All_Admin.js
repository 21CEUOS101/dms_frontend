import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';

function AllAdmin() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admin/getAllAdminDetails');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchData();
  }, [refresh]);

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-8xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <h1 className="text-3xl font-semibold mb-4">All Admin</h1>

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

export default AllAdmin;
