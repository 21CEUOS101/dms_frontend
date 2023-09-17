import React, { useEffect , useState } from 'react';
import '../form.css';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

function TTO_Form() {

  const [data, setData] = useState({});
  const [status, setStatus] = useState("");

  const schema = yup.object().shape({
    id: yup.string().required("ID is required"),
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    mobile_number: yup.string().transform(
      (value) => (isNaN(value) ? undefined : value)
    ).required("Mobile Number is required").min(10).max(10),
    experience: yup.number().required("Experience is required"),
    qualification: yup.string().required("Qualification is required"),
    designation: yup.string().required("Designation is required"),
    department: yup.string().required("Department is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      resolver: yupResolver(schema),
    }
  );
  
  const onSubmit = (data) => {
    console.log(data);
    setData(data);
  }

  const createTTO = () => {
    axios.post(`http://localhost:3001/admin/createTTO`, data).then((data) => {
      console.log("success");
      setStatus(data?.data?.message);
    }, 
    (error) => {
      console.log(JSON.stringify(error));
      setStatus(data?.data?.message);
    }
    );
  }


  useEffect(() => {
    console.log(data);
    createTTO();
  }, [data]);


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
                  <input type="text" className="form-control" id="tto_id" name="tto_id" required {...register("id")} />
                  {errors?.id && <p className="text-danger">{errors?.id?.message}</p>}
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_name">TTO Name:</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control" id="tto_name" name="tto_name" required {...register("name")} />
                  {errors?.name && <p className="text-danger">{errors?.name?.message}</p>}
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_email">TTO Email:</label>
              <div className="col-sm-10">
                  <input type="email" className="form-control" id="tto_email" name="tto_email" required {...register("email")} />
                  {errors?.email && <p className="text-danger">{errors?.email?.message}</p>}
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_mobile_number">TTO Mobile Number:</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control phone-mask" id="tto_mobile_number" name="tto_mobile_number" required {...register("mobile_number")} />
                  {errors?.mobile_number && <p className="text-danger">{errors?.mobile_number?.message}</p>}
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_experience">TTO Experience:</label>
              <div className="col-sm-10">
                  <input type="number" className="form-control" id="tto_experience" name="tto_experience" required {...register("experience")} />
                  {errors?.experience && <p className="text-danger">{errors?.experience?.message}</p>}
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_qualification">TTO Qualification:</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control" id="tto_qualification" name="tto_qualification" required {...register("qualification")} />
                  {errors?.qualification && <p className="text-danger">{errors?.qualification?.message}</p>}
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_designation">TTO Designation:</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control" id="tto_designation" name="tto_designation" required {...register("designation")} />
                  {errors?.designation && <p className="text-danger">{errors?.designation?.message}</p>}
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_department">TTO Department:</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control" id="tto_department" name="tto_department" required {...register("department")} />
                  {errors?.department && <p className="text-danger">{errors?.department?.message}</p>}
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
              </div>
              {status !== "" && <p>{status}</p>}
          </form>
        </div>
      </div>
    </div>

    </>
  );
}

export default TTO_Form;
