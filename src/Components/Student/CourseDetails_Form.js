import React, { useState, useEffect } from "react";
import "../form.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

function Course_Form() {
  const [data, setData] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();

  const schema = yup.object().shape({
    subject_code: yup.string().required("Subject Code is required"),
    subject_name: yup.string().required("Subject Name is required"),
    subject_credit: yup.number().required("Subject Credit is required"),
    subject_alias: yup.string().required("Subject Alias is required"),
    semester: yup.number().required("Semester is required"),
    theory_min_passing_marks: yup
      .number()
      .required("Theory Min Passing Marks is required"),
    theory_min_passing_marks2: yup
      .number()
      .required("Theory Min Passing Marks 2 is required"),
    theory_total_marks: yup.string().required("Theory Total Marks is required"),
    sessional_min_passing_marks: yup
      .number()
      .required("Sessional Min Passing Marks is required"),
    sessional_min_passing_marks2: yup
      .number()
      .required("Sessional Min Passing Marks 2 is required"),
    sessional_total_marks: yup
      .number()
      .required("Sessional Total Marks is required"),
    practical_min_passing_marks: yup
      .number()
      .required("Practical Min Passing Marks is required"),
    practical_min_passing_marks2: yup
      .number()
      .required("Practical Min Passing Marks 2 is required"),
    practical_total_marks: yup
      .number()
      .required("Practical Total Marks is required"),
    isElective: yup.string().required("Is Elective is required").oneOf(["Yes", "No"])
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
    console.log(data);
    setData(data);
    setTimeout(() => {
      setData(null);
    }, 2000);
    reset();
  };

  const createSubject = async () => {
    await axios.post(`https://dms2901.onrender.com/admin/createCourseDetails`, data).then(
      (data) => {
        console.log("success");
        console.log(data?.data?.message?._message);
        console.log(data?.data);

        if (data?.data?.message?.errors !== undefined) {
          setError(data?.data?.message?._message);
        }
        else {
          setStatus(data?.data?.message);
          setTimeout(() => {
            setStatus("");
          }, 2000);
        }
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  };

  useEffect(() => {
    if (data !== undefined && data !== null) {
      createSubject();
    }
  }, [data]);

  useEffect(() => {
    setStatus("");
  }, [error]);

  return (
    <div className="col-xxl grid place-items-center">
      <div className="card mb-4 h-auto w-fit" style={{ width: '80%', padding: '20px' }}>
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="mb-0">Course Details Form</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="subject_code">Subject Code</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="subject_code" name="subject_code" required {...register('subject_code')} />
                <p className="text-danger">{errors?.subject_code?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="subject_name">Subject Name</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="subject_name" name="subject_name" required {...register('subject_name')} />
                <p className="text-danger">{errors?.subject_name?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="subject_credit">Subject Credit</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="subject_credit" name="subject_credit" required {...register('subject_credit')} />
                <p className="text-danger">{errors?.subject_credit?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="subject_alias">Subject Alias</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="subject_alias" name="subject_alias" required {...register('subject_alias')} />
                <p className="text-danger">{errors?.subject_alias?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="semester">Semester</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="semester" name="semester" required {...register('semester')} />
                <p className="text-danger">{errors?.semester?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="theory_min_passing_marks">Theory Min Passing Marks</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="theory_min_passing_marks" name="theory_min_passing_marks" required {...register('theory_min_passing_marks')} />
                <p className="text-danger">{errors?.theory_min_passing_marks?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="theory_min_passing_marks2">Theory Min Passing Marks 2</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="theory_min_passing_marks2" name="theory_min_passing_marks2" required {...register('theory_min_passing_marks2')} />
                <p className="text-danger">{errors?.theory_min_passing_marks2?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="theory_total_marks">Theory Total Marks</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="theory_total_marks" name="theory_total_marks" required {...register('theory_total_marks')} />
                <p className="text-danger">{errors?.theory_total_marks?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="sessional_min_passing_marks">Sessional Min Passing Marks</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="sessional_min_passing_marks" name="sessional_min_passing_marks" required {...register('sessional_min_passing_marks')} />
                <p className="text-danger">{errors?.sessional_min_passing_marks?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="sessional_min_passing_marks2">Sessional Min Passing Marks 2</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="sessional_min_passing_marks2" name="sessional_min_passing_marks2" required {...register('sessional_min_passing_marks2')} />
                <p className="text-danger">{errors?.sessional_min_passing_marks2?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="sessional_total_marks">Sessional Total Marks</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="sessional_total_marks" name="sessional_total_marks" required {...register('sessional_total_marks')} />
                <p className="text-danger">{errors?.sessional_total_marks?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="practical_min_passing_marks">Practical Minimum Passing Marks</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="practical_min_passing_marks" name="practical_min_passing_marks" required {...register('practical_min_passing_marks')} />
                <p className="text-danger">{errors?.practical_min_passing_marks?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="practical_min_passing_marks2">Practical Minimum Passing Marks 2</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="practical_min_passing_marks2" name="practical_min_passing_marks2" required {...register('practical_min_passing_marks2')} />
                <p className="text-danger">{errors?.practical_min_passing_marks2?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="practical_total_marks">Practical Total Marks</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="practical_total_marks" name="practical_total_marks" required {...register('practical_total_marks')} />
                <p className="text-danger">{errors?.practical_total_marks?.message}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="isElective">Is Elective</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="isElective" name="isElective" required {...register('isElective')} />
                <p className="text-danger">{errors?.isElective?.message}</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-8">
                <button type="submit" className="btn btn-primary">Submit</button>
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

export default Course_Form;
