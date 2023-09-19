import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update_TPO = () => {
    const {id} = useParams();
  const [formData, setFormData] = useState({
    tpo_id: '',
    tpo_name: '',
    tpo_email: '',
    tpo_mobile_number: '',
    tpo_experience: '',
    tpo_qualification: '',
    tpo_designation: '',
    tpo_department: '',
  });
    
    const [status, setStatus] = useState("");
    
    const preData = async () => {
        axios.get(`http://localhost:3001/admin/getSpecificTPODetails/${id}`).then((data) => {
            console.log(data?.data);
            setFormData(data?.data);
        },
            (error) => {
                console.log(error);
            }
        )
    }

    const updateData = async () => {
        await axios.patch(`http://localhost:3001/admin/updateTPO`, formData).then((data) => {
            console.log(data?.data);
            setStatus(data?.data?.message);
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
    if (formData.tpo_mobile_number.length !== 10)
    {
        alert("Mobile Number should be of 10 digits!");
        return;
    }
    if (formData.tpo_id.length < 5)
    {
        console.log(formData.tpo_id.length);
        alert("ID should be of 5 characters!");
        return;
    }
    if (formData.tpo_name.length < 5)
    {
        alert("Name should be of atleast 5 characters!");
        return;
    }
    if (isNaN(formData.tpo_experience))
    {
        alert("Experience should be a number!");
        return;
    }
    if (formData.tpo_experience < 0)
    {
        alert("Experience should be a positive integer!");
        return;
    }
    if(formData.tpo_id === '' || formData.tpo_name === '' || formData.tpo_email === '' || formData.tpo_mobile_number === '' || formData.tpo_experience === '' || formData.tpo_qualification === '' || formData.tpo_designation === '' || formData.tpo_department === '')
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
      <h1 className="mb-3">TPODetails Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="tpo_id" className="form-label">TPO ID:</label>
          <input
            type="text"
            id="tpo_id"
            name="tpo_id"
            value={formData.tpo_id}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tpo_name" className="form-label">TPO Name:</label>
          <input
            type="text"
            id="tpo_name"
            name="tpo_name"
            value={formData.tpo_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tpo_email" className="form-label">TPO Email:</label>
          <input
            type="email"
            id="tpo_email"
            name="tpo_email"
            value={formData.tpo_email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tpo_mobile_number" className="form-label">TPO Mobile Number:</label>
          <input
            type="text"
            id="tpo_mobile_number"
            name="tpo_mobile_number"
            value={formData.tpo_mobile_number}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tpo_experience" className="form-label">TPO Experience:</label>
          <input
            type="text"
            id="tpo_experience"
            name="tpo_experience"
            value={formData.tpo_experience}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tpo_qualification" className="form-label">TPO Qualification:</label>
          <input
            type="text"
            id="tpo_qualification"
            name="tpo_qualification"
            value={formData.tpo_qualification}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tpo_designation" className="form-label">TPO Designation:</label>
          <input
            type="text"
            id="tpo_designation"
            name="tpo_designation"
            value={formData.tpo_designation}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tpo_department" className="form-label">TPO Department:</label>
          <input
            type="text"
            id="tpo_department"
            name="tpo_department"
            value={formData.tpo_department}
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

export default Update_TPO;