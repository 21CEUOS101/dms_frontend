import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

function Placement_Company_Form() {
  const [data, setData] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();

  const schema = yup.object().shape({
    placement_company_id: yup.string().required("Company ID is required"),
    placement_company_name: yup.string().required("Company Name is required"),
    placement_company_email: yup.string().email().required("Company Email is required"),
    placement_company_mobile_number: yup.string().required("Mobile Number is required"),
    placement_company_address: yup.string().required("Company Address is required"),
    placement_company_city: yup.string().required("City is required"),
    placement_company_state: yup.string().required("State is required"),
    placement_company_pincode: yup.string().required("Pincode is required"),
    placement_company_country: yup.string().required("Country is required"),
    placement_company_website: yup.string().url().required("Website URL is required"),
    placement_company_type: yup.string().required("Company Type is required"),
    placement_company_description: yup.string().required("Company Description is required"),
    placement_company_job_role: yup.string().required("Job Roles are required"),
    placement_company_job_description: yup.string().required("Job Descriptions are required"),
    no_of_student_placed: yup.string().required("Number of Students Placed is required"),
});


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setData(data);
    setTimeout(() => {
      setData(null);
    }, 2000);
    reset();
  };

  const createPlacementCompanyDetails = async () => {
    await axios.post(`http://localhost:3001/tpo/createNewPlacementCompanyDetails`, data).then(
      (response) => {
        console.log(response);
        if (response?.data?.errors !== undefined) {
          setError(response?.data?._message);
        } else {
          setStatus(response?.data?.message);
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
  };

  useEffect(() => {
    if (data !== undefined && data !== null) {
      createPlacementCompanyDetails();
    }
  }, [data]);

  useEffect(() => {
    setStatus("");
  }, [error]);

  return (
    <div className="col-xxl grid place-items-center">
      <div className="card mb-4 h-auto w-fit">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="mb-0">Placement Company Details Form</h5>
          <small className="text-muted float-end">Default label</small>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="placement_company_id"
              >
                Company ID:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="placement_company_id"
                  name="placement_company_id"
                  required
                  {...register("placement_company_id")}
                />
                <p className="text-danger">
                  {errors?.placement_company_id?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="placement_company_name"
              >
                Company Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="placement_company_name"
                  name="placement_company_name"
                  required
                  {...register("placement_company_name")}
                />
                <p className="text-danger">
                  {errors?.placement_company_name?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="placement_company_email"
              >
                Company Email:
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="placement_company_email"
                  name="placement_company_email"
                  required
                  {...register("placement_company_email")}
                />
                <p className="text-danger">
                  {errors?.placement_company_email?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="placement_company_mobile_number"
              >
                Company Mobile Number:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control phone-mask"
                  id="placement_company_mobile_number"
                  name="placement_company_mobile_number"
                  required
                  {...register("placement_company_mobile_number")}
                />
                <p className="text-danger">
                  {errors?.placement_company_mobile_number?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="placement_company_address"
              >
                Company Address:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="placement_company_address"
                  name="placement_company_address"
                  required
                  {...register("placement_company_address")}
                />
                <p className="text-danger">
                  {errors?.placement_company_address?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="placement_company_city"
              >
                Company City:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="placement_company_city"
                  name="placement_company_city"
                  required
                  {...register("placement_company_city")}
                />
                <p className="text-danger">
                  {errors?.placement_company_city?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="placement_company_state"
              >
                Company State:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="placement_company_state"
                  name="placement_company_state"
                  required
                  {...register("placement_company_state")}
                />
                <p className="text-danger">
                  {errors?.placement_company_state?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="placement_company_pincode"
              >
                Company Pincode:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="placement_company_pincode"
                  name="placement_company_pincode"
                  required
                  {...register("placement_company_pincode")}
                />
                <p className="text-danger">
                  {errors?.placement_company_pincode?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="placement_company_country"
              >
                Company Country:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="placement_company_country"
                  name="placement_company_country"
                  required
                  {...register("placement_company_country")}
                />
                <p className="text-danger">
                  {errors?.placement_company_country?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="placement_company_website"
              >
                Company Website:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="placement_company_website"
                  name="placement_company_website"
                  required
                  {...register("placement_company_website")}
                />
                <p className="text-danger">
                  {errors?.placement_company_website?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="placement_company_type"
              >
                Company Type:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="placement_company_type"
                  name="placement_company_type"
                  required
                  {...register("placement_company_type")}
                />
                <p className="text-danger">
                  {errors?.placement_company_type?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="placement_company_description"
              >
                Company Description:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="placement_company_description"
                  name="placement_company_description"
                  required
                  {...register("placement_company_description")}
                />
                <p className="text-danger">
                  {errors?.placement_company_description?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="placement_company_job_role"
              >
                Job Roles:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="placement_company_job_role"
                  name="placement_company_job_role"
                  required
                  {...register("placement_company_job_role")}
                />
                <p className="text-danger">
                  {errors?.placement_company_job_role?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="placement_company_job_description"
              >
                Job Descriptions:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="placement_company_job_description"
                  name="placement_company_job_description"
                  required
                  {...register("placement_company_job_description")}
                />
                <p className="text-danger">
                  {errors?.placement_company_job_description?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="no_of_student_placed"
              >
                Number of Students Placed:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="no_of_student_placed"
                  name="no_of_student_placed"
                  required
                  {...register("no_of_student_placed")}
                />
                <p className="text-danger">
                  {errors?.no_of_student_placed?.message}
                </p>
              </div>
            </div>

            <div className="row justify-content-end">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
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

export default Placement_Company_Form;
