import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateStudentInfo = ({ id }) => {
  const [formData, setFormData] = useState({
    student_id: "",
    medium_of_exam: "",
    seat_number: "",
    passing_year: "",
    passing_month: "",
    board: "",
    institute_name: "",
    result_type: "",
    result: "",
  });

  const [status, setStatus] = useState("");

  const preData = async () => {
    axios.get(`http://localhost:3001/student/getStudentAcademicInfo/${id}`).then(
      (data) => {
        console.log(data?.data[0]);
        setFormData(data?.data[0]);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const updateData = async () => {
    try {
      const response = await axios.patch(
        "http://localhost:3001/admin/updateStudentAcademicInfo",
        formData
      );

      console.log("Update response:", response.data); // Log the response

      setStatus(
        response.data.acknowledged
          ? "Student Info Updated Successfully!"
          : "Student Info Updation Failed!"
      );

      setTimeout(() => {
        setStatus("");
      }, 2000);
    } catch (error) {
      console.error("Update error:", error); // Log any errors
      setStatus("Student Info Updation Failed!");
    }
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
    if (
      !formData.medium_of_exam ||
      !formData.seat_number ||
      !formData.passing_year ||
      !formData.passing_month ||
      !formData.board ||
      !formData.institute_name ||
      !formData.result_type ||
      !formData.result
    ) {
      alert("Please fill all the required fields!");
      return;
    } else {
      console.log(formData);
      await updateData();
    }
  };

  useEffect(() => {
    preData();
  }, [id]);

  return (
    <div className="container">
      <h1 className="mb-3">Academics Info Update</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="student_id" className="form-label">
            Student ID:
          </label>
          <input
            type="text"
            id="student_id"
            name="student_id"
            value={formData.student_id}
            disabled
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="medium_of_exam" className="form-label">
            Medium of Exam:
          </label>
          <input
            type="text"
            id="medium_of_exam"
            name="medium_of_exam"
            value={formData.medium_of_exam}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="seat_number" className="form-label">
            Seat Number:
          </label>
          <input
            type="text"
            id="seat_number"
            name="seat_number"
            value={formData.seat_number}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="passing_year" className="form-label">
            Passing Year:
          </label>
          <input
            type="text"
            id="passing_year"
            name="passing_year"
            value={formData.passing_year}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="passing_month" className="form-label">
            Passing Month:
          </label>
          <input
            type="text"
            id="passing_month"
            name="passing_month"
            value={formData.passing_month}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="board" className="form-label">
            Board:
          </label>
          <input
            type="text"
            id="board"
            name="board"
            value={formData.board}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="institute_name" className="form-label">
            Institute Name:
          </label>
          <input
            type="text"
            id="institute_name"
            name="institute_name"
            value={formData.institute_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="result_type" className="form-label">
            Result Type:
          </label>
          <input
            type="text"
            id="result_type"
            name="result_type"
            value={formData.result_type}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="result" className="form-label">
            Result:
          </label>
          <input
            type="text"
            id="result"
            name="result"
            value={formData.result}
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

export default UpdateStudentInfo;
