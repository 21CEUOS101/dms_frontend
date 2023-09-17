// ViewResult.js
import React, { useState } from 'react';
import './ViewResult.css'; // Import the CSS file

function ViewResult(props) {
  const [semester, setSemester] = useState('');
  const [examType, setExamType] = useState('');
  const data = props.data;

  // Check if data is not undefined and is an array with at least one element
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available.</div>;
  }

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
    setExamType(''); // Reset exam type when semester changes
  };

  const handleExamTypeChange = (e) => {
    setExamType(e.target.value);
  };

  const renderSubjectTable = () => {
    return (
      <table className="subject-table">
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Subject Marks</th>
            <th>Practical Marks</th>
            <th>Subject Status</th>
            <th>Subject Credit</th>
            <th>Total Credit Per Subject</th>
            <th>Pass or Fail Per Subject</th>
            <th>Subject Grade</th>
            <th>Termwork Marks Per Subject</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <React.Fragment key={index}>
              {entry.subject_code &&
                entry.subject_code.map((code, subjectIndex) => (
                  <tr key={code}>
                    <td>{code}</td>
                    <td>{entry.subject_name ? entry.subject_name[subjectIndex] : ''}</td>
                    <td>{entry.subject_marks ? entry.subject_marks[subjectIndex] : ''}</td>
                    <td>{entry.practical_marks ? entry.practical_marks[subjectIndex] : ''}</td>
                    <td>{entry.subject_status ? entry.subject_status[subjectIndex] : ''}</td>
                    <td>{entry.subject_credit ? entry.subject_credit[subjectIndex] : ''}</td>
                    <td>{entry.total_credit_per_subject ? entry.total_credit_per_subject[subjectIndex] : ''}</td>
                    <td>{entry.pass_or_fail_per_subject ? entry.pass_or_fail_per_subject[subjectIndex] : ''}</td>
                    <td>{entry.subject_grade ? entry.subject_grade[subjectIndex] : ''}</td>
                    <td>{entry.termwork_marks_per_subject ? entry.termwork_marks_per_subject[subjectIndex] : ''}</td>
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  };
  

  return (
    <div className="container">
      <h2 className="heading">Student Academic History</h2>
      <div className="info">
        <label className="label">Batch Year:</label>
        <span className="value">{data.batch_year}</span>
      </div>
      <div className="info">
        <label className="label">Select Semester:</label>
        <select
          className="select"
          value={semester}
          onChange={handleSemesterChange}
        >
          <option value="">Select Semester</option>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
            <option key={s} value={s}>
              Semester {s}
            </option>
          ))}
        </select>
      </div>
      {semester && (
        <div className="info">
          <label className="label">Select Exam Type:</label>
          <select
            className="select"
            value={examType}
            onChange={handleExamTypeChange}
          >
            <option value="">Select Exam Type</option>
            <option value="internal">Internal</option>
            <option value="external">External</option>
          </select>
        </div>
      )}
      {semester && examType === 'external' && (
        <div>
          <h3>External Exam Data</h3>
          {renderSubjectTable()}
          <div>
            <label>CPI:</label> {data.cpi}
          </div>
          <div>
            <label>SPI:</label> {data.spi}
          </div>
          <div>
            <label>Total Marks:</label> {data.total_marks}
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewResult;
