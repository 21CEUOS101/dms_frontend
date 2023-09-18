import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update_Course = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    subject_code: "",
    subject_name: "",
    subject_credit: "",
    subject_alias: "",
    semester: "",
    theory_min_passing_marks: "",
    theory_min_passing_marks2: "",
    theory_total_marks: "",
    sessional_min_passing_marks: "",
    sessional_min_passing_marks2: "",
    sessional_total_marks: "",
    practical_min_passing_marks: "",
    practical_min_passing_marks2: "",
    practical_total_marks: "",
    isElective: "",
  });

  const [status, setStatus] = useState("");

  const preData = async () => {
    console.log(id);
    axios.get(`http://localhost:3001/admin/getCourseBySubjectCode/${id}`).then(
      (data) => {
        console.log(data?.data);
        setFormData(data?.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const updateData = async () => {
    await axios
      .patch(`http://localhost:3001/student/updateCourse`, formData)
      .then(
        (data) => {
          console.log(data?.data?.acknowledged);
          setStatus(
            data?.data?.acknowledged
              ? "Data Updated Successfully!"
              : "Data Updation Failed!"
          );
          setTimeout(() => {
            setStatus("");
          }, 2000);
        },
        (error) => {
          console.log(error);
          setStatus(JSON.stringify(error));
        }
      );
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation code here

    console.log(formData);
    await updateData();
  };

  useEffect(() => {
    preData();
  }, []);

  return (
    <div className="container">
      <h1 className="mb-3">Subject Details Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="subject_code" className="form-label">
            Subject Code:
          </label>
          <input
            type="text"
            id="subject_code"
            name="subject_code"
            value={formData.subject_code}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject_name" className="form-label">
            Subject Name:
          </label>
          <input
            type="text"
            id="subject_name"
            name="subject_name"
            value={formData.subject_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject_credit" className="form-label">
            Subject Credit:
          </label>
          <input
            type="text"
            id="subject_credit"
            name="subject_credit"
            value={formData.subject_credit}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject_alias" className="form-label">
            Subject Alias:
          </label>
          <input
            type="text"
            id="subject_alias"
            name="subject_alias"
            value={formData.subject_alias}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="semester" className="form-label">
            Semester:
          </label>
          <input
            type="text"
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="theory_min_passing_marks" className="form-label">
            Theory Min Passing Marks:
          </label>
          <input
            type="text"
            id="theory_min_passing_marks"
            name="theory_min_passing_marks"
            value={formData.theory_min_passing_marks}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="theory_min_passing_marks2" className="form-label">
            Theory Min Passing Marks 2:
          </label>
          <input
            type="text"
            id="theory_min_passing_marks2"
            name="theory_min_passing_marks2"
            value={formData.theory_min_passing_marks2}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="theory_total_marks" className="form-label">
            Theory Total Marks:
          </label>
          <input
            type="text"
            id="theory_total_marks"
            name="theory_total_marks"
            value={formData.theory_total_marks}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sessional_min_passing_marks" className="form-label">
            Sessional Min Passing Marks:
          </label>
          <input
            type="text"
            id="sessional_min_passing_marks"
            name="sessional_min_passing_marks"
            value={formData.sessional_min_passing_marks}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sessional_min_passing_marks2" className="form-label">
            Sessional Min Passing Marks 2:
          </label>
          <input
            type="text"
            id="sessional_min_passing_marks2"
            name="sessional_min_passing_marks2"
            value={formData.sessional_min_passing_marks2}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sessional_total_marks" className="form-label">
            Sessional Total Marks:
          </label>
          <input
            type="text"
            id="sessional_total_marks"
            name="sessional_total_marks"
            value={formData.sessional_total_marks}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="practical_min_passing_marks" className="form-label">
            Practical Min Passing Marks:
          </label>
          <input
            type="text"
            id="practical_min_passing_marks"
            name="practical_min_passing_marks"
            value={formData.practical_min_passing_marks}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="practical_min_passing_marks2" className="form-label">
            Practical Min Passing Marks 2:
          </label>
          <input
            type="text"
            id="practical_min_passing_marks2"
            name="practical_min_passing_marks2"
            value={formData.practical_min_passing_marks2}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="practical_total_marks" className="form-label">
            Practical Total Marks:
          </label>
          <input
            type="text"
            id="practical_total_marks"
            name="practical_total_marks"
            value={formData.practical_total_marks}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="isElective" className="form-label">
            Is Elective:
          </label>
          <input
            type="text"
            id="isElective"
            name="isElective"
            value={formData.isElective}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {status !== "" && <p>{status}</p>}
      </form>
    </div>
  );
};

export default Update_Course;
