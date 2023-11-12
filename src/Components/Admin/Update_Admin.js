import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update_Admin = () => {
    const {id} = useParams();
  const [formData, setFormData] = useState({
    admin_id: '',
    admin_name: '',
    admin_email: '',
    admin_mobile_number: '',
    admin_designation: '',
    admin_department: '',
  });
    
    const [status, setStatus] = useState("");
    
    const preData = async () => {
        axios.get(`https://dms2901.onrender.com/admin/getAdminDetails/${id}`).then((data) => {
            console.log(data?.data);
            setFormData(data?.data);
        },
            (error) => {
                console.log(error);
            }
        )
    }

    const updateData = async () => {
        await axios.patch(`https://dms2901.onrender.com/hod/updateAdmin`, formData).then((data) => {
              console.log(data?.data?.acknowledged);
              setStatus(
                data?.data?.acknowledged
                  ? "Data Updated Successfully!"
                  : "Data Updation Failed!"
              );
              setTimeout(() => {
                setStatus("");
              }, 2000);
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
    if (formData.admin_mobile_number.length !== 10)
    {
        alert("Mobile Number should be of 10 digits!");
        return;
    }
    if (formData.admin_id.length < 5)
    {
        console.log(formData.admin_id.length);
        alert("ID should be of 5 characters!");
        return;
    }
    if (formData.admin_name.length < 5)
    {
        alert("Name should be of atleast 5 characters!");
        return;
    }
    if(formData.admin_id === '' || formData.admin_name === '' || formData.admin_email === '' || formData.admin_mobile_number === '' || formData.admin_designation === '' || formData.admin_department === '')
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
      <h1 className="mb-3">AdminDetails Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="admin_id" className="form-label">Admin ID:</label>
          <input
            type="text"
            id="admin_id"
            name="admin_id"
            value={formData.admin_id}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="admin_name" className="form-label">Admin Name:</label>
          <input
            type="text"
            id="admin_name"
            name="admin_name"
            value={formData.admin_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="admin_email" className="form-label">Admin Email:</label>
          <input
            type="email"
            id="admin_email"
            name="admin_email"
            value={formData.admin_email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="admin_mobile_number" className="form-label">Admin Mobile Number:</label>
          <input
            type="text"
            id="admin_mobile_number"
            name="admin_mobile_number"
            value={formData.admin_mobile_number}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="admin_designation" className="form-label">Admin Designation:</label>
          <input
            type="text"
            id="admin_designation"
            name="admin_designation"
            value={formData.admin_designation}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="admin_department" className="form-label">Admin Department:</label>
          <input
            type="text"
            id="admin_department"
            name="admin_department"
            value={formData.admin_department}
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

export default Update_Admin;