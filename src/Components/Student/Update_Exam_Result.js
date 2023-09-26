import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Update_Exam_Result = () => {
  const { sem, sid } = useParams();
  const [formData, setFormData] = useState({
    student_id: '',
    semester: '',
    batch_year: '',
    subject_code: [],
    subject_name: [],
    sessional1_marks: [],
    sessional2_marks: [],
    sessional3_marks: [],
    // Add other fields here based on your schema
  });

  const [status, setStatus] = useState('');

  const preData = async () => {
    axios
      .get(`http://localhost:3001/student/getStudentExamResultSem/${sem}/${sid}`)
      .then((data) => {
        console.log("Pre Data");
        console.log(data?.data);
        setFormData(data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateData = async () => {
    await axios
      .patch(`http://localhost:3001/faculty/updateStudentExamResultSem/${sem}/${sid}`, formData)
      .then((data) => {
        setStatus(
          data?.data?.acknowledged
            ? 'Data Updated Successfully!'
            : 'Data Updation Failed!'
        );
        setTimeout(() => {
          setStatus('');
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setStatus(JSON.stringify(error));
      });
  };

  const handleChange = (e, subject, field, index) => {
    e.preventDefault();
    if (subject === 'common') {
      setFormData({
        ...formData,
        [field]: e.target.value.trim(),
      });
    } else {
      const updatedFormData = { ...formData };
      updatedFormData[field][index] = e.target.value.trim();
      setFormData(updatedFormData);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation and submission logic here
    await updateData();
  };

  useEffect(() => {
    preData();
  }, []);

  return (
    <div className="container">
      <h1 className="mb-3">Update Exam Results</h1>
      <form onSubmit={handleSubmit}>
        {/* Fields for student_id, semester, batch_year */}
        <div className="mb-3">
          <label htmlFor="student_id" className="form-label">
            Student ID:
          </label>
          <input
            type="text"
            id="student_id"
            name="student_id"
            value={formData?.student_id}
            disabled
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="semester" className="form-label">
            Semester:
          </label>
          <input
            type="number"
            id="semester"
            name="semester"
            value={formData?.semester}
            onChange={(e) => handleChange(e, 'common', 'semester')}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="batch_year" className="form-label">
            Batch Year:
          </label>
          <input
            type="number"
            id="batch_year"
            name="batch_year"
            value={formData?.batch_year}
            onChange={(e) => handleChange(e, 'common', 'batch_year')}
            className="form-control"
            required
          />
        </div>

        {/* Fields for each subject */}
{formData?.subject_name &&
  formData?.subject_name.map((subject, index) => (
    <div key={subject}>
      <h3>{subject}</h3>
      {/* Sessional Marks */}
      <div className="mb-3">
        <label htmlFor={`sessional1_marks_${index}`} className="form-label">Sessional 1 Marks:</label>
        <input
          type="number"
          id={`sessional1_marks_${index}`}
          name={`sessional1_marks_${index}`}
          value={formData?.sessional1_marks[index]}
          onChange={(e) => handleChange(e, subject, 'sessional1_marks', index)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor={`sessional2_marks_${index}`} className="form-label">Sessional 2 Marks:</label>
        <input
          type="number"
          id={`sessional2_marks_${index}`}
          name={`sessional2_marks_${index}`}
          value={formData?.sessional2_marks[index]}
          onChange={(e) => handleChange(e, subject, 'sessional2_marks', index)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor={`sessional3_marks_${index}`} className="form-label">Sessional 3 Marks:</label>
        <input
          type="number"
          id={`sessional3_marks_${index}`}
          name={`sessional3_marks_${index}`}
          value={formData?.sessional3_marks[index]}
          onChange={(e) => handleChange(e, subject, 'sessional3_marks', index)}
          className="form-control"
          required
        />
      </div>

      {/* Sessional Present */}
      <div className="mb-3">
        <label htmlFor={`sessional1_present_${index}`} className="form-label">Sessional 1 Present:</label>
        <input
          type="text"
          id={`sessional1_present_${index}`}
          name={`sessional1_present_${index}`}
          value={formData?.sessional1_present[index]}
          onChange={(e) => handleChange(e, subject, 'sessional1_present', index)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor={`sessional2_present_${index}`} className="form-label">Sessional 2 Present:</label>
        <input
          type="text"
          id={`sessional2_present_${index}`}
          name={`sessional2_present_${index}`}
          value={formData.sessional2_present[index]}
          onChange={(e) => handleChange(e, subject, 'sessional2_present', index)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor={`sessional3_present_${index}`} className="form-label">Sessional 3 Present:</label>
        <input
          type="text"
          id={`sessional3_present_${index}`}
          name={`sessional3_present_${index}`}
          value={formData?.sessional3_present[index]}
          onChange={(e) => handleChange(e, subject, 'sessional3_present', index)}
          className="form-control"
          required
        />
      </div>

      {/* Sessional Attendance */}
      <div className="mb-3">
        <label htmlFor={`sessional1_attendance_${index}`} className="form-label">Sessional 1 Attendance:</label>
        <input
          type="number"
          id={`sessional1_attendance_${index}`}
          name={`sessional1_attendance_${index}`}
          value={formData?.sessional1_attendance[index]}
          onChange={(e) => handleChange(e, subject, 'sessional1_attendance', index)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor={`sessional2_attendance_${index}`} className="form-label">Sessional 2 Attendance:</label>
        <input
          type="number"
          id={`sessional2_attendance_${index}`}
          name={`sessional2_attendance_${index}`}
          value={formData?.sessional2_attendance[index]}
          onChange={(e) => handleChange(e, subject, 'sessional2_attendance', index)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor={`sessional3_attendance_${index}`} className="form-label">Sessional 3 Attendance:</label>
        <input
          type="number"
          id={`sessional3_attendance_${index}`}
          name={`sessional3_attendance_${index}`}
          value={formData?.sessional3_attendance[index]}
          onChange={(e) => handleChange(e, subject, 'sessional3_attendance', index)}
          className="form-control"
          required
        />
      </div>

      {/* Sessional Total Attendance */}
      <div className="mb-3">
        <label htmlFor={`sessional1_total_attendance_${index}`} className="form-label">Sessional 1 Total Attendance:</label>
        <input
          type="number"
          id={`sessional1_total_attendance_${index}`}
          name={`sessional1_total_attendance_${index}`}
          value={formData?.sessional1_total_attendance[index]}
          onChange={(e) => handleChange(e, subject, 'sessional1_total_attendance', index)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor={`sessional2_total_attendance_${index}`} className="form-label">Sessional 2 Total Attendance:</label>
        <input
                    type="number"
                    id={`sessional2_total_attendance_${index}`}
                    name={`sessional2_total_attendance_${index}`}
                    value={formData?.sessional2_total_attendance[index]}
                    onChange={(e) => handleChange(e, subject, 'sessional2_total_attendance', index)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`sessional3_total_attendance_${index}`} className="form-label">Sessional 3 Total Attendance:</label>
                  <input
                    type="number"
                    id={`sessional3_total_attendance_${index}`}
                    name={`sessional3_total_attendance_${index}`}
                    value={formData?.sessional3_total_attendance[index]}
                    onChange={(e) => handleChange(e, subject, 'sessional3_total_attendance', index)}
                    className="form-control"
                    required
                  />
                </div>
          
                {/* Practical Attendance */}
                <div className="mb-3">
                  <label htmlFor={`sessional1_practical_attendance_${index}`} className="form-label">Sessional 1 Practical Attendance:</label>
                  <input
                    type="number"
                    id={`sessional1_practical_attendance_${index}`}
                    name={`sessional1_practical_attendance_${index}`}
                    value={formData?.sessional1_practical_attendance[index]}
                    onChange={(e) => handleChange(e, subject, 'sessional1_practical_attendance', index)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`sessional2_practical_attendance_${index}`} className="form-label">Sessional 2 Practical Attendance:</label>
                  <input
                    type="number"
                    id={`sessional2_practical_attendance_${index}`}
                    name={`sessional2_practical_attendance_${index}`}
                    value={formData?.sessional2_practical_attendance[index]}
                    onChange={(e) => handleChange(e, subject, 'sessional2_practical_attendance', index)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`sessional3_practical_attendance_${index}`} className="form-label">Sessional 3 Practical Attendance:</label>
                  <input
                    type="number"
                    id={`sessional3_practical_attendance_${index}`}
                    name={`sessional3_practical_attendance_${index}`}
                    value={formData?.sessional3_practical_attendance[index]}
                    onChange={(e) => handleChange(e, subject, 'sessional3_practical_attendance', index)}
                    className="form-control"
                    required
                  />
                </div>
          
                {/* Sessional Total Practical Attendance */}
                <div className="mb-3">
                  <label htmlFor={`sessional1_total_practical_attendance_${index}`} className="form-label">Sessional 1 Total Practical Attendance:</label>
                  <input
                    type="number"
                    id={`sessional1_total_practical_attendance_${index}`}
                    name={`sessional1_total_practical_attendance_${index}`}
                    value={formData?.sessional1_total_practical_attendance[index]}
                    onChange={(e) => handleChange(e, subject, 'sessional1_total_practical_attendance', index)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`sessional2_total_practical_attendance_${index}`} className="form-label">Sessional 2 Total Practical Attendance:</label>
                  <input
                    type="number"
                    id={`sessional2_total_practical_attendance_${index}`}
                    name={`sessional2_total_practical_attendance_${index}`}
                    value={formData?.sessional2_total_practical_attendance[index]}
                    onChange={(e) => handleChange(e, subject, 'sessional2_total_practical_attendance', index)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`sessional3_total_practical_attendance_${index}`} className="form-label">Sessional 3 Total Practical Attendance:</label>
                  <input
                    type="number"
                    id={`sessional3_total_practical_attendance_${index}`}
                    name={`sessional3_total_practical_attendance_${index}`}
                    value={formData?.sessional3_total_practical_attendance[index]}
                    onChange={(e) => handleChange(e, subject, 'sessional3_total_practical_attendance', index)}
                    className="form-control"
                    required
                  />
                </div>
          
                {/* Block Marks and Present */}
                <div className="mb-3">
                  <label htmlFor={`block_marks_${index}`} className="form-label">Block Marks:</label>
                  <input
                    type="number"
                    id={`block_marks_${index}`}
                    name={`block_marks_${index}`}
                    value={formData?.block_marks[index]}
                    onChange={(e) => handleChange(e, subject, 'block_marks', index)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`block_present_${index}`} className="form-label">Block Present:</label>
                  <input
                    type="text"
                    id={`block_present_${index}`}
                    name={`block_present_${index}`}
                    value={formData?.block_present[index]}
                    onChange={(e) => handleChange(e, subject, 'block_present', index)}
                    className="form-control"
                    required
                  />
                </div>
          
                {/* External Marks and Status */}
                <div className="mb-3">
                  <label htmlFor={`external_marks_${index}`} className="form-label">External Marks:</label>
                  <input
                    type="number"
                    id={`external_marks_${index}`}
                    name={`external_marks_${index}`}
                    value={formData?.external_marks[index]}
                    onChange={(e) => handleChange(e, subject, 'external_marks', index)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`external_status_${index}`} className="form-label">External Status:</label>
                  <input
                    type="text"
                    id={`external_status_${index}`}
                    name={`external_status_${index}`}
                    value={formData?.external_status[index]}
                    onChange={(e) => handleChange(e, subject, 'external_status', index)}
                    className="form-control"
                    required
                  />
                </div>
          
                {/* Termwork Marks and Status */}
                <div className="mb-3">
                  <label htmlFor={`termwork_marks_${index}`} className="form-label">Termwork Marks:</label>
                  <input
                    type="number"
                    id={`termwork_marks_${index}`}
                    name={`termwork_marks_${index}`}
                    value={formData?.termwork_marks[index]}
                    onChange={(e) => handleChange(e, subject, 'termwork_marks', index)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`termwork_status_${index}`} className="form-label">Termwork Status:</label>
                  <input
                    type="text"
                    id={`termwork_status_${index}`}
                    name={`termwork_status_${index}`}
                    value={formData?.termwork_status[index]}
                    onChange={(e) => handleChange(e, subject, 'termwork_status', index)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
            ))}
          
          


        {/* Submit button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {status !== "" && <p>{status}</p>}
      </form>
    </div>
  );
  
  
  
};

export default Update_Exam_Result;