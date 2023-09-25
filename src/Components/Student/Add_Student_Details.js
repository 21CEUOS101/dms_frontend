import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Add_Student_Details = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});
  const schema = yup.object().shape({
    reporting_date: yup.string().required("Reporting Date is required"),
    admission_type: yup.string().required("Admission Type is required"),
    first_name: yup.string().required("First Name is required").min(2),
    middle_name: yup.string(),
    last_name: yup.string().required("Last Name is required").min(2),
    name_format: yup.string().required("Name Format is required"),
    full_name: yup.string().required("Full Name is required"),
    gender: yup.string().required("Gender is required"),
    date_of_birth: yup.string().required("Date of Birth is required"),
    birth_place: yup.string().required("Birth Place is required"),
    ACPC_seat_allotment_date: yup.string(),
    isD2D: yup.boolean().required("Is D2D is required"),
    enrollment_year: yup.string().required("Enrollment Year is required"),
    degree: yup.string().required("Degree is required"),
    qualifying_exam_roll_number: yup
      .string()
      .required("Qualifying Exam Roll Number is required"),
    session_number: yup.string().required("Session Number is required"),
    batch_year: yup.string().required("Batch Year is required"),
    student_id: yup.string().required("Student ID is required").min(5),
    old_student_id: yup.string(),
    merit_rank: yup.string().required("Merit Rank is required"),
    cast_category: yup.string().required("Cast Category is required"),
    student_email: yup.string().required("Student Email is required").email(),
    student_roll_number: yup
      .string()
      .required("Student Roll Number is required"),
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
  };

  useEffect(() => {
    console.log(formData)
    onSubmit(formData);
  }, [formData])
  

  return (
    <div className="col-xxl">
      <div className="card mb-4 h-auto w-fit">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="reporting_date">
            Reporting Date:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="reporting_date"
              name="reporting_date"
              required
              {...register("reporting_date")}
            />
            <p className="text-danger">{errors?.reporting_date?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="admission_type">
            Admission Type:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="admission_type"
              name="admission_type"
              required
              {...register("admission_type")}
            />
            <p className="text-danger">{errors?.admission_type?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="first_name">
            First Name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="first_name"
              name="first_name"
              required
              {...register("first_name")}
            />
            <p className="text-danger">{errors?.first_name?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="middle_name">
            Middle Name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="middle_name"
              name="middle_name"
              {...register("middle_name")}
            />
            <p className="text-danger">{errors?.middle_name?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="last_name">
            Last Name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="last_name"
              name="last_name"
              required
              {...register("last_name")}
            />
            <p className="text-danger">{errors?.last_name?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="name_format">
            Name Format:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name_format"
              name="name_format"
              required
              {...register("name_format")}
            />
            <p className="text-danger">{errors?.name_format?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="full_name">
            Full Name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="full_name"
              name="full_name"
              required
              {...register("full_name")}
            />
            <p className="text-danger">{errors?.full_name?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="gender">
            Gender:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="gender"
              name="gender"
              required
              {...register("gender")}
            />
            <p className="text-danger">{errors?.gender?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="date_of_birth">
            Date of Birth:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="date_of_birth"
              name="date_of_birth"
              required
              {...register("date_of_birth")}
            />
            <p className="text-danger">{errors?.date_of_birth?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="birth_place">
            Birth Place:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="birth_place"
              name="birth_place"
              required
              {...register("birth_place")}
            />
            <p className="text-danger">{errors?.birth_place?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label
            className="col-sm-5 col-form-label"
            htmlFor="ACPC_seat_allotment_date"
          >
            ACPC Seat Allotment Date:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="ACPC_seat_allotment_date"
              name="ACPC_seat_allotment_date"
              {...register("ACPC_seat_allotment_date")}
            />
            <p className="text-danger">
              {errors?.ACPC_seat_allotment_date?.message}
            </p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="isD2D">
            Is D2D:
          </label>
          <div className="col-sm-10">
            <input
              type="checkbox"
              className="form-check-input"
              id="isD2D"
              name="isD2D"
              // required
              {...register("isD2D")}
            />
            <p className="text-danger">{errors?.isD2D?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="enrollment_year">
            Enrollment Year:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="enrollment_year"
              name="enrollment_year"
              required
              {...register("enrollment_year")}
            />
            <p className="text-danger">{errors?.enrollment_year?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="degree">
            Degree:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="degree"
              name="degree"
              required
              {...register("degree")}
            />
            <p className="text-danger">{errors?.degree?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label
            className="col-sm-5 col-form-label"
            htmlFor="qualifying_exam_roll_number"
          >
            Qualifying Exam Roll Number:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="qualifying_exam_roll_number"
              name="qualifying_exam_roll_number"
              required
              {...register("qualifying_exam_roll_number")}
            />
            <p className="text-danger">
              {errors?.qualifying_exam_roll_number?.message}
            </p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="session_number">
            Session Number:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="session_number"
              name="session_number"
              required
              {...register("session_number")}
            />
            <p className="text-danger">{errors?.session_number?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="batch_year">
            Batch Year:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="batch_year"
              name="batch_year"
              required
              {...register("batch_year")}
            />
            <p className="text-danger">{errors?.batch_year?.message}</p>
          </div>
        </div>

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
          <label className="col-sm-5 col-form-label" htmlFor="old_student_id">
            Old Student ID:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="old_student_id"
              name="old_student_id"
              {...register("old_student_id")}
            />
            <p className="text-danger">{errors?.old_student_id?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="merit_rank">
            Merit Rank:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="merit_rank"
              name="merit_rank"
              required
              {...register("merit_rank")}
            />
            <p className="text-danger">{errors?.merit_rank?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="cast_category">
            Cast Category:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="cast_category"
              name="cast_category"
              required
              {...register("cast_category")}
            />
            <p className="text-danger">{errors?.cast_category?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-5 col-form-label" htmlFor="student_email">
            Student Email:
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="student_email"
              name="student_email"
              required
              {...register("student_email")}
            />
            <p className="text-danger">{errors?.student_email?.message}</p>
          </div>
        </div>

        <div className="row mb-3">
          <label
            className="col-sm-5 col-form-label"
            htmlFor="student_roll_number"
          >
            Student Roll Number:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="student_roll_number"
              name="student_roll_number"
              required
              {...register("student_roll_number")}
            />
            <p className="text-danger">
              {errors?.student_roll_number?.message}
            </p>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Add_Student_Details;
