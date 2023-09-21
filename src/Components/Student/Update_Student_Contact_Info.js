import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateContactInfo = ({ id }) => {
  const [formData, setFormData] = useState({
    student_id: "",
    address_line_1: "",
    address_line_2: "",
    address_line_3: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    mobile_number: "",
    alternate_mobile_number: "",
    email: "",
    local_address_line_1: "",
    local_address_line_2: "",
    local_address_line_3: "",
    local_city: "",
  });

  const [status, setStatus] = useState("");

  const preData = async () => {
    axios.get(`http://localhost:3001/student/getStudentContactInfo/${id}`).then(
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
        "http://localhost:3001/admin/updateStudentContactInfo",
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
      !formData.address_line_1 ||
      !formData.city ||
      !formData.pincode ||
      !formData.country ||
      !formData.mobile_number ||
      !formData.email ||
      !formData.local_address_line_1 ||
      !formData.local_city
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
      <h1 className="mb-3">Student Contact Update</h1>
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
          <label htmlFor="address_line_1" className="form-label">
            Address Line 1:
          </label>
          <input
            type="text"
            id="address_line_1"
            name="address_line_1"
            value={formData.address_line_1}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address_line_2" className="form-label">
            Address Line 2:
          </label>
          <input
            type="text"
            id="address_line_2"
            name="address_line_2"
            value={formData.address_line_2}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address_line_3" className="form-label">
            Address Line 3:
          </label>
          <input
            type="text"
            id="address_line_3"
            name="address_line_3"
            value={formData.address_line_3}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="state" className="form-label">
            State:
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pincode" className="form-label">
            Pincode:
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country:
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mobile_number" className="form-label">
            Mobile Number:
          </label>
          <input
            type="text"
            id="mobile_number"
            name="mobile_number"
            value={formData.mobile_number}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="alternate_mobile_number" className="form-label">
            Alternate Mobile Number:
          </label>
          <input
            type="text"
            id="alternate_mobile_number"
            name="alternate_mobile_number"
            value={formData.alternate_mobile_number}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="local_address_line_1" className="form-label">
            Local Address Line 1:
          </label>
          <input
            type="text"
            id="local_address_line_1"
            name="local_address_line_1"
            value={formData.local_address_line_1}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="local_address_line_2" className="form-label">
            Local Address Line 2:
          </label>
          <input
            type="text"
            id="local_address_line_2"
            name="local_address_line_2"
            value={formData.local_address_line_2}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="local_address_line_3" className="form-label">
            Local Address Line 3:
          </label>
          <input
            type="text"
            id="local_address_line_3"
            name="local_address_line_3"
            value={formData.local_address_line_3}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="local_city" className="form-label">
            Local City:
          </label>
          <input
            type="text"
            id="local_city"
            name="local_city"
            value={formData.local_city}
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

export default UpdateContactInfo;
