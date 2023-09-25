
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

function Marks_Entry_Form() {

  const role = localStorage.getItem("role");
  const [data, setData] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();

  const schema = yup.object().shape({
    student_id: yup.string().required('Student ID is required'),
    semester: yup.string().required('Semester is required'),
    batch_year: yup.string().required('Batch Year is required'),
    subject_code: yup.string().required('Subject Code is required'),
    subject_name: yup.string().required('Subject Name is required'),
    sessional1_marks: yup.string().required('Sessional 1 Marks are required'),
    sessional2_marks: yup.string().required('Sessional 2 Marks are required'),
    sessional3_marks: yup.string().required('Sessional 3 Marks are required'),
    sessional1_present: yup.string().required('Sessional 1 Present status is required'),
    sessional2_present: yup.string().required('Sessional 2 Present status is required'),
    sessional3_present: yup.string().required('Sessional 3 Present status is required'),
    sessional1_attendance: yup.string().required('Sessional 1 Attendance is required'),
    sessional2_attendance: yup.string().required('Sessional 2 Attendance is required'),
    sessional3_attendance: yup.string().required('Sessional 3 Attendance is required'),
    sessional1_total_attendance: yup.string().required('Sessional 1 Total Attendance is required'),
    sessional2_total_attendance: yup.string().required('Sessional 2 Total Attendance is required'),
    sessional3_total_attendance: yup.string().required('Sessional 3 Total Attendance is required'),
    sessional1_practical_attendance: yup.string().required('Sessional 1 Practical Attendance is required'),
    sessional2_practical_attendance: yup.string().required('Sessional 2 Practical Attendance is required'),
    sessional3_practical_attendance: yup.string().required('Sessional 3 Practical Attendance is required'),
    sessional1_total_practical_attendance: yup.string().required('Sessional 1 Total Practical Attendance is required'),
    sessional2_total_practical_attendance: yup.string().required('Sessional 2 Total Practical Attendance is required'),
    sessional3_total_practical_attendance: yup.string().required('Sessional 3 Total Practical Attendance is required'),
    block_marks: yup.string().required('Block Marks are required'),
    block_present: yup.string().required('Block Present status is required'),
    external_marks: yup.string().required('External Marks are required'),
    external_status: yup.string().required('External Status is required'),
    avg_sessional_marks: yup.string().required('Average Sessional Marks are required'),
    sessional_status: yup.string().required('Sessional Status is required'),
    avg_practical_marks: yup.string().required('Average Practical Marks are required'),
    practical_status: yup.string().required('Practical Status is required'),
    termwork_marks: yup.string().required('Termwork Marks are required'),
    termwork_status: yup.string().required('Termwork Status is required'),
    total_marks: yup.string().required('Total Marks are required'),
    max_total_marks: yup.string().required('Max Total Marks are required'),
    subject_points: yup.string().required('Subject Points are required'),
    subject_grade: yup.string().required('Subject Grade is required'),
    subject_credit: yup.string().required('Subject Credit is required'),
    subject_status: yup.string().required('Subject Status is required'),
    spi_credit: yup.string().required('SPI Credit is required'),
    spi_points: yup.string().required('SPI Points is required'),
    spi: yup.string().required('SPI is required'),
    cpi_credit: yup.string().required('CPI Credit is required'),
    cpi_points: yup.string().required('CPI Points is required'),
    cpi: yup.string().required('CPI is required'),
    result_status: yup.string().required('Result Status is required'),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm(
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

  const createMarks = async () => {
    console.log(data);
    await axios.patch(`http://localhost:3001/${role}/createStudentExamResult`, data).then((data) => {
      console.log(data?.data?.errors);
      console.log(data?.data?._message);
      console.log(data?.data.message);
      console.log(data);

      if (data?.data?.errors !== undefined) {
        setError(data?.data?._message);
      }
      else {
        setStatus(data?.data?.message);
        setTimeout(() => {
          setStatus("");
        }, 2000);
      }
    },
      (error) => {
        if (error.message === "Request failed with status code 404") {
          alert("You are not allowed to add Marks");
        }
        else {
          console.log(JSON.stringify(error));
        }
      }
    );
  }


  useEffect(() => {
    if (data !== undefined && data !== null) {
      createMarks();
    }
  }, [data]);

  useEffect(() => {
    setStatus("");
  }, [error]);


  return (
    <>
      <h1>Student Exam Result Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="student_id">Student ID:</label>
          <input type="text" id="student_id" name="student_id" required {...register("student_id")} />
        </div>
        <div>
          <label htmlFor="semester">Semester:</label>
          <input type="text" id="semester" name="semester" required {...register("semester")} />
        </div>
        <div>
          <label htmlFor="batch_year">Batch Year:</label>
          <input type="text" id="batch_year" name="batch_year" required {...register("batch_year")} />
        </div>
        <div>
          <label htmlFor="subject_code">Subject Code:</label>
          <input type="text" id="subject_code" name="subject_code" required {...register("subject_code")} />
        </div>
        <div>
          <label htmlFor="subject_name">Subject Name:</label>
          <input type="text" id="subject_name" name="subject_name" required {...register("subject_name")} />
        </div>
        <div>
          <label htmlFor="sessional1_marks">Sessional 1 Marks:</label>
          <input type="text" id="sessional1_marks" name="sessional1_marks" required {...register("sessional1_marks")} />
        </div>
        <div>
          <label htmlFor="sessional2_marks">Sessional 2 Marks:</label>
          <input type="text" id="sessional2_marks" name="sessional2_marks" required {...register("sessional2_marks")} />
        </div>
        <div>
          <label htmlFor="sessional3_marks">Sessional 3 Marks:</label>
          <input type="text" id="sessional3_marks" name="sessional3_marks" required {...register("sessional3_marks")} />
        </div>
        <div>
          <label htmlFor="sessional1_present">Sessional 1 Present:</label>
          <input type="text" id="sessional1_present" name="sessional1_present" required {...register("sessional1_present")} />
        </div>
        <div>
          <label htmlFor="sessional2_present">Sessional 2 Present:</label>
          <input type="text" id="sessional2_present" name="sessional2_present" required {...register("sessional2_present")} />
        </div>
        <div>
          <label htmlFor="sessional3_present">Sessional 3 Present:</label>
          <input type="text" id="sessional3_present" name="sessional3_present" required {...register("sessional3_present")} />
        </div>
        <div>
          <label htmlFor="sessional1_attendance">Sessional 1 Attendance:</label>
          <input type="text" id="sessional1_attendance" name="sessional1_attendance" required {...register("sessional1_attendance")} />
        </div>
        <div>
          <label htmlFor="sessional2_attendance">Sessional 2 Attendance:</label>
          <input type="text" id="sessional2_attendance" name="sessional2_attendance" required {...register("sessional2_attendance")} />
        </div>
        <div>
          <label htmlFor="sessional3_attendance">Sessional 3 Attendance:</label>
          <input type="text" id="sessional3_attendance" name="sessional3_attendance" required {...register("sessional3_attendance")} />
        </div>
        <div>
          <label htmlFor="sessional1_total_attendance">Sessional 1 Total Attendance:</label>
          <input type="text" id="sessional1_total_attendance" name="sessional1_total_attendance" required {...register("sessional1_total_attendance")} />
        </div>
        <div>
          <label htmlFor="sessional2_total_attendance">Sessional 2 Total Attendance:</label>
          <input type="text" id="sessional2_total_attendance" name="sessional2_total_attendance" required {...register("sessional2_total_attendance")} />
        </div>
        <div>
          <label htmlFor="sessional3_total_attendance">Sessional 3 Total Attendance:</label>
          <input type="text" id="sessional3_total_attendance" name="sessional3_total_attendance" required {...register("sessional3_total_attendance")} />
        </div>
        <div>
          <label htmlFor="sessional1_practical_attendance">Sessional 1 Practical Attendance:</label>
          <input type="text" id="sessional1_practical_attendance" name="sessional1_practical_attendance" required {...register("sessional1_practical_attendance")} />
        </div>
        <div>
          <label htmlFor="sessional2_practical_attendance">Sessional 2 Practical Attendance:</label>
          <input type="text" id="sessional2_practical_attendance" name="sessional2_practical_attendance" required {...register("sessional2_practical_attendance")} />
        </div>
        <div>
          <label htmlFor="sessional3_practical_attendance">Sessional 3 Practical Attendance:</label>
          <input type="text" id="sessional3_practical_attendance" name="sessional3_practical_attendance" required {...register("sessional3_practical_attendance")} />
        </div>
        <div>
          <label htmlFor="sessional1_total_practical_attendance">Sessional 1 Total Practical Attendance:</label>
          <input type="text" id="sessional1_total_practical_attendance" name="sessional1_total_practical_attendance" required {...register("sessional1_total_practical_attendance")} />
        </div>
        <div>
          <label htmlFor="sessional2_total_practical_attendance">Sessional 2 Total Practical Attendance:</label>
          <input type="text" id="sessional2_total_practical_attendance" name="sessional2_total_practical_attendance" required {...register("sessional2_total_practical_attendance")} />
        </div>
        <div>
          <label htmlFor="sessional3_total_practical_attendance">Sessional 3 Total Practical Attendance:</label>
          <input type="text" id="sessional3_total_practical_attendance" name="sessional3_total_practical_attendance" required {...register("sessional3_total_practical_attendance")} />
        </div>
        <div>
          <label htmlFor="block_marks">Block Marks:</label>
          <input type="text" id="block_marks" name="block_marks" required {...register("block_marks")} />
        </div>
        <div>
          <label htmlFor="block_present">Block Present:</label>
          <input type="text" id="block_present" name="block_present" required {...register("block_present")} />
        </div>
        <div>
          <label htmlFor="external_marks">External Marks:</label>
          <input type="text" id="external_marks" name="external_marks" required {...register("external_marks")} />
        </div>
        <div>
          <label htmlFor="external_status">External Status:</label>
          <input type="text" id="external_status" name="external_status" required {...register("external_status")} />
        </div>
        <div>
          <label htmlFor="avg_sessional_marks">Average Sessional Marks:</label>
          <input type="text" id="avg_sessional_marks" name="avg_sessional_marks" required {...register("avg_sessional_marks")} />
        </div>
        <div>
          <label htmlFor="sessional_status">Sessional Status:</label>
          <input type="text" id="sessional_status" name="sessional_status" required {...register("sessional_status")} />
        </div>
        <div>
          <label htmlFor="avg_practical_marks">Average Practical Marks:</label>
          <input type="text" id="avg_practical_marks" name="avg_practical_marks" required {...register("avg_practical_marks")} />
        </div>
        <div>
          <label htmlFor="practical_status">Practical Status:</label>
          <input type="text" id="practical_status" name="practical_status" required {...register("practical_status")} />
        </div>
        <div>
          <label htmlFor="termwork_marks">Termwork Marks:</label>
          <input type="text" id="termwork_marks" name="termwork_marks" required {...register("termwork_marks")} />
        </div>
        <div>
          <label htmlFor="termwork_status">Termwork Status:</label>
          <input type="text" id="termwork_status" name="termwork_status" required {...register("termwork_status")} />
        </div>
        <div>
          <label htmlFor="total_marks">Total Marks:</label>
          <input type="text" id="total_marks" name="total_marks" required {...register("total_marks")} />
        </div>
        <div>
          <label htmlFor="max_total_marks">Max Total Marks:</label>
          <input type="text" id="max_total_marks" name="max_total_marks" required {...register("max_total_marks")} />
        </div>
        <div>
          <label htmlFor="subject_points">Subject Points:</label>
          <input type="text" id="subject_points" name="subject_points" required {...register("subject_points")} />
        </div>
        <div>
          <label htmlFor="subject_grade">Subject Grade:</label>
          <input type="text" id="subject_grade" name="subject_grade" required {...register("subject_grade")} />
        </div>
        <div>
          <label htmlFor="subject_credit">Subject Credit:</label>
          <input type="text" id="subject_credit" name="subject_credit" required {...register("subject_credit")} />
        </div>
        <div>
          <label htmlFor="subject_status">Subject Status:</label>
          <input type="text" id="subject_status" name="subject_status" required {...register("subject_status")} />
        </div>
        <div>
          <label htmlFor="spi_credit">SPI Credit:</label>
          <input type="text" id="spi_credit" name="spi_credit" required {...register("spi_credit")} />
        </div>
        <div>
          <label htmlFor="spi_points">SPI Points:</label>
          <input type="text" id="spi_points" name="spi_points" required {...register("spi_points")} />
        </div>
        <div>
          <label htmlFor="spi">SPI:</label>
          <input type="text" id="spi" name="spi" required {...register("spi")} />
        </div>
        <div>
          <label htmlFor="cpi_credit">CPI Credit:</label>
          <input type="text" id="cpi_credit" name="cpi_credit" required {...register("cpi_credit")} />
        </div>
        <div>
          <label htmlFor="cpi_points">CPI Points:</label>
          <input type="text" id="cpi_points" name="cpi_points" required {...register("cpi_points")} />
        </div>
        <div>
          <label htmlFor="cpi">CPI:</label>
          <input type="text" id="cpi" name="cpi" required {...register("cpi")} />
        </div>
        <div>
          <label htmlFor="result_status">Result Status:</label>
          <input type="text" id="result_status" name="result_status" required {...register("result_status")} />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  )
}

export default Marks_Entry_Form