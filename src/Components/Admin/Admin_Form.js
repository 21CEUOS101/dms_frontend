import React, { useEffect , useState } from 'react';
import '../form.css';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { Email } from '../Email';

function Admin_Form() {
  const role = localStorage.getItem("role");
  const [data, setData] = useState();
  const [status, setStatus] = useState("");
  const [error, setError] = useState();

  const schema = yup.object().shape({
    admin_id: yup.string().required("ID is required").min(5),
    admin_name: yup.string().required("Name is required").min(5),
    admin_email: yup.string().email().required("Email is required"),
    admin_mobile_number: yup.string().transform(
      (value) => (isNaN(value) ? undefined : value)
    ).required("Mobile Number is required").min(10).max(10),
    admin_designation: yup.string().required("Designation is required"),
    admin_department: yup.string().required("Department is required"),
  });

  const { register, handleSubmit, formState: { errors } , reset } = useForm(
    {
      resolver: yupResolver(schema),
    }
  );
  
  const onSubmit = (data) => {
    console.log(data);
    setData(data);
    setTimeout(() => {
        setData(null);
    }, 2000);
    reset();
}

  const createAdmin = async() => {
    await axios.post(`http://localhost:3001/${role}/addNewAdmin`, data).then((data) => {
      console.log("success");
      console.log(data?.data?.message?._message);
      console.log(data?.data);

      if(data?.data?.message?.errors !== undefined)
      {
        setError(data?.data?.message?._message);
      }
      else
      {
        setStatus(data?.data?.message);
        setTimeout(() => {
            setStatus("");
        }, 2000);
        const emailData = {
          from_name : role,
          to_name: data?.data?.id,
          from_email: localStorage.getItem("email"),
          to_email: data?.data?.email,
          message: `${data?.data?.password}`
        };
        Email(emailData);
      }
    }, 
    (error) => {
      if (error.message === "Request failed with status code 404")
        {
          alert("You are not allowed to add Faculty Details");
        }
        else
        {
          console.log(JSON.stringify(error));
        }
    }
    );
  }


  useEffect(() => {
    if(data !== undefined && data !== null)
    {
      createAdmin();
    }
  }, [data]);

  useEffect(() => {
      setStatus("");
  }, [error]);


  return (
    <>
      <div className="col-xxl">
      <div className="card mb-4">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="mb-0">AdminDetails Form</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_id">Admin ID:</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control" id="tto_id" name="tto_id" required {...register("admin_id")} />
                  <p className="text-danger">{errors?.id?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="admin_name">Admin Name:</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control" id="admin_name" name="admin_name" required {...register("admin_name")} />
                  <p className="text-danger">{errors?.name?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="admin_email">Admin Email:</label>
              <div className="col-sm-10">
                  <input type="email" className="form-control" id="admin_email" name="admin_email" required {...register("admin_email")} />
                  <p className="text-danger">{errors?.email?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="admin_mobile_number">Admin Mobile Number:</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control phone-mask" id="admin_mobile_number" name="admin_mobile_number" required {...register("admin_mobile_number")} />
                  <p className="text-danger">{errors?.mobile_number?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="admin_designation">Admin Designation:</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control" id="admin_designation" name="admin_designation" required {...register("admin_designation")} />
                  <p className="text-danger">{errors?.designation?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="admin_department">Admin Department:</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control" id="admin_department" name="admin_department" required {...register("admin_department")} />
                  <p className="text-danger">{errors?.department?.message}</p>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
              </div>
              {status !== "" && <p>{status}</p>}
              {error !== undefined && <p className="text-danger">{error}</p>}
          </form>
        </div>
      </div>
    </div>

    </>
  );
}

export default Admin_Form;
