import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';
import '../all.css';

function All_Students() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [sessionNumbers, setSessionNumbers] = useState([]);
  const [selectedSession, setSelectedSession] = useState(localStorage.getItem('selectedSession') || ''); // Selected session number

  // Fetch session numbers
  const fetchSessionNumbers = () => {
    axios.get(`http://localhost:3001/student/getUniqueSessionNumbers`)
      .then((response) => {
        console.log(response.data);
        setSessionNumbers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching session numbers:', error);
      });
  };

  const aliasStudentDataFields = (originalData) => {
    if (!originalData) {
      return [];
    }

    const aliasMap = {
      _id: 'Student ID',
      student_id: 'ID',
      full_name: 'Full Name',
      student_roll_number: 'Roll Number',
      date_of_birth: 'Date of Birth',
      gender: 'Gender',
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
  };

  useEffect(() => {
    // Fetch session numbers when the component mounts
    fetchSessionNumbers();
  }, []);

  useEffect(() => {
    // Fetch student data based on the selected session number
    if (selectedSession) {
      axios.get(`http://localhost:3001/student/getStudentsBySession/${selectedSession}`)
        .then((response) => {
          console.log('Fetched student data:', response.data);
          setData(aliasStudentDataFields(response.data));
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
        });
    }
  }, [selectedSession]);

  // Handle session selection change
  const handleSessionChange = (e) => {
    const selectedSessionNumber = e.target.value;
    setSelectedSession(selectedSessionNumber);
    localStorage.setItem('selectedSession', selectedSessionNumber); // Store selected session in localStorage
  };

  return (
    <div className='divStyle'>
      <div className='textStyle'>All_Students</div>
      <div className='grid place-items-center h-screen'>
        <div>
          {/* Dropdown menu for selecting session number */}
          <label>Select Session Number:</label>
          <select
            value={selectedSession}
            onChange={handleSessionChange}
          >
            <option value="">-- Select Session --</option>
            {sessionNumbers.map((sessionNumber) => (
              <option key={sessionNumber} value={sessionNumber}>
                {sessionNumber}
              </option>
            ))}
          </select>
        </div>
        {data !== undefined && <ViewAll data={data} setRefresh={setRefresh} refresh={refresh} />}
      </div>
    </div>
  );
}

export default All_Students;
