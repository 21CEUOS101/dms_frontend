import React, { useState, useEffect } from "react";
import axios from "axios";
import "./result.css";
import { useParams, Link } from "react-router-dom";

const SemResult = () => {
  const { id } = useParams();
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [showInternal, setShowInternal] = useState(false);
  const [showExternal, setShowExternal] = useState(false);
  const [studentExamResults, setStudentExamResults] = useState([]);
  const [studentData, setStudentData] = useState(null);
  const role = localStorage.getItem("role");

  const renderValue = (value) => {
    if (Array.isArray(value)) {
      return value.join(", ");
    } else if (typeof value === "object") {
      return JSON.stringify(value); // Convert object to string
    }
    return value;
  };

  // Fetch student exam results from the server on component mount
  const preData = async () => {
    console.log("Hello" + id);
    axios
      .get(`http://localhost:3001/student/getStudentExamResult/${id}`)
      .then((response) => {
        setStudentExamResults(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student exam results: ", error);
      });
  };
  useEffect(() => {
    preData();
  }, []);

  const aliasMapping = {
    _id: "ID",
    student_id: "Stdnt ID",
    semester: "Semester",
    batch_year: "Batch Yr",
    subject_code: "Sub Code",
    subject_name: "Sub Name",
    sessional1_marks: "Sess 1 Mk",
    sessional2_marks: "Sess 2 Mk",
    sessional3_marks: "Sess 3 Mk",
    sessional1_present: "Sess 1 Pr",
    sessional2_present: "Sess 2 Pr",
    sessional3_present: "Sess 3 Pr",
    sessional1_attendance: "Sess 1 At",
    sessional2_attendance: "Sess 2 At",
    sessional3_attendance: "Sess 3 At",
    sessional1_total_attendance: "Sess 1 T At",
    sessional2_total_attendance: "Sess 2 T At",
    sessional3_total_attendance: "Sess 3 T At",
    sessional1_practical_attendance: "Sess 1 P At",
    sessional2_practical_attendance: "Sess 2 P At",
    sessional3_practical_attendance: "Sess 3 P At",
    sessional1_total_practical_attendance: "Sess 1 T P At",
    sessional2_total_practical_attendance: "Sess 2 T P At",
    sessional3_total_practical_attendance: "Sess 3 T P At",
    block_marks: "Block Mk",
    block_present: "Block Pr",
    external_marks: "Ext Mk",
    external_status: "Ext Sts",
    avg_sessional_marks: "Avg Sess Mk",
    sessional_status: "Sess Sts",
    avg_practical_marks: "Avg Prac Mk",
    practical_status: "Prac Sts",
    termwork_marks: "Term Mk",
    termwork_status: "Term Sts",
    total_marks: "Total Mk",
    max_total_marks: "Max Total",
    subject_points: "Subj Pts",
    subject_grade: "Subj Grd",
    subject_credit: "Subj Crd",
    subject_status: "Subj Sts",
    spi_credit: "SPI Crd",
    spi_points: "SPI Pts",
    spi: "SPI",
    cpi_credit: "CPI Crd",
    cpi_points: "CPI Pts",
    cpi: "CPI",
    result_status: "Rslt Sts",
    // Add mappings for other fields as needed...
  };

  const includeFieldsFirstTable = [
    "subject_code",
    "subject_name", // Add subject code and subject name here
    "sessional1_marks",
    "sessional2_marks",
    "sessional3_marks",
    "sessional1_present",
    "sessional2_present",
    "sessional3_present",
    "sessional1_attendance",
    "sessional2_attendance",
    "sessional3_attendance",
    "sessional1_total_attendance",
    "sessional2_total_attendance",
    "sessional3_total_attendance",
    "sessional1_practical_attendance",
    "sessional2_practical_attendance",
    "sessional3_practical_attendance",
    "sessional1_total_practical_attendance",
    "sessional2_total_practical_attendance",
    "sessional3_total_practical_attendance",
    "block_marks",
    "block_present",
  ];

  const tableHeaderFirstTable = (
    <thead>
      <tr>
        {includeFieldsFirstTable.map((fieldName) => (
          <th key={`header-${fieldName}`}>
            {aliasMapping[fieldName] || fieldName}
          </th>
        ))}
      </tr>
    </thead>
  );

  const tableRowsFirstTable = studentData?.subject_code.map(
    (subjectCode, index) => (
      <tr key={`data-${subjectCode}`}>
        {includeFieldsFirstTable.map((fieldName) => (
          <td key={`data-${fieldName}`}>
            {renderValue(studentData[fieldName][index])}
          </td>
        ))}
      </tr>
    )
  );

  const includeFieldsSecondTable = [
    "subject_code",
    "subject_name",
    "external_marks",
    "external_status",
    "avg_sessional_marks",
    "sessional_status",
    "avg_practical_marks",
    "practical_status",
    "termwork_marks",
    "termwork_status",
    "total_marks",
    "max_total_marks",
    "subject_points",
    "subject_grade",
    "subject_credit",
    "subject_status",
  ];

  const tableHeaderSecondTable = (
    <thead>
      <tr>
        {includeFieldsSecondTable.map((fieldName) => (
          <th key={`header-${fieldName}`}>
            {aliasMapping[fieldName] || fieldName}
          </th>
        ))}
      </tr>
    </thead>
  );

  const tableRowsSecondTable = studentData?.subject_code.map(
    (subjectCode, index) => (
      <tr key={`data-${subjectCode}`}>
        {includeFieldsSecondTable.map((fieldName) => (
          <td key={`data-${fieldName}`}>
            {renderValue(studentData[fieldName][index])}
          </td>
        ))}
      </tr>
    )
  );

  const handleSemesterChange = (event) => {
    const selectedSemesterValue = event.target.value;
    const selectedSemester =
      selectedSemesterValue !== "" ? parseInt(selectedSemesterValue) : null;
    setSelectedSemester(selectedSemester);
    setShowInternal(false);
    setShowExternal(false);

    // Filter the student data for the selected semester
    const filteredData = studentExamResults.find(
      (result) => result.semester === selectedSemester
    );

    if (filteredData) {
      setStudentData(filteredData);
    } else {
      // Handle the case when no data is found for the selected semester
      setStudentData(null); // You can set it to null or an empty object as needed
    }
  };

  const handleOptionClick = (option) => {
    if (option === "Internal") {
      setShowInternal(true);
      setShowExternal(false);
    } else if (option === "External") {
      setShowInternal(false);
      setShowExternal(true);
    }
  };

  return (
    <div>
      <h1>Student Data</h1>

      {/* Select Semester */}
      <div>
        <label htmlFor="semesterSelect">Select Semester: </label>
        <select
          id="semesterSelect"
          value={selectedSemester || ""}
          onChange={handleSemesterChange}
        >
          <option value={null}>Select Semester</option>
          <option value={1}>Semester 1</option>
          <option value={2}>Semester 2</option>
          <option value={3}>Semester 3</option>
          <option value={4}>Semester 4</option>
          <option value={5}>Semester 5</option>
          <option value={6}>Semester 6</option>
          <option value={7}>Semester 7</option>
          <option value={8}>Semester 8</option>
          {/* Add more semester options as needed */}
        </select>
      </div>

      {/* Render "Select your sem" message if selectedSemester is null */}
      {selectedSemester === null && (
        <div className="select-semester-message">
          Select your semester to view the results.
        </div>
      )}

      {studentData && (
        <div>
          {/* Buttons to toggle between internal and external */}
          <div>
            <button onClick={() => handleOptionClick("Internal")}>
              Internal
            </button>
            <button onClick={() => handleOptionClick("External")}>
              External
            </button>
          </div>
        </div>
      )}

      {/* Render the selected table if showInternal is true */}
      {showInternal && studentData && (
        <div>
          <h2>Internal Table for Semester {selectedSemester}</h2>
          <table>
            {tableHeaderFirstTable}
            <tbody>{tableRowsFirstTable}</tbody>
          </table>
        </div>
      )}

      {/* Render the selected table if showExternal is true */}
      {showExternal && studentData && (
        <div>
          <h2>External Table for Semester {selectedSemester}</h2>
          <table>
            {tableHeaderSecondTable}
            <tbody>{tableRowsSecondTable}</tbody>
          </table>
          <div>
            <h2>SPI Credit: {studentData.spi_credit}</h2>
          </div>
          <div>
            <h2>SPI Points: {studentData.spi_points}</h2>
          </div>
          <div>
            <h2>SPI: {studentData.spi}</h2>
          </div>
          <div>
            <h2>CPI Credit: {studentData.cpi_credit}</h2>
          </div>
          <div>
            <h2>CPI Points: {studentData.cpi_points}</h2>
          </div>
          <div>
            <h2>CPI: {studentData.cpi}</h2>
          </div>
          <div>
            <h2>Result Status: {studentData.result_status}</h2>
          </div>
        </div>
      )}

      {selectedSemester !== null && studentData && role === "faculty" && (
        <div>
          <Link to={`/update-result/${selectedSemester}/${id}`}>
            <button>Update Result</button>
          </Link>
        </div>
      )}

      {selectedSemester !== null && studentData === null && (
        <div className="unavailable-message">
          Selected semester data is not available.
        </div>
      )}
    </div>
  );
};

export default SemResult;
