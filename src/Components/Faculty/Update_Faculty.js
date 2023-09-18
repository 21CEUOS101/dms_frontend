import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update_Faculty = () => {
    const {id} = useParams();
  const [formData, setFormData] = useState({
    faculty_id: '',
    faculty_name: '',
    faculty_email: '',
    faculty_mobile_number: '',
    faculty_experience: '',
    faculty_qualification: '',
    faculty_designation: '',
    faculty_department: '',
  });
    
    const [status, setStatus] = useState("");
    
    const preData = async () => {
        axios.get(`http://localhost:3001/admin/getSpecificfacultyDetails/${id}`).then((data) => {
            console.log(data?.data);
            setFormData(data?.data);
        },
            (error) => {
                console.log(error);
            }
        )
    }

    const updateData = async () => {
        await axios.patch(`http://localhost:3001/admin/updatefaculty`, formData).then((data) => {
            console.log(data?.data?.acknowledged);
            setStatus(data?.data?.acknowledged ? "Data Updated Successfully!" : "Data Updation Failed!");
            setTimeout(() => {
                setStatus("");
            }
            , 2000);
        },
            (error) => {
                console.log(error);
                setStatus(JSON.stringify(error));
            }
        )
    }


  const handleChange = (e) => {
      e.preventDefault();
      setFormData({
          ...formData,
          [e.target.name]: e.target.value.trim(),
      });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
    if (formData.faculty_mobile_number.length !== 10)
    {
        alert("Mobile Number should be of 10 digits!");
        return;
    }
    if (formData.faculty_id.length < 5)
    {
        console.log(formData.faculty_id.length);
        alert("ID should be of 5 characters!");
        return;
    }
    if (formData.faculty_name.length < 5)
    {
        alert("Name should be of atleast 5 characters!");
        return;
    }
    if (isNaN(formData.faculty_experience))
    {
        alert("Experience should be a number!");
        return;
    }
    if (formData.faculty_experience < 0)
    {
        alert("Experience should be a positive integer!");
        return;
    }
    if(formData.faculty_id === '' || formData.faculty_name === '' || formData.faculty_email === '' || formData.faculty_mobile_number === '' || formData.faculty_experience === '' || formData.faculty_qualification === '' || formData.faculty_designation === '' || formData.faculty_department === '')
    {
        alert("Please fill all the fields!");
        return;
    }
    else
    {
        console.log(formData);
        await updateData();
    }
};

useEffect(() => {   
        preData();
    }, []);

  return (
    <div className="container">
      <h1 className="mb-3">facultyDetails Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="faculty_id" className="form-label">Faculty ID:</label>
          <input
            type="text"
            id="faculty_id"
            name="faculty_id"
            value={formData.faculty_id}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="faculty_name" className="form-label">Faculty Name:</label>
          <input
            type="text"
            id="faculty_name"
            name="faculty_name"
            value={formData.faculty_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="faculty_email" className="form-label">Faculty Email:</label>
          <input
            type="email"
            id="faculty_email"
            name="faculty_email"
            value={formData.faculty_email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="faculty_mobile_number" className="form-label">Faculty Mobile Number:</label>
          <input
            type="text"
            id="faculty_mobile_number"
            name="faculty_mobile_number"
            value={formData.faculty_mobile_number}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="faculty_experience" className="form-label">Faculty Experience:</label>
          <input
            type="text"
            id="faculty_experience"
            name="faculty_experience"
            value={formData.faculty_experience}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="faculty_qualification" className="form-label">faculty Qualification:</label>
          <input
            type="text"
            id="faculty_qualification"
            name="faculty_qualification"
            value={formData.faculty_qualification}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="faculty_designation" className="form-label">Faculty Designation:</label>
          <input
            type="text"
            id="faculty_designation"
            name="faculty_designation"
            value={formData.faculty_designation}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="faculty_department" className="form-label">Faculty Department:</label>
          <input
            type="text"
            id="faculty_department"
            name="faculty_department"
            value={formData.faculty_department}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              {status !== "" && <p>{status}</p>}
      </form>
    </div>
  );
};

export default Update_Faculty