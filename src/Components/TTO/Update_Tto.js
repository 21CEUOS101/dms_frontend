import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update_Tto = () => {
    const {id} = useParams();
  const [formData, setFormData] = useState({
    tto_id: '',
    tto_name: '',
    tto_email: '',
    tto_mobile_number: '',
    tto_experience: '',
    tto_qualification: '',
    tto_designation: '',
    tto_department: '',
  });
    
    const [status, setStatus] = useState("");
    
    const preData = async () => {
        axios.get(`https://dms2901.onrender.com/admin/getSpecificTTODetails/${id}`).then((data) => {
            console.log(data?.data);
            setFormData(data?.data);
        },
            (error) => {
                console.log(error);
            }
        )
    }

    const updateData = async () => {
        await axios.patch(`https://dms2901.onrender.com/admin/updateTTO`, formData).then((data) => {
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
    if (formData.tto_mobile_number.length !== 10)
    {
        alert("Mobile Number should be of 10 digits!");
        return;
    }
    if (formData.tto_id.length < 5)
    {
        console.log(formData.tto_id.length);
        alert("ID should be of 5 characters!");
        return;
    }
    if (formData.tto_name.length < 5)
    {
        alert("Name should be of atleast 5 characters!");
        return;
    }
    if (isNaN(formData.tto_experience))
    {
        alert("Experience should be a number!");
        return;
    }
    if (formData.tto_experience < 0)
    {
        alert("Experience should be a positive integer!");
        return;
    }
    if(formData.tto_id === '' || formData.tto_name === '' || formData.tto_email === '' || formData.tto_mobile_number === '' || formData.tto_experience === '' || formData.tto_qualification === '' || formData.tto_designation === '' || formData.tto_department === '')
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
      <h1 className="mb-3">TTODetails Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="tto_id" className="form-label">TTO ID:</label>
          <input
            type="text"
            id="tto_id"
            name="tto_id"
            value={formData.tto_id}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tto_name" className="form-label">TTO Name:</label>
          <input
            type="text"
            id="tto_name"
            name="tto_name"
            value={formData.tto_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tto_email" className="form-label">TTO Email:</label>
          <input
            type="email"
            id="tto_email"
            name="tto_email"
            value={formData.tto_email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tto_mobile_number" className="form-label">TTO Mobile Number:</label>
          <input
            type="text"
            id="tto_mobile_number"
            name="tto_mobile_number"
            value={formData.tto_mobile_number}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tto_experience" className="form-label">TTO Experience:</label>
          <input
            type="text"
            id="tto_experience"
            name="tto_experience"
            value={formData.tto_experience}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tto_qualification" className="form-label">TTO Qualification:</label>
          <input
            type="text"
            id="tto_qualification"
            name="tto_qualification"
            value={formData.tto_qualification}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tto_designation" className="form-label">TTO Designation:</label>
          <input
            type="text"
            id="tto_designation"
            name="tto_designation"
            value={formData.tto_designation}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tto_department" className="form-label">TTO Department:</label>
          <input
            type="text"
            id="tto_department"
            name="tto_department"
            value={formData.tto_department}
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

export default Update_Tto
