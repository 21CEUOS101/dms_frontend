import React, { useEffect , useState } from 'react';
import '../form.css';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

function TTO_Form() {

  const [data, setData] = useState({});
  const [status, setStatus] = useState("");
  const [error, setError] = useState();

  const schema = yup.object().shape({
    tto_id: yup.string().required("ID is required").min(5),
    tto_name: yup.string().required("Name is required").min(5),
    tto_email: yup.string().email().required("Email is required"),
    tto_mobile_number: yup.string().transform(
      (value) => (isNaN(value) ? undefined : value)
    ).required("Mobile Number is required").min(10).max(10),
    tto_experience: yup.number().positive().integer().required("Experience is required"),
    tto_qualification: yup.string().required("Qualification is required"),
    tto_designation: yup.string().required("Designation is required"),
    tto_department: yup.string().required("Department is required"),
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

  const createTTO = async() => {
    await axios.post(`http://localhost:3001/admin/createTTO`, data).then((data) => {
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
      }
    }, 
    (error) => {
      console.log(JSON.stringify(error));
      setError(error);
    }
    );
  }


  useEffect(() => {
    if(data !== undefined && data !== null)
    {
      createTTO();
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
          <h5 className="mb-0">TTODetails Form</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_id">TTO ID:</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control" id="tto_id" name="tto_id" required {...register("tto_id")} />
                  <p className="text-danger">{errors?.tto_id?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_name">TTO Name:</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control" id="tto_name" name="tto_name" required {...register("tto_name")} />
                  <p className="text-danger">{errors?.tto_name?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_email">TTO Email:</label>
              <div className="col-sm-10">
                  <input type="email" className="form-control" id="tto_email" name="tto_email" required {...register("tto_email")} />
                  <p className="text-danger">{errors?.tto_email?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_mobile_number">TTO Mobile Number:</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control phone-mask" id="tto_mobile_number" name="tto_mobile_number" required {...register("tto_mobile_number")} />
                  <p className="text-danger">{errors?.tto_mobile_number?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_experience">TTO Experience:</label>
              <div className="col-sm-10">
                  <input type="number" className="form-control" id="tto_experience" name="tto_experience" required {...register("tto_experience")} />
                  <p className="text-danger">{errors?.tto_experience?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_qualification">TTO Qualification:</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control" id="tto_qualification" name="tto_qualification" required {...register("tto_qualification")} />
                  <p className="text-danger">{errors?.tto_qualification?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_designation">TTO Designation:</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control" id="tto_designation" name="tto_designation" required {...register("tto_designation")} />
                  <p className="text-danger">{errors?.tto_designation?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_department">TTO Department:</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control" id="tto_department" name="tto_department" required {...register("tto_department")} />
                  <p className="text-danger">{errors?.tto_department?.message}</p>
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

export default TTO_Form;
