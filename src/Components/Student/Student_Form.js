import React, { useEffect, useState } from 'react';
import './form.css';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { Email } from '../Email';

function Student_Form() {

  const role = localStorage.getItem("role");
  const [data, setData] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();

  const schema = yup.object().shape({
    student_id: yup.string().required("Student id is required").min(5),
    reporting_date: yup.string().required().test(
      'is-valid-date',
      'Invalid date format',
      (value) => {
        // Define a regular expression for the "YYYY-MM-DD" format
        const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateFormatRegex.test(value)) {
          return false; // Invalid format
        }
        return true;
      }
    ),
  admissionTypeSchema : yup.string().required('Admission type is required'),
  firstNameSchema : yup.string().required('First Name is required'),
  middleNameSchema : yup.string().required('Middle Name is required'),
  lastNameSchema : yup.string().required('Last Name is required'),
  nameFormatSchema : yup.string().required('Name Format required'),
  fullNameSchema : yup.string().required('Full Name is required'),
  genderSchema : yup.string().required('Gender is required'),
  dateOfBirthSchema : yup.string().required('Date of Birth is required'),
  birthPlaceSchema : yup.string().required('Birth Place is required'),
  ACPCSeatAllotmentDateSchema : yup.string().required('ACPC Seat Allotment Date is required'),
  isD2DSchema : yup.boolean().required('isD2D is required'),
  enrollmentYearSchema : yup.string().required('Enrollment Year is required'),
  degreeSchema : yup.string().required('Degree is required'),
  qualifyingExamRollNumberSchema : yup.string().required('Qualifying Exam Roll Number is required'),
  sessionNumberSchema : yup.string().required('Session Number is required'),
  batchYearSchema : yup.string().required('Batch Year is required'),
  oldStudentIdSchema : yup.string().required('Old Student ID is required'),
  meritRankSchema : yup.string().required('Merit Rank is required'),
  castCategorySchema : yup.string().required('Cast Category is required'),
  studentEmailSchema : yup.string().required('Student Email is required'),
  studentRollNumberSchema : yup.string().required('Student Roll Number is required'),
});

  const { register, handleSubmit, formState: { errors } , reset } = useForm(
    {
      // resolver: yupResolver(schema),
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

  const createStudent = async() => {
    await axios.post(`http://localhost:3001/${role}/createStudent`, data).then((data) => {
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
        const emailData = {
          from_name : role,
          to_name: data?.data?.id,
          from_email: localStorage.getItem("email"),
          to_email: data?.data?.email,
          message: `${data?.data?.password}`
        };
        Email(emailData);
      }
    }, 
    (error) => {
      if (error.message === "Request failed with status code 404")
      {
        alert("You are not allowed to add HOD Details");
      }
      else
      {
        console.log(JSON.stringify(error));
      }
    }
    );
  }


  useEffect(() => {
    if(data !== undefined && data !== null)
    {
      createStudent();
    }
  }, [data]);

  useEffect(() => {
      setStatus("");
  }, [error]);



  return (
    <div className='grid grid-cols-3 gap-20'>
      <div className='bg-slate-50 px-10 py-5 h-auto border-2 rounded'>
        <h1 className='text-base font-semibold leading-7 text-gray-900'>Student Details Form</h1>
        <form action="/submit" method="POST"  className="space-y-12">
          <div>
            {/* Field htmlFor Reporting Date */}
            <label htmlFor="reporting_date">Reporting Date:</label>
            <input type="text" id="reporting_date" name="reporting_date" required />
          </div>
          <div>
            {/* Field htmlFor Admission Type */}
            <label htmlFor="admission_type">Admission Type:</label>
            <input type="text" id="admission_type" name="admission_type" required />
          </div>
          <div>
            {/* Field htmlFor First Name */}
            <label htmlFor="first_name">First Name:</label>
            <input type="text" id="first_name" name="first_name" required />
          </div>
          <div>
            {/* Field htmlFor Middle Name */}
            <label htmlFor="middle_name">Middle Name:</label>
            <input type="text" id="middle_name" name="middle_name" />
          </div>
          <div>
            {/* Field htmlFor Last Name */}
            <label htmlFor="last_name">Last Name:</label>
            <input type="text" id="last_name" name="last_name" required />
          </div>
          <div>
            {/* Field htmlFor Name Format */}
            <label htmlFor="name_format">Name Format:</label>
            <input type="text" id="name_format" name="name_format" required />
          </div>
          <div>
            {/* Field htmlFor Gender */}
            <label htmlFor="gender">Gender:</label>
            <input type="text" id="gender" name="gender" required />
          </div>
          <div>
            {/* Field htmlFor Date of Birth */}
            <label htmlFor="date_of_birth">Date of Birth:</label>
            <input type="text" id="date_of_birth" name="date_of_birth" required />
          </div>
          <div>
            {/* Field htmlFor Birth Place */}
            <label htmlFor="birth_place">Birth Place:</label>
            <input type="text" id="birth_place" name="birth_place" required />
          </div>
          <div>
            {/* Field htmlFor ACPC Seat Allotment Date */}
            <label htmlFor="ACPC_seat_allotment_date">ACPC Seat Allotment Date:</label>
            <input type="text" id="ACPC_seat_allotment_date" name="ACPC_seat_allotment_date" />
          </div>
          <div>
            {/* Field htmlFor isD2D */}
            <label htmlFor="isD2D">Is D2D:</label>
            <input type="checkbox" id="isD2D" name="isD2D" />
          </div>
          <div>
            {/* Field htmlFor Enrollment Year */}
            <label htmlFor="enrollment_year">Enrollment Year:</label>
            <input type="text" id="enrollment_year" name="enrollment_year" required />
          </div>
          <div>
            {/* Field htmlFor Degree */}
            <label htmlFor="degree">Degree:</label>
            <input type="text" id="degree" name="degree" required />
          </div>
          <div>
            {/* Field htmlFor Qualifying Exam Roll Number */}
            <label htmlFor="qualifying_exam_roll_number">Qualifying Exam Roll Number:</label>
            <input type="text" id="qualifying_exam_roll_number" name="qualifying_exam_roll_number" required />
          </div>
          <div>
            {/* Field htmlFor Session Number */}
            <label htmlFor="session_number">Session Number:</label>
            <input type="number" id="session_number" name="session_number" required />
          </div>
          <div>
            {/* Field htmlFor Batch Year */}
            <label htmlFor="batch_year">Batch Year:</label>
            <input type="text" id="batch_year" name="batch_year" required />
          </div>
          <div>
            {/* Field htmlFor Student ID */}
            <label htmlFor="student_id">Student ID:</label>
            <input type="text" id="student_id" name="student_id" required />
          </div>
          <div>
            {/* Field htmlFor Old Student ID */}
            <label htmlFor="old_student_id">Old Student ID:</label>
            <input type="text" id="old_student_id" name="old_student_id" />
          </div>
          <div>
            {/* Field htmlFor Merit Rank */}
            <label htmlFor="merit_rank">Merit Rank:</label>
            <input type="text" id="merit_rank" name="merit_rank" required />
          </div>
          <div>
            {/* Field htmlFor Cast Category */}
            <label htmlFor="cast_category">Cast Category:</label>
            <input type="text" id="cast_category" name="cast_category" required />
          </div>
          <div>
            {/* Field htmlFor Student Email */}
            <label htmlFor="student_email">Student Email:</label>
            <input type="email" id="student_email" name="student_email" required />
          </div>
          <div>
            {/* Field htmlFor Student Roll Number */}
            <label htmlFor="student_roll_number">Student Roll Number:</label>
            <input type="text" id="student_roll_number" name="student_roll_number" required />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>

      <div className='bg-slate-50 px-10 py-5 h-auto border-2 rounded'>
        <h1 className='text-base font-semibold leading-7 text-gray-900'>Student Guardian Info Form</h1>
        <form action="/submit" method="POST">
          <div>
            {/* Field htmlFor Student ID */}
            <label htmlFor="student_id">Student ID:</label>
            <input type="text" id="student_id" name="student_id" required />
          </div>
          <div>
            {/* Field htmlFor Father's Name */}
            <label htmlFor="father_name">Father's Name:</label>
            <input type="text" id="father_name" name="father_name" required />
          </div>
          <div>
            {/* Field htmlFor Father's Occupation */}
            <label htmlFor="father_occupation">Father's Occupation:</label>
            <input type="text" id="father_occupation" name="father_occupation" />
          </div>
          <div>
            {/* Field htmlFor Organization Name */}
            <label htmlFor="organization_name">Organization Name:</label>
            <input type="text" id="organization_name" name="organization_name" />
          </div>
          <div>
            {/* Field htmlFor Annual Income */}
            <label htmlFor="annual_income">Annual Income:</label>
            <input type="text" id="annual_income" name="annual_income" />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      
      <div className='bg-slate-50 px-10 py-5 h-auto border-2 rounded'>
        <h1 className="text-base font-semibold leading-7 text-gray-900">Student Academic Info Form</h1>

        <form action="/submit" method="POST" className="space-y-12">

          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="student_id" className="block text-sm font-medium leading-6 text-gray-900">Student ID</label>
                <div className="mt-2">
                  <input type="text" id="student_id" name="student_id" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="medium_of_exam" className="block text-sm font-medium leading-6 text-gray-900">Medium of Exam</label>
                <div className="mt-2">
                  <input type="text" id="medium_of_exam" name="medium_of_exam" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="seat_number" className="block text-sm font-medium leading-6 text-gray-900">Seat Number</label>
                <div className="mt-2">
                  <input type="text" id="seat_number" name="seat_number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="passing_year" className="block text-sm font-medium leading-6 text-gray-900">Passing Year</label>
                <div className="mt-2">
                  <input type="text" id="passing_year" name="passing_year" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="passing_month" className="block text-sm font-medium leading-6 text-gray-900">Passing Month</label>
                <div className="mt-2">
                  <input type="text" id="passing_month" name="passing_month" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="board" className="block text-sm font-medium leading-6 text-gray-900">Board</label>
                <div className="mt-2">
                  <input type="text" id="board" name="board" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="institute_name" className="block text-sm font-medium leading-6 text-gray-900">Institute Name</label>
                <div className="mt-2">
                  <input type="text" id="institute_name" name="institute_name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="result_type" className="block text-sm font-medium leading-6 text-gray-900">Result Type</label>
                <div className="mt-2">
                  <input type="text" id="result_type" name="result_type" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="result" className="block text-sm font-medium leading-6 text-gray-900">Result</label>
                <div className="mt-2">
                  <input type="text" id="result" name="result" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="col-span-full">
                <input type="submit" value="Submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className='bg-slate-50 px-10 py-5 h-auto border-2 rounded'>
        <h1 className="text-base font-semibold leading-7 text-gray-900">Student Contact Info Form</h1>

        <form action="/submit" method="POST" className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="student_id" className="block text-sm font-medium leading-6 text-gray-900">Student ID</label>
                <div className="mt-2">
                  <input type="text" id="student_id" name="student_id" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="address_line_1" className="block text-sm font-medium leading-6 text-gray-900">Address Line 1</label>
                <div className="mt-2">
                  <input type="text" id="address_line_1" name="address_line_1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="address_line_2" className="block text-sm font-medium leading-6 text-gray-900">Address Line 2</label>
                <div className="mt-2">
                  <input type="text" id="address_line_2" name="address_line_2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="address_line_3" className="block text-sm font-medium leading-6 text-gray-900">Address Line 3</label>
                <div className="mt-2">
                  <input type="text" id="address_line_3" name="address_line_3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                <div className="mt-2">
                  <input type="text" id="city" name="city" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">State</label>
                <div className="mt-2">
                  <input type="text" id="state" name="state" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="pincode" className="block text-sm font-medium leading-6 text-gray-900">Pincode</label>
                <div className="mt-2">
                  <input type="text" id="pincode" name="pincode" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                <div className="mt-2">
                  <input type="text" id="country" name="country" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="mobile_number" className="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
                <div className="mt-2">
                  <input type="text" id="mobile_number" name="mobile_number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="alternate_mobile_number" className="block text-sm font-medium leading-6 text-gray-900">Alternate Mobile Number</label>
                <div className="mt-2">
                  <input type="text" id="alternate_mobile_number" name="alternate_mobile_number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div className="mt-2">
                  <input type="email" id="email" name="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="local_address_line_1" className="block text-sm font-medium leading-6 text-gray-900">Local Address Line 1</label>
                <div className="mt-2">
                  <input type="text" id="local_address_line_1" name="local_address_line_1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="local_address_line_2" className="block text-sm font-medium leading-6 text-gray-900">Local Address Line 2</label>
                <div className="mt-2">
                  <input type="text" id="local_address_line_2" name="local_address_line_2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="local_address_line_3" className="block text-sm font-medium leading-6 text-gray-900">Local Address Line 3</label>
                <div className="mt-2">
                  <input type="text" id="local_address_line_3" name="local_address_line_3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="local_city" className="block text-sm font-medium leading-6 text-gray-900">Local City</label>
                <div className="mt-2">
                  <input type="text" id="local_city" name="local_city" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="col-span-full">
                <input type="submit" value="Submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className='bg-slate-50 px-10 py-5 h-auto border-2 rounded'>
        <h1>Student Fees Info Form</h1>
        <form action="/submit" method="POST" className="space-y-12">
          <div>
            {/* Field htmlFor Student ID */}
            <label htmlFor="student_id">Student ID:</label>
            <input type="text" id="student_id" name="student_id" required />
          </div>
          <div>
            {/* Field htmlFor Transaction Date */}
            <label htmlFor="txn_date">Transaction Date:</label>
            <input type="text" id="txn_date" name="txn_date" required />
          </div>
          <div>
            {/* Field htmlFor Voucher Number */}
            <label htmlFor="voucher_number">Voucher Number:</label>
            <input type="text" id="voucher_number" name="voucher_number" required />
          </div>
          <div>
            {/* Field htmlFor Batch Year */}
            <label htmlFor="batch_year">Batch Year:</label>
            <input type="text" id="batch_year" name="batch_year" required />
          </div>
          <div>
            {/* Field htmlFor Session Number */}
            <label htmlFor="session_no">Session Number:</label>
            <input type="number" id="session_no" name="session_no" required />
          </div>
          <div>
            {/* Field htmlFor Admission Type */}
            <label htmlFor="admission_type">Admission Type:</label>
            <input type="text" id="admission_type" name="admission_type" required />
          </div>
          <div>
            {/* Field htmlFor Fees Amount */}
            <label htmlFor="fees_amount">Fees Amount:</label>
            <input type="number" id="fees_amount" name="fees_amount" required />
          </div>
          <div>
            {/* Field htmlFor Transaction Status */}
            <label htmlFor="txn_status">Transaction Status:</label>
            <input type="text" id="txn_status" name="txn_status" required />
          </div>
          <div>
            {/* Field htmlFor Payment Mode */}
            <label htmlFor="payment_mode">Payment Mode:</label>
            <input type="text" id="payment_mode" name="payment_mode" required />
          </div>
          <div>
            {/* Field htmlFor Cheque Number */}
            <label htmlFor="cheque_number">Cheque Number:</label>
            <input type="text" id="cheque_number" name="cheque_number" />
          </div>
          <div>
            {/* Field htmlFor Cheque Date */}
            <label htmlFor="cheque_date">Cheque Date:</label>
            <input type="text" id="cheque_date" name="cheque_date" />
          </div>
          <div>
            {/* Field htmlFor Bank Name */}
            <label htmlFor="bank_name">Bank Name:</label>
            <input type="text" id="bank_name" name="bank_name" />
          </div>
          <div>
            {/* Field htmlFor Paid Date */}
            <label htmlFor="paid_date">Paid Date:</label>
            <input type="text" id="paid_date" name="paid_date" required />
          </div>
          <div>
            {/* Field htmlFor Reconcile Date */}
            <label htmlFor="reconsile_date">Reconcile Date:</label>
            <input type="text" id="reconsile_date" name="reconsile_date" />
          </div>
          <div>
            {/* Field htmlFor Reconcile Number */}
            <label htmlFor="reconsile_number">Reconcile Number:</label>
            <input type="text" id="reconsile_number" name="reconsile_number" />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>

      <div className='bg-slate-50 px-10 py-5 h-auto border-2 rounded'>
        <h1>Student Other Details Form</h1>
        <form action="/submit" method="POST">
          <div>
            {/* Field htmlFor Student ID */}
            <label htmlFor="student_id">Student ID:</label>
            <input type="text" id="student_id" name="student_id" required />
          </div>
          <div>
            {/* Field htmlFor Sub Cast */}
            <label htmlFor="sub_cast">Sub Cast:</label>
            <input type="text" id="sub_cast" name="sub_cast" />
          </div>
          <div>
            {/* Field htmlFor Marital Status */}
            <label htmlFor="marital_status">Marital Status:</label>
            <input type="text" id="marital_status" name="marital_status" />
          </div>
          <div>
            {/* Field htmlFor Mother Tongue */}
            <label htmlFor="mother_tongue">Mother Tongue:</label>
            <input type="text" id="mother_tongue" name="mother_tongue" />
          </div>
          <div>
            {/* Field htmlFor Nationality */}
            <label htmlFor="nationality">Nationality:</label>
            <input type="text" id="nationality" name="nationality" />
          </div>
          <div>
            {/* Field htmlFor Blood Group */}
            <label htmlFor="blood_group">Blood Group:</label>
            <input type="text" id="blood_group" name="blood_group" />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Student_Form
