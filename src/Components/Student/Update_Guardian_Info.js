// UpdateGuardianInfo.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateGuardianInfo = ({ id }) => {
  const [formData, setFormData] = useState({
    father_name: "",
    father_occupation: "",
    organization_name: "",
    annual_income: "",
    student_id: "",
  });

  const [status, setStatus] = useState("");

  const preData = async () => {
    axios.get(`https://dms2901.onrender.com/student/getStudentGuardianInfo/${id}`).then(
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
        "https://dms2901.onrender.com/admin/updateStudentGuardianInfo",
        formData
      );
  
      console.log("Update response:", response.data.acknowledged); // Log the response
  
      setStatus(
        response.data.acknowledged
          ? "Guardian Info Updated Successfully!"
          : "Guardian Info Updation Failed!"
      );
  
      setTimeout(() => {
        setStatus("");
      }, 2000);
    } catch (error) {
      console.error("Update error:", error); // Log any errors
      setStatus("Guardian Info Updation Failed!");
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
      !formData.father_name ||
      !formData.father_occupation ||
      !formData.organization_name ||
      !formData.annual_income ||
      !formData.student_id
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
      <h1 className="mb-3">Guardian Information Update</h1>
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
          <label htmlFor="father_name" className="form-label">
            Father's Name:
          </label>
          <input
            type="text"
            id="father_name"
            name="father_name"
            value={formData.father_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="father_occupation" className="form-label">
            Father's Occupation:
          </label>
          <input
            type="text"
            id="father_occupation"
            name="father_occupation"
            value={formData.father_occupation}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="organization_name" className="form-label">
            Organization Name:
          </label>
          <input
            type="text"
            id="organization_name"
            name="organization_name"
            value={formData.organization_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="annual_income" className="form-label">
            Annual Income:
          </label>
          <input
            type="text"
            id="annual_income"
            name="annual_income"
            value={formData.annual_income}
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

export default UpdateGuardianInfo;
