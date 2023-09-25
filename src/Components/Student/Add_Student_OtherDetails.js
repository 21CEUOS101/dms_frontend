import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Add_Student_OtherDetails = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});
  const schema = yup.object().shape({
    student_id: yup.string().required("Student ID is required"),
    sub_cast: yup.string(),
    marital_status: yup.string(),
    mother_tongue: yup.string(),
    nationality: yup.string(),
    blood_group: yup.string(),
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
          <label className="col-sm-5 col-form-label" htmlFor="sub_cast">
            Sub Cast:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="sub_cast"
              name="sub_cast"
              {...register("sub_cast")}
            />
            <p className="text-danger">{errors?.sub_cast?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="marital_status">
            Marital Status:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="marital_status"
              name="marital_status"
              {...register("marital_status")}
            />
            <p className="text-danger">{errors?.marital_status?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="mother_tongue">
            Mother Tongue:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="mother_tongue"
              name="mother_tongue"
              {...register("mother_tongue")}
            />
            <p className="text-danger">{errors?.mother_tongue?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="nationality">
            Nationality:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="nationality"
              name="nationality"
              {...register("nationality")}
            />
            <p className="text-danger">{errors?.nationality?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="blood_group">
            Blood Group:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="blood_group"
              name="blood_group"
              {...register("blood_group")}
            />
            <p className="text-danger">{errors?.blood_group?.message}</p>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Add_Student_OtherDetails;