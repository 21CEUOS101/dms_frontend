import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Add_Student_Guardian = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});
  const schema = yup.object().shape({
    student_id: yup.string().required("Student ID is required"),
    father_name: yup.string().required("Father's Name is required"),
    father_occupation: yup.string(),
    organization_name: yup.string(),
    annual_income: yup.string(),
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
          <label className="col-sm-5 col-form-label" htmlFor="father_name">
            Father's Name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="father_name"
              name="father_name"
              required
              {...register("father_name")}
            />
            <p className="text-danger">{errors?.father_name?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label
            className="col-sm-5 col-form-label"
            htmlFor="father_occupation"
          >
            Father's Occupation:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="father_occupation"
              name="father_occupation"
              {...register("father_occupation")}
            />
            <p className="text-danger">{errors?.father_occupation?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label
            className="col-sm-5 col-form-label"
            htmlFor="organization_name"
          >
            Organization Name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="organization_name"
              name="organization_name"
              {...register("organization_name")}
            />
            <p className="text-danger">{errors?.organization_name?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="annual_income">
            Annual Income:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="annual_income"
              name="annual_income"
              {...register("annual_income")}
            />
            <p className="text-danger">{errors?.annual_income?.message}</p>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Add_Student_Guardian
