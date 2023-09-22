import React from 'react';
import './result.css';

const SemResult = () => {
    const studentData = {
        "_id": {
          "$oid": "650699cb5630e430ab3b7a2f"
        },
        "student_id": "54321",
        "semester": 1,
        "batch_year": 2023,
        "subject_code": [
          "SUB001",
          "SUB002",
          "SUB003"
        ],
        "subject_name": [
          "Mathematics",
          "Physics",
          "Chemistry"
        ],
        "sessional1_marks": [
          85,
          80,
          90
        ],
        "sessional2_marks": [
          75,
          77,
          82
        ],
        "sessional3_marks": [
          88,
          84,
          86
        ],
        "sessional1_present": [
          "Yes",
          "Yes",
          "Yes"
        ],
        "sessional2_present": [
          "Yes",
          "Yes",
          "Yes"
        ],
        "sessional3_present": [
          "Yes",
          "Yes",
          "Yes"
        ],
        "sessional1_attendance": [
          92,
          89,
          93
        ],
        "sessional2_attendance": [
          90,
          87,
          94
        ],
        "sessional3_attendance": [
          87,
          91,
          95
        ],
        "sessional1_total_attendance": [
          300,
          300,
          300
        ],
        "sessional2_total_attendance": [
          300,
          300,
          300
        ],
        "sessional3_total_attendance": [
          300,
          300,
          300
        ],
        "sessional1_practical_attendance": [
          91,
          86,
          89
        ],
        "sessional2_practical_attendance": [
          89,
          93,
          91
        ],
        "sessional3_practical_attendance": [
          87,
          91,
          93
        ],
        "sessional1_total_practical_attendance": [
          300,
          300,
          300
        ],
        "sessional2_total_practical_attendance": [
          300,
          300,
          300
        ],
        "sessional3_total_practical_attendance": [
          300,
          300,
          300
        ],
        "block_marks": [
          72,
          76,
          81
        ],
        "block_present": [
          "Yes",
          "Yes",
          "Yes"
        ],
        "external_marks": [
          86,
          89,
          92
        ],
        "external_status": [
          "Pass",
          "Pass",
          "Pass"
        ],
        "avg_sessional_marks": [
          84.33,
          80.33,
          86
        ],
        "sessional_status": [
          "Pass",
          "Pass",
          "Pass"
        ],
        "avg_practical_marks": [
          89.67,
          90.67,
          92
        ],
        "practical_status": [
          "Pass",
          "Pass",
          "Pass"
        ],
        "termwork_marks": [
          92,
          94,
          89
        ],
        "termwork_status": [
          "Pass",
          "Pass",
          "Pass"
        ],
        "total_marks": [
          339,
          346,
          357
        ],
        "max_total_marks": [
          500,
          500,
          500
        ],
        "subject_points": [
          6.78,
          7.5,
          8.1
        ],
        "subject_grade": [
          "B+",
          "A",
          "A+"
        ],
        "subject_credit": [
          3,
          4,
          3
        ],
        "subject_status": [
          "Pass",
          "Pass",
          "Pass"
        ],
        "spi_credit": 10,
        "spi_points": 21.39,
        "spi": 7.13,
        "cpi_credit": 10,
        "cpi_points": 21.39,
        "cpi": 7.13,
        "result_status": "Pass"
      };
      
      const renderValue = (value) => {
        if (Array.isArray(value)) {
          return value.join(', ');
        } else if (typeof value === 'object') {
          return JSON.stringify(value); // Convert object to string
        }
        return value;
      };
    
      const aliasMapping = {
        "_id": "ID",
        "student_id": "Stdnt ID",
        "semester": "Semester",
        "batch_year": "Batch Yr",
        "subject_code": "Sub Code",
        "subject_name": "Sub Name",
        "sessional1_marks": "Sess 1 Mk",
        "sessional2_marks": "Sess 2 Mk",
        "sessional3_marks": "Sess 3 Mk",
        "sessional1_present": "Sess 1 Pr",
        "sessional2_present": "Sess 2 Pr",
        "sessional3_present": "Sess 3 Pr",
        "sessional1_attendance": "Sess 1 At",
        "sessional2_attendance": "Sess 2 At",
        "sessional3_attendance": "Sess 3 At",
        "sessional1_total_attendance": "Sess 1 T At",
        "sessional2_total_attendance": "Sess 2 T At",
        "sessional3_total_attendance": "Sess 3 T At",
        "sessional1_practical_attendance": "Sess 1 P At",
        "sessional2_practical_attendance": "Sess 2 P At",
        "sessional3_practical_attendance": "Sess 3 P At",
        "sessional1_total_practical_attendance": "Sess 1 T P At",
        "sessional2_total_practical_attendance": "Sess 2 T P At",
        "sessional3_total_practical_attendance": "Sess 3 T P At",
        "block_marks": "Block Mk",
        "block_present": "Block Pr",
        "external_marks": "Ext Mk",
        "external_status": "Ext Sts",
        "avg_sessional_marks": "Avg Sess Mk",
        "sessional_status": "Sess Sts",
        "avg_practical_marks": "Avg Prac Mk",
        "practical_status": "Prac Sts",
        "termwork_marks": "Term Mk",
        "termwork_status": "Term Sts",
        "total_marks": "Total Mk",
        "max_total_marks": "Max Total",
        "subject_points": "Subj Pts",
        "subject_grade": "Subj Grd",
        "subject_credit": "Subj Crd",
        "subject_status": "Subj Sts",
        "spi_credit": "SPI Crd",
        "spi_points": "SPI Pts",
        "spi": "SPI",
        "cpi_credit": "CPI Crd",
        "cpi_points": "CPI Pts",
        "cpi": "CPI",
        "result_status": "Rslt Sts",
        // Add alias for other fields here...
      };
      
      const excludeFields = ["_id", "student_id", "semester", "batch_year"];

      const tableHeader = (
        <thead>
          <tr>
            {Object.keys(studentData).map((fieldName) => (
              !excludeFields.includes(fieldName) && (
                <th key={`header-${fieldName}`}>{aliasMapping[fieldName] || fieldName}</th>
              )
            ))}
          </tr>
        </thead>
      );
    
      const tableRows = studentData.subject_code.map((subjectCode, index) => (
        <tr key={`data-${subjectCode}`}>
          {Object.keys(studentData).map((fieldName) => (
            !excludeFields.includes(fieldName) && (
              <td key={`data-${fieldName}`}>{renderValue(studentData[fieldName][index])}</td>
            )
          ))}
        </tr>
      ));
    
      return (
        <div>
          <h1>Student Data</h1>
          <div>
            <h2>Student ID: {studentData.student_id}</h2>
          </div>
          <div>
            <h2>Semester: {studentData.semester}</h2>
          </div>
          <div>
            <h2>Batch Year: {studentData.batch_year}</h2>
          </div>
          <table>
            {tableHeader}
            <tbody>{tableRows}</tbody>
          </table>
        </div>
      );
    };
    
    export default SemResult;
    