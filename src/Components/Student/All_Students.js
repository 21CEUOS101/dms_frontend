import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewAll from "../ViewAll";

function AllStudents() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [sessionNumbers, setSessionNumbers] = useState([]);
  const [selectedSession, setSelectedSession] = useState(
    localStorage.getItem("selectedSession") || ""
  ); // Selected session number

  // Fetch session numbers
  const fetchSessionNumbers = () => {
    axios
      .get(`http://localhost:3001/student/getUniqueSessionNumbers`)
      .then((response) => {
        console.log(response.data);
        setSessionNumbers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching session numbers:", error);
      });
  };

  const formatStudentData = (data) => {
    return data.map((element) => ({
      _id: element._id,
      student_id: element.student_id,
      full_name: element.full_name,
      student_roll_number: element.student_roll_number,
      gender: element.gender,
    }));
  };

  useEffect(() => {
    // Fetch session numbers when the component mounts
    fetchSessionNumbers();
  }, []);

  useEffect(() => {
    // Fetch student data based on the selected session number
    if (selectedSession) {
      axios
        .get(
          `http://localhost:3001/student/getStudentsBySession/${selectedSession}`
        )
        .then((response) => {
          console.log("Fetched student data:", response.data);
          setData(formatStudentData(response.data));
        })
        .catch((error) => {
          console.error("Error fetching student data:", error);
        });
    }
  }, [selectedSession]);

  // Handle session selection change
  const handleSessionChange = (e) => {
    const selectedSessionNumber = e.target.value;
    setSelectedSession(selectedSessionNumber);
    localStorage.setItem("selectedSession", selectedSessionNumber); // Store selected session in localStorage
  };

  return (
    <div className="bg-gray-100 min-h-screen flex place-items-center w-full p-4">
      <div className="bg-white overflow-hidden shadow-sm rounded-lg max-w-screen-7xl mx-auto sm:px-6 lg:px-8">
        <h1 className="text-3xl p-4 font-semibold mb-4 text-center">
          All Students
        </h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Select Session Number:
          </label>
          <select
            id="sessionSelect"
            value={selectedSession}
            onChange={handleSessionChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">-- Select Session --</option>
            {sessionNumbers.map((sessionNumber) => (
              <option key={sessionNumber} value={sessionNumber}>
                {sessionNumber}
              </option>
            ))}
          </select>
        </div>
        {data.length > 0 && (
          <ViewAll data={data} setRefresh={setRefresh} refresh={refresh} />
        )}
      </div>
    </div>
  );
  
}

export default AllStudents;
