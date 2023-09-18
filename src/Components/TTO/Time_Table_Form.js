import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

function Time_Table_Form() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const schema = yup.object().shape({
    time_table_block_id: yup
      .string()
      .required("Time Table Block ID is required"),
    time_table_id: yup.string().required("Time Table ID is required"),
    time_table_block_day: yup.string().required("Day is required"),
    time_table_block_time: yup.string().required("Time is required"),
    time_table_block_subject: yup.string().required("Subject is required"),
    time_table_block_faculty: yup.string().required("Faculty is required"),
    time_table_block_room_no: yup.string().required("Room Number is required"),
    time_table_block_department: yup
      .string()
      .required("Department is required"),
    time_table_block_semester: yup.string().required("Semester is required"),
    time_table_block_section: yup.string().required("Section is required"),
    time_table_block_section_no: yup
      .string()
      .required("Section Number is required"),
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
    reset();
  };

  const createTimeTableBlock = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/tto/addTimeTableBlockDetails",
        data
      );
      setStatus(response.data.message);
      setError("");
    } catch (err) {
      setError(err.message || "An error occurred.");
      setStatus("");
    }
  };

  useEffect(() => {
    if (data) {
      createTimeTableBlock();
    }
  }, [data]);

  useEffect(() => {
    setStatus("");
    setError("");
  }, [error]);

  return (
    <div className="col-xxl">
      <div className="card mb-4">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="mb-0">Time Table Block Form</h5>
          <small className="text-muted float-end">Default label</small>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="time_table_block_id"
              >
                Time Table Block ID:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="time_table_block_id"
                  name="time_table_block_id"
                  required
                  {...register("time_table_block_id")}
                />
                <p className="text-danger">
                  {errors?.time_table_block_id?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="time_table_id"
              >
                Time Table ID:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="time_table_id"
                  name="time_table_id"
                  required
                  {...register("time_table_id")}
                />
                <p className="text-danger">{errors?.time_table_id?.message}</p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="time_table_block_day"
              >
                Day:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="time_table_block_day"
                  name="time_table_block_day"
                  required
                  {...register("time_table_block_day")}
                />
                <p className="text-danger">
                  {errors?.time_table_block_day?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="time_table_block_time"
              >
                Time:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="time_table_block_time"
                  name="time_table_block_time"
                  required
                  {...register("time_table_block_time")}
                />
                <p className="text-danger">
                  {errors?.time_table_block_time?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="time_table_block_subject"
              >
                Subject:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="time_table_block_subject"
                  name="time_table_block_subject"
                  required
                  {...register("time_table_block_subject")}
                />
                <p className="text-danger">
                  {errors?.time_table_block_subject?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="time_table_block_faculty"
              >
                Faculty:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="time_table_block_faculty"
                  name="time_table_block_faculty"
                  required
                  {...register("time_table_block_faculty")}
                />
                <p className="text-danger">
                  {errors?.time_table_block_faculty?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="time_table_block_room_no"
              >
                Room Number:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="time_table_block_room_no"
                  name="time_table_block_room_no"
                  required
                  {...register("time_table_block_room_no")}
                />
                <p className="text-danger">
                  {errors?.time_table_block_room_no?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="time_table_block_department"
              >
                Department:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="time_table_block_department"
                  name="time_table_block_department"
                  required
                  {...register("time_table_block_department")}
                />
                <p className="text-danger">
                  {errors?.time_table_block_department?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="time_table_block_semester"
              >
                Semester:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="time_table_block_semester"
                  name="time_table_block_semester"
                  required
                  {...register("time_table_block_semester")}
                />
                <p className="text-danger">
                  {errors?.time_table_block_semester?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="time_table_block_section"
              >
                Section:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="time_table_block_section"
                  name="time_table_block_section"
                  required
                  {...register("time_table_block_section")}
                />
                <p className="text-danger">
                  {errors?.time_table_block_section?.message}
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <label
                className="col-sm-5 col-form-label"
                htmlFor="time_table_block_section_no"
              >
                Section Number:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="time_table_block_section_no"
                  name="time_table_block_section_no"
                  required
                  {...register("time_table_block_section_no")}
                />
                <p className="text-danger">
                  {errors?.time_table_block_section_no?.message}
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
            {status && <p>{status}</p>}
            {error && <p className="text-danger">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Time_Table_Form;
