import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Add_Student_AcademicInfo = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});
  const schema = yup.object().shape({
    student_id: yup.string().required("Student ID is required"),
    medium_of_exam: yup
      .array()
      .of(yup.string().required("Medium of Exam is required")),
    seat_number: yup.array().of(yup.string().required("Seat Number is required")),
    passing_year: yup
      .array()
      .of(yup.string().required("Passing Year is required")),
    passing_month: yup
      .array()
      .of(yup.string().required("Passing Month is required")),
    board: yup.array().of(yup.string().required("Board is required")),
    institute_name: yup
      .array()
      .of(yup.string().required("Institute Name is required")),
    result_type: yup.array().of(yup.string().required("Result Type is required")),
    result: yup.array().of(yup.string().required("Result is required")),
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
            <label className="col-sm-5 col-form-label" htmlFor="medium_of_exam">
              Medium of Exam:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="medium_of_exam"
                name="medium_of_exam"
                required
                {...register("medium_of_exam")}
              />
              <p className="text-danger">{errors?.medium_of_exam?.message}</p>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-5 col-form-label" htmlFor="seat_number">
              Seat Number:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="seat_number"
                name="seat_number"
                required
                {...register("seat_number")}
              />
              <p className="text-danger">{errors?.seat_number?.message}</p>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-5 col-form-label" htmlFor="passing_year">
              Passing Year:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="passing_year"
                name="passing_year"
                required
                {...register("passing_year")}
              />
              <p className="text-danger">{errors?.passing_year?.message}</p>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-5 col-form-label" htmlFor="passing_month">
              Passing Month:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="passing_month"
                name="passing_month"
                required
                {...register("passing_month")}
              />
              <p className="text-danger">{errors?.passing_month?.message}</p>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-5 col-form-label" htmlFor="board">
              Board:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="board"
                name="board"
                required
                {...register("board")}
              />
              <p className="text-danger">{errors?.board?.message}</p>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-5 col-form-label" htmlFor="institute_name">
              Institute Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="institute_name"
                name="institute_name"
                required
                {...register("institute_name")}
              />
              <p className="text-danger">{errors?.institute_name?.message}</p>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-5 col-form-label" htmlFor="result_type">
              Result Type:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="result_type"
                name="result_type"
                required
                {...register("result_type")}
              />
              <p className="text-danger">{errors?.result_type?.message}</p>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-5 col-form-label" htmlFor="result">
              Result:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="result"
                name="result"
                required
                {...register("result")}
              />
              <p className="text-danger">{errors?.result?.message}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add_Student_AcademicInfo
