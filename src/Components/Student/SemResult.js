import React, { useState } from "react";
import "./result.css";

const SemResult = () => {
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [showInternal, setShowInternal] = useState(false);
  const [showExternal, setShowExternal] = useState(false);

  const studentData = {
    _id: {
      $oid: "650699cb5630e430ab3b7a2f",
    },
    student_id: "54321",
    semester: 1,
    batch_year: 2023,
    subject_code: ["SUB001", "SUB002", "SUB003"],
    subject_name: ["Mathematics", "Physics", "Chemistry"],
    sessional1_marks: [85, 80, 90],
    sessional2_marks: [75, 77, 82],
    sessional3_marks: [88, 84, 86],
    sessional1_present: ["Yes", "Yes", "Yes"],
    sessional2_present: ["Yes", "Yes", "Yes"],
    sessional3_present: ["Yes", "Yes", "Yes"],
    sessional1_attendance: [92, 89, 93],
    sessional2_attendance: [90, 87, 94],
    sessional3_attendance: [87, 91, 95],
    sessional1_total_attendance: [300, 300, 300],
    sessional2_total_attendance: [300, 300, 300],
    sessional3_total_attendance: [300, 300, 300],
    sessional1_practical_attendance: [91, 86, 89],
    sessional2_practical_attendance: [89, 93, 91],
    sessional3_practical_attendance: [87, 91, 93],
    sessional1_total_practical_attendance: [300, 300, 300],
    sessional2_total_practical_attendance: [300, 300, 300],
    sessional3_total_practical_attendance: [300, 300, 300],
    block_marks: [72, 76, 81],
    block_present: ["Yes", "Yes", "Yes"],
    external_marks: [86, 89, 92],
    external_status: ["Pass", "Pass", "Pass"],
    avg_sessional_marks: [84.33, 80.33, 86],
    sessional_status: ["Pass", "Pass", "Pass"],
    avg_practical_marks: [89.67, 90.67, 92],
    practical_status: ["Pass", "Pass", "Pass"],
    termwork_marks: [92, 94, 89],
    termwork_status: ["Pass", "Pass", "Pass"],
    total_marks: [339, 346, 357],
    max_total_marks: [500, 500, 500],
    subject_points: [6.78, 7.5, 8.1],
    subject_grade: ["B+", "A", "A+"],
    subject_credit: [3, 4, 3],
    subject_status: ["Pass", "Pass", "Pass"],
    spi_credit: 10,
    spi_points: 21.39,
    spi: 7.13,
    cpi_credit: 10,
    cpi_points: 21.39,
    cpi: 7.13,
    result_status: "Pass",
  };


  const semesterDataAvailable = studentData.semester === selectedSemester;

  const handleSemesterChange = (event) => {
    const selectedSemester = parseInt(event.target.value);
    setSelectedSemester(selectedSemester);
    setShowInternal(false);
    setShowExternal(false);
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

  const renderValue = (value) => {
    if (Array.isArray(value)) {
      return value.join(", ");
    } else if (typeof value === "object") {
      return JSON.stringify(value); // Convert object to string
    }
    return value;
  };

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
    // Add alias for other fields here...
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

  const tableRowsFirstTable = studentData.subject_code.map(
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

  const tableRowsSecondTable = studentData.subject_code.map(
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
  return (
    <div>
      <h1>Student Data</h1>

      {/* Select Semester */}
      <div>
        <label htmlFor="semesterSelect">Select Semester: </label>
        <select
          id="semesterSelect"
          value={selectedSemester  || ""}
          onChange={handleSemesterChange}
        >
          <option value={1}>Semester 1</option>
          <option value={2}>Semester 2</option>
          {/* Add more semester options as needed */}
        </select>
      </div>

      {semesterDataAvailable ? (
        <div>
          {/* Buttons to toggle between internal and external */}
          <div>
            <button onClick={() => handleOptionClick("Internal")}>Internal</button>
            <button onClick={() => handleOptionClick("External")}>External</button>
          </div>
        </div>
      ) : (
        <div>
          <p>Selected semester data is not available.</p>
        </div>
      )}

      {/* Display the selected table if showInternal is true */}
      {showInternal && semesterDataAvailable && (
        <div>
          <h2>Internal Table for Semester {selectedSemester}</h2>
          <table>
            {tableHeaderFirstTable}
            <tbody>{tableRowsFirstTable}</tbody>
          </table>
        </div>
      )}

      {/* Display the selected table if showExternal is true */}
      {showExternal && semesterDataAvailable && (
        <div>
          <h2>External Table for Semester {selectedSemester}</h2>
          <table>
            {tableHeaderSecondTable}
            <tbody>{tableRowsSecondTable}</tbody>
          </table>
          <div>
            <h2>SPI Credit : {studentData.spi_credit}</h2>
          </div>
          <div>
            <h2>SPI Points : {studentData.spi_points}</h2>
          </div>
          <div>
            <h2>SPI : {studentData.spi}</h2>
          </div>
          <div>
            <h2>CPI Credit : {studentData.cpi_credit}</h2>
          </div>
          <div>
            <h2>CPI Points : {studentData.cpi_points}</h2>
          </div>
          <div>
            <h2>CPI : {studentData.cpi}</h2>
          </div>
          <div>
            <h2>Result Status : {studentData.result_status}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default SemResult;