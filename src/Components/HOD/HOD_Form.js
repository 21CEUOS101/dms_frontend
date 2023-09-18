import React, { useState , useEffect} from 'react'
import '../form.css';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

function HOD_Form() {

    const [data, setData] = useState();
    const [status, setStatus] = useState();
    const [error, setError] = useState();
  
    const schema = yup.object().shape({
        hod_id: yup.string().required("ID is required").min(5),
        hod_name: yup.string().required("Name is required").min(5),
        hod_email: yup.string().email().required("Email is required"),
        hod_mobile_number: yup.string().transform(
        (value) => (isNaN(value) ? undefined : value)
        ).required("Mobile Number is required").min(10).max(10),
        hod_experience: yup.number().required("Experience is required").positive().integer(),
        hod_qualification: yup.string().required("Qualification is required"),
        hod_designation: yup.string().required("Designation is required"),
        hod_department: yup.string().required("Department is required"),
    });
  
    const { register, handleSubmit, formState: { errors } , reset } = useForm(
      {
        resolver: yupResolver(schema),
      }
    );
    console.log(data);
    const onSubmit = (data) => {
        console.log(data);
        setData(data);
        setTimeout(() => {
            setData(null);
        }, 2000);
        reset();
    }
  
    const createHOD = async() => {
      await axios.post(`http://localhost:3001/hod/addNewHOD`, data).then((data) => {
        console.log(data?.data?.message?.errors);
        console.log(data?.data?.message?._message);
          console.log(data?.data.message);
          console.log(data);
  
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
          console.log(error);
          setError(error);
      }
      );
    }
  
  
    useEffect(() => {
      if(data !== undefined && data !== null)
      {
        createHOD();
      }
    }, [data]);

    useEffect(() => {
        setStatus("");
    }, [error]);


  return (
    <div class="col-xxl">
        <div class="card mb-4">
            <div class="card-header d-flex align-items-center justify-content-between">
                <h5 class="mb-0">HODDetails Form</h5>
                <small class="text-muted float-end">Default label</small>
            </div>
            <div class="card-body">
                <form onSubmit={handleSubmit(onSubmit)} method="POST">
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label" for="hod_id">HOD ID:</label>
                        <div class="col-sm-10">
                              <input type="text" class="form-control" id="hod_id" name="hod_id" required {...register("hod_id")} />
                              <p className='text-danger'>{errors?.hod_id?.message}</p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label" for="hod_name">HOD Name:</label>
                        <div class="col-sm-10">
                              <input type="text" class="form-control" id="hod_name" name="hod_name" required {...register("hod_name")} />
                                <p className='text-danger'>{errors?.hod_name?.message}</p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label" for="hod_email">HOD Email:</label>
                        <div class="col-sm-10">
                              <input type="email" class="form-control" id="hod_email" name="hod_email" required {...register("hod_email")} />
                                <p className='text-danger'>{errors?.hod_email?.message}</p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label" for="hod_mobile_number">HOD Mobile Number:</label>
                        <div class="col-sm-10">
                              <input type="tel" class="form-control phone-mask" id="hod_mobile_number" name="hod_mobile_number" required {...register("hod_mobile_number")} />
                                <p className='text-danger'>{errors?.hod_mobile_number?.message}</p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label" for="hod_experience">HOD Experience:</label>
                        <div class="col-sm-10">
                              <input type="number" class="form-control" id="hod_experience" name="hod_experience" required {...register("hod_experience")} />
                                <p className='text-danger'>{errors?.hod_experience?.message}</p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label" for="hod_qualification">HOD Qualification:</label>
                        <div class="col-sm-10">
                              <input type="text" class="form-control" id="hod_qualification" name="hod_qualification" required {...register("hod_qualification")} />
                                <p className='text-danger'>{errors?.hod_qualification?.message}</p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label" for="hod_designation">HOD Designation:</label>
                        <div class="col-sm-10">
                              <input type="text" class="form-control" id="hod_designation" name="hod_designation" required {...register("hod_designation")} />
                                <p className='text-danger'>{errors?.hod_designation?.message}</p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label" for="hod_department">HOD Department:</label>
                        <div class="col-sm-10">
                              <input type="text" class="form-control" id="hod_department" name="hod_department" required {...register("hod_department")} />
                                <p className='text-danger'>{errors?.hod_department?.message}</p>
                        </div>
                    </div>
                    <div class="row justify-content-end">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                      </div>
                        {status !== undefined && <p>{status}</p>}
                        {error !== undefined && <p className="text-danger">{error}</p>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default HOD_Form
