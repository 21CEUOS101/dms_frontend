import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update_Placement_Company = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    placement_company_id: "",
    placement_company_name: "",
    placement_company_email: "",
    placement_company_mobile_number: "",
    placement_company_address: "",
    placement_company_city: "",
    placement_company_state: "",
    placement_company_pincode: "",
    placement_company_country: "",
    placement_company_website: "",
    placement_company_type: "",
    placement_company_description: "",
    placement_company_job_role: "",
    placement_company_job_description: "",
    no_of_student_placed: "",
  });

  const [status, setStatus] = useState("");

  const preData = async () => {
    axios
      .get(`http://localhost:3001/tpo/getSpecificPlacementCompanyDetails/${id}`)
      .then(
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
    console.log(formData);
    await axios
      .patch(`http://localhost:3001/tpo/update-placement-company`, formData)
      .then(
        (data) => {
          console.log(data?.data);
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
    if (formData.placement_company_mobile_number.length !== 10) {
      alert("Mobile Number should be of 10 digits!");
      return;
    }
    if (formData.placement_company_id.length < 5) {
      console.log(formData.placement_company_id.length);
      alert("ID should be of 5 characters!");
      return;
    }
    if (formData.placement_company_name.length < 5) {
      alert("Name should be of atleast 5 characters!");
      return;
    }
    if (
      formData.placement_company_id === "" ||
      formData.placement_company_name === "" ||
      formData.placement_company_email === "" ||
      formData.placement_company_mobile_number === "" ||
      formData.placement_company_qualification === ""
    ) {
      alert("Please fill all the fields!");
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
      <h1 className="mb-3">PlacementCompanyDetails Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="placement_company_id" className="form-label">
            Placement Company ID:
          </label>
          <input
            type="text"
            id="placement_company_id"
            name="placement_company_id"
            value={formData.placement_company_id}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="placement_company_name" className="form-label">
            Placement Company Name:
          </label>
          <input
            type="text"
            id="placement_company_name"
            name="placement_company_name"
            value={formData.placement_company_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="placement_company_email" className="form-label">
            Placement Company Email:
          </label>
          <input
            type="email"
            id="placement_company_email"
            name="placement_company_email"
            value={formData.placement_company_email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="placement_company_mobile_number"
            className="form-label"
          >
            Placement Company Mobile Number:
          </label>
          <input
            type="text"
            id="placement_company_mobile_number"
            name="placement_company_mobile_number"
            value={formData.placement_company_mobile_number}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="placement_company_address" className="form-label">
            Placement Company Address:
          </label>
          <input
            type="text"
            id="placement_company_address"
            name="placement_company_address"
            value={formData.placement_company_address}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="placement_company_city" className="form-label">
            Placement Company City:
          </label>
          <input
            type="text"
            id="placement_company_city"
            name="placement_company_city"
            value={formData.placement_company_city}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="placement_company_state" className="form-label">
            Placement Company State:
          </label>
          <input
            type="text"
            id="placement_company_state"
            name="placement_company_state"
            value={formData.placement_company_state}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="placement_company_pincode" className="form-label">
            Placement Company Pincode:
          </label>
          <input
            type="text"
            id="placement_company_pincode"
            name="placement_company_pincode"
            value={formData.placement_company_pincode}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="placement_company_country" className="form-label">
            Placement Company Country:
          </label>
          <input
            type="text"
            id="placement_company_country"
            name="placement_company_country"
            value={formData.placement_company_country}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="placement_company_website" className="form-label">
            Placement Company Website:
          </label>
          <input
            type="text"
            id="placement_company_website"
            name="placement_company_website"
            value={formData.placement_company_website}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="placement_company_type" className="form-label">
            Placement Company Type:
          </label>
          <input
            type="text"
            id="placement_company_type"
            name="placement_company_type"
            value={formData.placement_company_type}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="placement_company_description" className="form-label">
            Placement Company Description:
          </label>
          <input
            type="text"
            id="placement_company_description"
            name="placement_company_description"
            value={formData.placement_company_description}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="placement_company_job_role" className="form-label">
            Placement Company Job Role:
          </label>
          <input
            type="text"
            id="placement_company_job_role"
            name="placement_company_job_role"
            value={formData.placement_company_job_role}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="placement_company_job_description"
            className="form-label"
          >
            Placement Company Job Description:
          </label>
          <input
            type="text"
            id="placement_company_job_description"
            name="placement_company_job_description"
            value={formData.placement_company_job_description}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="no_of_student_placed" className="form-label">
            Number of Students Placed:
          </label>
          <input
            type="text"
            id="no_of_student_placed"
            name="no_of_student_placed"
            value={formData.no_of_student_placed}
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

export default Update_Placement_Company;
