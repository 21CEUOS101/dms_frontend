import React, { useState, useEffect } from "react";
import axios from "axios";
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
    axios
      .get(`http://localhost:3001/student/getStudentExamResult/${id}`)
      .then((response) => {
        console.log(response.data);
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
    student_id: "Stu ID",
    semester: "Sem",
    batch_year: "Batch Yr",
    subject_code: "Sub Code",
    subject_name: "Sub Name",
    sessional1_marks: "S 1 M",
    sessional2_marks: "S 2 M",
    sessional3_marks: "S 3 M",
    sessional1_present: "S 1 Pre",
    sessional2_present: "S 2 Pre",
    sessional3_present: "S 3 Pre",
    sessional1_attendance: "S 1 At",
    sessional2_attendance: "S 2 At",
    sessional3_attendance: "S 3 At",
    sessional1_total_attendance: "S 1 T At",
    sessional2_total_attendance: "S 2 T At",
    sessional3_total_attendance: "S 3 T At",
    sessional1_practical_attendance: "S 1 P At",
    sessional2_practical_attendance: "S 2 P At",
    sessional3_practical_attendance: "S 3 P At",
    sessional1_total_practical_attendance: "S 1 T P At",
    sessional2_total_practical_attendance: "S 2 T P At",
    sessional3_total_practical_attendance: "S 3 T P At",
    block_marks: "Block Mk",
    block_present: "Block Pre",
    external_marks: "Ext Mk",
    external_status: "Ext St",
    avg_sessional_marks: "Avg S Mk",
    sessional_status: "S Sts",
    avg_practical_marks: "Avg P Mk",
    practical_status: "P Sts",
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
      (result) => parseInt(result.semester) === selectedSemester
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
    <div className="container mx-auto max-w-screen-lg" style={{ maxWidth: '1400px' }}>
      <h1 className="text-2xl font-bold mb-4">Student Data</h1>

      <div className="mb-4">
        <label htmlFor="semesterSelect" className="mr-2">
          Select Semester:
        </label>
        <select
          id="semesterSelect"
          value={selectedSemester || ""}
          onChange={handleSemesterChange}
          className="border rounded p-2"
        >
          <option value={null}>Select Semester</option>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
            <option key={semester} value={semester}>
              Semester {semester}
            </option>
          ))}
        </select>
      </div>

      {/* Render "Select your sem" message if selectedSemester is null */}
      {selectedSemester === null && (
        <div className="bg-yellow-100 text-yellow-800 p-2 rounded mb-4">
          Select your semester to view the results.
        </div>
      )}

      {studentData && (
        <div>
          {/* Buttons to toggle between internal and external */}
          <div className="mb-4">
            <button
              onClick={() => handleOptionClick("Internal")}
              className={`mr-2 p-2 ${
                showInternal ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              Internal
            </button>
            <button
              onClick={() => handleOptionClick("External")}
              className={`p-2 ${
                showExternal ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              External
            </button>
          </div>
        </div>
      )}

{showInternal && studentData && (
  <div>
    <h2 className="text-xl font-bold">
      Internal Table for Semester {selectedSemester}
    </h2>
    <div className="overflow-x-auto"> {/* Add this container for horizontal scrolling */}
      <table className="w-full table-auto border-collapse border mt-2">
        {tableHeaderFirstTable}
        <tbody>
          {tableRowsFirstTable.map((row, rowIndex) => (
            <tr key={`data-${rowIndex}`}>
              {React.Children.map(row.props.children, (cell, cellIndex) => (
                <td
                  key={`data-${rowIndex}-${cellIndex}`}
                  className={`border p-2 ${
                    includeFieldsFirstTable[cellIndex] === "sessional1_marks" ||
                    includeFieldsFirstTable[cellIndex] === "sessional2_marks" ||
                    includeFieldsFirstTable[cellIndex] === "sessional3_marks"
                      ? "w-16" // Adjust the width for marks cells
                      : ""
                  }`}
                >
                  {cell.props.children}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}

{showExternal && studentData && (
  <div>
    <h2 className="text-xl font-bold">
      External Table for Semester {selectedSemester}
    </h2>
    <div className="overflow-x-auto"> {/* Add this container for horizontal scrolling */}
      <table className="w-full table-auto border-collapse border mt-2">
        {tableHeaderSecondTable}
        <tbody>
          {tableRowsSecondTable.map((row, rowIndex) => (
            <tr key={`data-${rowIndex}`}>
              {React.Children.map(row.props.children, (cell, cellIndex) => (
                <td
                  key={`data-${rowIndex}-${cellIndex}`}
                  className={`border p-2 ${
                    includeFieldsSecondTable[cellIndex] === "external_marks"
                      ? "w-16" // Adjust the width for marks cells
                      : ""
                  }`}
                >
                  {cell.props.children}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="flex justify-center text-left p-4 ">
      <table className="border border-collapse max-w-xs">
        
        <tbody>
          <tr>
            <td className="border p-2">SPI Credit</td>
            <td className="p-2">{studentData.spi_credit}</td>
          </tr>
          <tr>
            <td className="border p-2">SPI Points</td>
            <td className="border p-2">{studentData.spi_points}</td>
          </tr>
          <tr>
            <td className="border p-2">SPI</td>
            <td className="border p-2">{studentData.spi}</td>
          </tr>
          <tr>
            <td className="border p-2">CPI Credit</td>
            <td className="border p-2">{studentData.cpi_credit}</td>
          </tr>
          <tr>
            <td className="border p-2">CPI Points</td>
            <td className="border p-2">{studentData.cpi_points}</td>
          </tr>
          <tr>
            <td className="border p-2">CPI</td>
            <td className="border p-2">{studentData.cpi}</td>
          </tr>
          <tr>
            <td className="border p-2">Result Status</td>
            <td className="border p-2">{studentData.result_status}</td>
          </tr>
        </tbody>
      </table>
    </div>


  </div>
)}

      {selectedSemester !== null && studentData && role === "faculty" && (
        <div className="mt-4">
          <Link to={`/update-result/${selectedSemester}/${id}`}>
            <button className="bg-green-500 text-white p-2 rounded">
              Update Result
            </button>
          </Link>
        </div>
      )}

      {selectedSemester !== null && studentData === null && (
        <div className="bg-red-100 text-red-800 p-2 rounded mt-4">
          Selected semester data is not available.
        </div>
      )}
    </div>
  );
};

export default SemResult;
