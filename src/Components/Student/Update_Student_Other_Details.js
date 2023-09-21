import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateOtherInfo = ({ id }) => {
  const [formData, setFormData] = useState({
    student_id: "",
    sub_cast: "",
    merital_status: "",
    mother_tongue: "",
    nationality: "",
    blood_group: "",
  });

  const [status, setStatus] = useState("");

  const preData = async () => {
    axios
      .get(`http://localhost:3001/student/getStudentOtherDetails/${id}`)
      .then(
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
        "http://localhost:3001/admin/updateStudentOtherDetails",
        formData
      );

      console.log("Update response:", response.data); // Log the response

      setStatus(
        response.data.acknowledged
          ? "Additional Info Updated Successfully!"
          : "Additional Info Updation Failed!"
      );

      setTimeout(() => {
        setStatus("");
      }, 2000);
    } catch (error) {
      console.error("Update error:", error); // Log any errors
      setStatus("Additional Info Updation Failed!");
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
    console.log(formData);
    await updateData();
  };

  useEffect(() => {
    preData();
  }, [id]);

  return (
    <div className="container">
      <h1 className="mb-3">Additional Student Information Form</h1>
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
          <label htmlFor="sub_cast" className="form-label">
            Sub Cast:
          </label>
          <input
            type="text"
            id="sub_cast"
            name="sub_cast"
            value={formData.sub_cast}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="merital_status" className="form-label">
            Marital Status:
          </label>
          <input
            type="text"
            id="merital_status"
            name="merital_status"
            value={formData.merital_status}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mother_tongue" className="form-label">
            Mother Tongue:
          </label>
          <input
            type="text"
            id="mother_tongue"
            name="mother_tongue"
            value={formData.mother_tongue}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nationality" className="form-label">
            Nationality:
          </label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="blood_group" className="form-label">
            Blood Group:
          </label>
          <input
            type="text"
            id="blood_group"
            name="blood_group"
            value={formData.blood_group}
            onChange={handleChange}
            className="form-control"
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

export default UpdateOtherInfo;
