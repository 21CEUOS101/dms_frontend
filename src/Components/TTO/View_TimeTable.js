import React, { useEffect, useState } from "react";
import axios from "axios";
import TimeTable from "../TimeTable";

function View_TimeTable() {
  const role = localStorage.getItem("role");
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(null); // Initially, no semester selected

  // Function to fetch timetable data
  const getData = () => {
    axios
      .get(`http://localhost:3001/tto/getAllTimeTableBlockDetails`)
      .then((response) => {
        const fetchedData = response?.data || [];
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getData();
  }, [refresh]);

  // Extract unique semesters from data
  const uniqueSemesters = [
    ...new Set(data.map((value) => value.time_table_block_semester)),
  ];

  // Handle semester selection from dropdown
  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  // Filter data based on the selected semester
  const filteredData = selectedSemester
    ? data.filter(
        (value) => value.time_table_block_semester === selectedSemester
      )
    : [];

  return (
    <div className="bg-gray-100 min-h-screen p-4  grid place-items-center w-full">
      <div className="bg-white overflow-hidden shadow-sm rounded-lg max-w-screen-7xl mx-auto sm:px-6 lg:px-8 place-items-center">
        <h1 className="text-3xl p-4 font-semibold mb-4 text-center">
          View Timetable
        </h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Select Session Number:
          </label>
          <select
            value={selectedSemester || ""}
            onChange={handleSemesterChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">-- Select Session --</option>
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
          <p className="p-4">
            No timetable data available for the selected semester.
          </p>
        )}
      </div>
    </div>
  );
}

export default View_TimeTable;
