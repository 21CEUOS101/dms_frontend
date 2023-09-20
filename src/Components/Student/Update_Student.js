import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update_Student = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    reporting_date: "",
    admission_type: "",
    full_name: "",
    gender: "",
    date_of_birth: "",
    birth_place: "",
    ACPC_seat_allotment_date: "",
    isD2D: "",
    enrollment_year: "",
    degree: "",
    qualifying_exam_roll_number: "",
    session_number: "",
    batch_year: "",
    student_id: "",
    old_student_id: "",
    merit_rank: "",
    cast_category: "",
    student_email: "",
    student_roll_number: "",
  });

  const [status, setStatus] = useState("");

  const preData = async () => {
    axios.get(`http://localhost:3001/student/getStudentDetails/${id}`).then(
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
    await axios.patch(`http://localhost:3001/admin/updateStudent`, formData).then(
      (data) => {
        console.log(data?.data);
        setStatus(
          data?.data?.message
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

  const handleIsD2DChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.reporting_date.length !== 10) {
      alert("Reporting Date should be of 10 characters!");
      return;
    }

    if (formData.admission_type.length < 5) {
      alert("Admission Type should be of atleast 5 characters!");
      return;
    }

    if (formData.first_name.length < 5) {
      alert("First Name should be of atleast 5 characters!");
      return;
    }
    if (
      !formData.reporting_date ||
      !formData.admission_type ||
      !formData.first_name ||
      !formData.last_name ||
      !formData.name_format ||
      !formData.full_name ||
      !formData.gender ||
      !formData.date_of_birth ||
      !formData.birth_place ||
      !formData.enrollment_year ||
      !formData.degree ||
      !formData.qualifying_exam_roll_number ||
      !formData.session_number ||
      !formData.batch_year ||
      !formData.student_id ||
      !formData.merit_rank ||
      !formData.cast_category ||
      !formData.student_email ||
      !formData.student_roll_number
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
  }, []);

  return (
    <div className="container">
      <h1 className="mb-3">StudentDetails Form</h1>
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
            // onChange={handleChange}
            disabled
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reporting_date" className="form-label">
            Reporting Date:
          </label>
          <input
            type="text"
            id="reporting_date"
            name="reporting_date"
            value={formData.reporting_date}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="admission_type" className="form-label">
            Admission Type:
          </label>
          <input
            type="text"
            id="admission_type"
            name="admission_type"
            value={formData.admission_type}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="middle_name" className="form-label">
            Middle Name:
          </label>
          <input
            type="text"
            id="middle_name"
            name="middle_name"
            value={formData.middle_name}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name_format" className="form-label">
            Name Format:
          </label>
          <input
            type="text"
            id="name_format"
            name="name_format"
            value={formData.name_format}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="full_name" className="form-label">
            Full Name:
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender:
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date_of_birth" className="form-label">
            Date of Birth:
          </label>
          <input
            type="text"
            id="date_of_birth"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="birth_place" className="form-label">
            Birth Place:
          </label>
          <input
            type="text"
            id="birth_place"
            name="birth_place"
            value={formData.birth_place}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ACPC_seat_allotment_date" className="form-label">
            ACPC Seat Allotment Date:
          </label>
          <input
            type="text"
            id="ACPC_seat_allotment_date"
            name="ACPC_seat_allotment_date"
            value={formData.ACPC_seat_allotment_date}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="isD2D" className="form-label">
            Is D2D:
          </label>
          <input
            type="checkbox"
            id="isD2D"
            name="isD2D"
            checked={formData.isD2D}
            onChange={handleIsD2DChange}
            className="form-check-input"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="enrollment_year" className="form-label">
            Enrollment Year:
          </label>
          <input
            type="text"
            id="enrollment_year"
            name="enrollment_year"
            value={formData.enrollment_year}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="degree" className="form-label">
            Degree:
          </label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="qualifying_exam_roll_number" className="form-label">
            Qualifying Exam Roll Number:
          </label>
          <input
            type="text"
            id="qualifying_exam_roll_number"
            name="qualifying_exam_roll_number"
            value={formData.qualifying_exam_roll_number}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="session_number" className="form-label">
            Session Number:
          </label>
          <input
            type="number"
            id="session_number"
            name="session_number"
            value={formData.session_number}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="batch_year" className="form-label">
            Batch Year:
          </label>
          <input
            type="text"
            id="batch_year"
            name="batch_year"
            value={formData.batch_year}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="old_student_id" className="form-label">
            Old Student ID:
          </label>
          <input
            type="text"
            id="old_student_id"
            name="old_student_id"
            value={formData.old_student_id}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cast_category" className="form-label">
            Cast Category:
          </label>
          <input
            type="text"
            id="cast_category"
            name="cast_category"
            value={formData.cast_category}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="student_email" className="form-label">
            Student Email:
          </label>
          <input
            type="email"
            id="student_email"
            name="student_email"
            value={formData.student_email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="student_roll_number" className="form-label">
            Student Roll Number:
          </label>
          <input
            type="text"
            id="student_roll_number"
            name="student_roll_number"
            value={formData.student_roll_number}
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

export default Update_Student;
