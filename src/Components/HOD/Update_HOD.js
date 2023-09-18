import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update_HOD = () => {
    const {id} = useParams();
  const [formData, setFormData] = useState({
    hod_id: '',
    hod_name: '',
    hod_email: '',
    hod_mobile_number: '',
    hod_experience: '',
    hod_qualification: '',
    hod_designation: '',
    hod_department: '',
  });
    
    const [status, setStatus] = useState("");
    
    const preData = async () => {
        axios.get(`http://localhost:3001/hod/getHODDetails/${id}`).then((data) => {
            console.log(data?.data);
            setFormData(data?.data);
        },
            (error) => {
                console.log(error);
            }
        )
    }

    const updateData = async () => {
        await axios.patch(`http://localhost:3001/hod/updatehod`, formData).then((data) => {
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
    if (formData.hod_mobile_number.length !== 10)
    {
        alert("Mobile Number should be of 10 digits!");
        return;
    }
    if (formData.hod_id.length < 5)
    {
        console.log(formData.hod_id.length);
        alert("ID should be of 5 characters!");
        return;
    }
    if (formData.hod_name.length < 5)
    {
        alert("Name should be of atleast 5 characters!");
        return;
    }
    if (isNaN(formData.hod_experience))
    {
        alert("Experience should be a number!");
        return;
    }
    if (formData.hod_experience < 0)
    {
        alert("Experience should be a positive integer!");
        return;
    }
    if(formData.hod_id === '' || formData.hod_name === '' || formData.hod_email === '' || formData.hod_mobile_number === '' || formData.hod_experience === '' || formData.hod_qualification === '' || formData.hod_designation === '' || formData.hod_department === '')
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
      <h1 className="mb-3">hodDetails Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="hod_id" className="form-label">hod ID:</label>
          <input
            type="text"
            id="hod_id"
            name="hod_id"
            value={formData.hod_id}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hod_name" className="form-label">hod Name:</label>
          <input
            type="text"
            id="hod_name"
            name="hod_name"
            value={formData.hod_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hod_email" className="form-label">hod Email:</label>
          <input
            type="email"
            id="hod_email"
            name="hod_email"
            value={formData.hod_email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hod_mobile_number" className="form-label">hod Mobile Number:</label>
          <input
            type="text"
            id="hod_mobile_number"
            name="hod_mobile_number"
            value={formData.hod_mobile_number}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hod_experience" className="form-label">hod Experience:</label>
          <input
            type="text"
            id="hod_experience"
            name="hod_experience"
            value={formData.hod_experience}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hod_qualification" className="form-label">hod Qualification:</label>
          <input
            type="text"
            id="hod_qualification"
            name="hod_qualification"
            value={formData.hod_qualification}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hod_designation" className="form-label">hod Designation:</label>
          <input
            type="text"
            id="hod_designation"
            name="hod_designation"
            value={formData.hod_designation}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hod_department" className="form-label">hod Department:</label>
          <input
            type="text"
            id="hod_department"
            name="hod_department"
            value={formData.hod_department}
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

export default Update_HOD;