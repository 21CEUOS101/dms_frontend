import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TimeTable from '../TimeTable';

function View_TimeTable() {
  const role = localStorage.getItem("role");
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(null); // Initially, no semester selected

  // Function to fetch timetable data
  const getData = () => {
    axios.get(`http://localhost:3001/tto/getAllTimeTableBlockDetails`)
      .then((response) => {
        const fetchedData = response?.data || [];
        setData(fetchedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    getData();
  }, [refresh]);

  // Extract unique semesters from data
  const uniqueSemesters = [...new Set(data.map((value) => value.time_table_block_semester))];

  // Handle semester selection from dropdown
  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  }

  // Filter data based on the selected semester
  const filteredData = selectedSemester ? data.filter((value) => value.time_table_block_semester === selectedSemester) : [];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">View Timetable</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select Semester:</label>
          <select
            value={selectedSemester || ""}
            onChange={handleSemesterChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Semester</option>
            {uniqueSemesters.map((semester) => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </div>
        {filteredData.length > 0 ? (
          <TimeTable data={filteredData} timetableId={selectedSemester} />
        ) : (
          <p>No timetable data available for the selected semester.</p>
        )}
      </div>
    </div>
  );
}

export default View_TimeTable;
