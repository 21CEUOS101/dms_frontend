import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { Email } from '../Email';

function Admin_Form() {
  const role = localStorage.getItem('role');
  const [data, setData] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();

  const schema = yup.object().shape({
    admin_id: yup.string().required('ID is required').min(5),
    admin_name: yup.string().required('Name is required').min(5),
    admin_email: yup.string().email().required('Email is required'),
    admin_mobile_number: yup
      .string()
      .transform((value) => (isNaN(value) ? undefined : value))
      .required('Mobile Number is required')
      .min(10)
      .max(10),
    admin_designation: yup.string().required('Designation is required'),
    admin_department: yup.string().required('Department is required'),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setData(data);
    setTimeout(() => {
      setData(null);
    }, 2000);
    reset();
  };

  const createAdmin = async () => {
    await axios.post(`http://localhost:3001/${role}/addNewAdmin`, data).then((response) => {
      console.log('success');
      console.log(response?.data?.message?._message);
      console.log(response?.data);

      if (response?.data?.message?.errors !== undefined) {
        setError(response?.data?.message?._message);
      } else {
        setStatus(response?.data?.message);
        setTimeout(() => {
          setStatus('');
        }, 2000);
        const emailData = {
          from_name: role,
          to_name: response?.data?.id,
          from_email: localStorage.getItem('email'),
          to_email: response?.data?.email,
          message: `${response?.data?.password}`,
        };
        Email(emailData);
      }
    }).catch((err) => {
      if (err.message === 'Request failed with status code 404') {
        alert('You are not allowed to add Faculty Details');
      } else {
        console.log(JSON.stringify(err));
      }
    });
  };

  useEffect(() => {
    if (data !== undefined && data !== null) {
      createAdmin();
    }
  }, [data]);

  useEffect(() => {
    setStatus('');
  }, [error]);

  return (
    <div className="col-xxl grid place-items-center">
      <div className="card mb-4 h-auto w-fit" style={{ width: '80%', padding: '20px' }}>
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="mb-0">Admin Details Form</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="admin_id">Admin ID</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="admin_id" name="admin_id" required {...register('admin_id')} />
                <p className="text-danger">{errors?.admin_id?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="admin_name">Admin Name</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="admin_name" name="admin_name" required {...register('admin_name')} />
                <p className="text-danger">{errors?.admin_name?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="admin_email">Admin Email</label>
              </div>
              <div className="col-sm-8">
                <input type="email" className="form-control" id="admin_email" name="admin_email" required {...register('admin_email')} />
                <p className="text-danger">{errors?.admin_email?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="admin_mobile_number">Admin Mobile Number</label>
              </div>
              <div className="col-sm-8">
                <input type="tel" className="form-control phone-mask" id="admin_mobile_number" name="admin_mobile_number" required {...register('admin_mobile_number')} />
                <p className="text-danger">{errors?.admin_mobile_number?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="admin_designation">Admin Designation</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="admin_designation" name="admin_designation" required {...register('admin_designation')} />
                <p className="text-danger">{errors?.admin_designation?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="admin_department">Admin Department</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="admin_department" name="admin_department" required {...register('admin_department')} />
                <p className="text-danger">{errors?.admin_department?.message}</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-8">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
            {status !== undefined && <p>{status}</p>}
            {error !== undefined && <p className="text-danger">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin_Form;
