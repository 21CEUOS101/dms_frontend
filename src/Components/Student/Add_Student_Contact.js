import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Add_Student_Contact = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});
  const schema = yup.object().shape({
    student_id: yup.string().required("Student ID is required"),
    address_line_1: yup.string().required("Address Line 1 is required"),
    address_line_2: yup.string(),
    address_line_3: yup.string(),
    city: yup.string().required("City is required"),
    state: yup.string(),
    pincode: yup.string().required("Pincode is required"),
    country: yup.string().required("Country is required"),
    mobile_number: yup.string().required("Mobile Number is required"),
    alternate_mobile_number: yup.string(),
    email: yup.string().required("Email is required").email(),
    local_address_line_1: yup.string().required("Local Address Line 1 is required"),
    local_address_line_2: yup.string(),
    local_address_line_3: yup.string(),
    local_city: yup.string().required("Local City is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
    onSubmit(data);
  };

  return (
    <div className="col-xxl">
      <div className="card mb-4 h-auto w-fit">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="student_id">
            Student ID:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="student_id"
              name="student_id"
              required
              {...register("student_id")}
            />
            <p className="text-danger">{errors?.student_id?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="address_line_1">
            Address Line 1:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="address_line_1"
              name="address_line_1"
              required
              {...register("address_line_1")}
            />
            <p className="text-danger">{errors?.address_line_1?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="address_line_2">
            Address Line 2:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="address_line_2"
              name="address_line_2"
              {...register("address_line_2")}
            />
            <p className="text-danger">{errors?.address_line_2?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="address_line_3">
            Address Line 3:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="address_line_3"
              name="address_line_3"
              {...register("address_line_3")}
            />
            <p className="text-danger">{errors?.address_line_3?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="city">
            City:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              required
              {...register("city")}
            />
            <p className="text-danger">{errors?.city?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="state">
            State:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              {...register("state")}
            />
            <p className="text-danger">{errors?.state?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="pincode">
            Pincode:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="pincode"
              name="pincode"
              required
              {...register("pincode")}
            />
            <p className="text-danger">{errors?.pincode?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="country">
            Country:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              required
              {...register("country")}
            />
            <p className="text-danger">{errors?.country?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label
            className="col-sm-5 col-form-label"
            htmlFor="mobile_number"
          >
            Mobile Number:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="mobile_number"
              name="mobile_number"
              required
              {...register("mobile_number")}
            />
            <p className="text-danger">{errors?.mobile_number?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label
            className="col-sm-5 col-form-label"
            htmlFor="alternate_mobile_number"
          >
            Alternate Mobile Number:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="alternate_mobile_number"
              name="alternate_mobile_number"
              {...register("alternate_mobile_number")}
            />
            <p className="text-danger">
              {errors?.alternate_mobile_number?.message}
            </p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
              {...register("email")}
            />
                        <p className="text-danger">{errors?.email?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label
            className="col-sm-5 col-form-label"
            htmlFor="local_address_line_1"
          >
            Local Address Line 1:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="local_address_line_1"
              name="local_address_line_1"
              required
              {...register("local_address_line_1")}
            />
            <p className="text-danger">
              {errors?.local_address_line_1?.message}
            </p>
          </div>
        </div>

        <div className="row mb-3">
          <label
            className="col-sm-5 col-form-label"
            htmlFor="local_address_line_2"
          >
            Local Address Line 2:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="local_address_line_2"
              name="local_address_line_2"
              {...register("local_address_line_2")}
            />
            <p className="text-danger">
              {errors?.local_address_line_2?.message}
            </p>
          </div>
        </div>

        <div className="row mb-3">
          <label
            className="col-sm-5 col-form-label"
            htmlFor="local_address_line_3"
          >
            Local Address Line 3:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="local_address_line_3"
              name="local_address_line_3"
              {...register("local_address_line_3")}
            />
            <p className="text-danger">
              {errors?.local_address_line_3?.message}
            </p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="local_city">
            Local City:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="local_city"
              name="local_city"
              required
              {...register("local_city")}
            />
            <p className="text-danger">{errors?.local_city?.message}</p>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Add_Student_Contact
