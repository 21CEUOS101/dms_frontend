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
    
      const tableRows = [];
  
        for (const field in studentData) {
            if (studentData.hasOwnProperty(field)) {
            const values = Array.isArray(studentData[field]) ? studentData[field] : [studentData[field]];
            for (const value of values) {
                tableRows.push(
                <tr key={`${field}-${value}`}>
                    <th>{field}</th>
                    <td>{renderValue(value)}</td>
                </tr>
                );
            }
            }
        }
    
    

  return (
    <div>
    <h1>Student Data</h1>
    <table>
      <tbody>{tableRows}</tbody>
    </table>
  </div>
  );
};

export default SemResult;
