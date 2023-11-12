import React, { useEffect, useState } from "react";
import "./form.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Email } from "../Email";
import { PaginationControl } from "react-bootstrap-pagination-control";

function Student_Form() {
  const role = localStorage.getItem("role");
  const [data, setData] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();

  const [currentPage, setCurrentPage] = useState(1);

  const schema = yup.object().shape({
    // Student Details
    student_id: yup.string().required("Student id is required").min(5),
    reporting_date: yup
      .string()
      .matches(/^(\d{2}-\d{2}-\d{4})$/, "Must be in dd-mm-yyyy format")
      .required("Reporting Date is required"),
    admission_type: yup.string().required("Admission Type is required"),
    first_name: yup.string().required("First Name is required"),
    middle_name: yup.string(),
    last_name: yup.string().required("Last Name is required"),
    name_format: yup.string(),
    full_name: yup.string().required("Full Name is required"),
    gender: yup.string().required("Gender is required"),
    date_of_birth: yup
      .string()
      .matches(
        /^(\d{2}-\d{2}-\d{4})$/,
        "Date of Birth must be in dd-mm-yyyy format"
      )
      .required("Date of Birth is required"),
    birth_place: yup.string().required("Birth Place is required"),
    ACPC_seat_allotment_date: yup
      .string()
      .matches(/^(\d{2}-\d{2}-\d{4})$/, "Must be in dd-mm-yyyy format"),
    isD2D: yup.boolean().required("Is D2D is required"),
    enrollment_year: yup
      .number()
      .integer()
      .positive()
      .required("Enrollment Year is required"),
    degree: yup.string().required("Degree is required"),
    qualifying_exam_roll_number: yup
      .string()
      .required("Qualifying Exam Roll Number is required"),
    session_number: yup.string().required("Session Number is required"),
    batch_year: yup
      .number()
      .integer()
      .positive()
      .required("Batch Year is required"),
    old_student_id: yup.string(),
    merit_rank: yup.number().integer().positive(),
    cast_category: yup.string(),
    student_email: yup
      .string()
      .email("Invalid email format")
      .required("Student Email is required"),
    student_roll_number: yup
      .string()
      .required("Student Roll Number is required"),
    // Guardian Info
    father_name: yup.string().required("Father's name is required"),
    father_occupation: yup.string().required("Father's occupation is required"),
    organization_name: yup.string().required("Organization name is required"),
    annual_income: yup
      .number()
      .positive("Annual income must be a positive number")
      .integer("Annual income must be an integer")
      .required("Annual income is required"),

    // Academic Info
    medium_of_exam: yup.string().required("Medium of Exam is required"),
    seat_number: yup.string().required("Seat Number is required"),
    passing_year: yup.string().required("Passing Year is required"),
    passing_month: yup.string().required("Passing Month is required"),
    board: yup.string().required("Board is required"),
    institute_name: yup.string().required("Institute Name is required"),
    result_type: yup.string().required("Result Type is required"),
    result: yup.string().required("Result is required"),

    // Other Details
    sub_cast: yup.string().required("Sub Cast is required"),
    merital_status: yup.string().required("Marital Status is required"),
    mother_tongue: yup.string().required("Mother Tongue is required"),
    nationality: yup.string().required("Nationality is required"),
    blood_group: yup.string().required("Blood Group is required"),

    // Contact Details
    address_line_1: yup.string().required("Address Line 1 is required"),
    address_line_2: yup.string(),
    address_line_3: yup.string(),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    country: yup.string().required("Country is required"),
    pincode: yup.string().required("Pincode is required"),
    mobile_number: yup.string().required("Mobile Number is required"),
    alternate_mobile_number: yup.string(),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    local_address_line_1: yup.string(),
    local_address_line_2: yup.string(),
    local_address_line_3: yup.string(),
    local_city: yup.string(),

    // Fees Info

    txn_date: yup
      .string()
      .matches(/^(\d{2}-\d{2}-\d{4})$/, "Must be in dd-mm-yyyy format")
      .required("Transaction Date is required"),
    voucher_number: yup.string().required("Voucher Number is required"),
    batch_year: yup
      .number()
      .integer()
      .positive()
      .required("Batch Year is required"),
    session_no: yup.string().required("Session Number is required"),
    admission_type: yup.string().required("Admission Type is required"),
    fees_amount: yup.number().positive().required("Fees Amount is required"),
    txn_status: yup.string().required("Transaction Status is required"),
    payment_mode: yup.string().required("Payment Mode is required"),
    cheque_number: yup.string(),
    cheque_date: yup
      .string()
      .matches(/^(\d{2}-\d{2}-\d{4})$/, "Must be in dd-mm-yyyy format"),
    bank_name: yup.string(),
    paid_date: yup
      .string()
      .matches(/^(\d{2}-\d{2}-\d{4})$/, "Must be in dd-mm-yyyy format"),
    reconsile_date: yup
      .string()
      .matches(/^(\d{2}-\d{2}-\d{4})$/, "Must be in dd-mm-yyyy format"),
    reconsile_number: yup.string(),
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
    console.log("Clicked");
    console.log(data);
    setData(data);
    setTimeout(() => {
      setData(null);
    }, 2000);
    reset();
  };

  const createStudent = async () => {
    await axios.post(`https://dms2901.onrender.com/${role}/createStudent`, data).then(
      (data) => {
        console.log(data?.data?.message?.errors);
        console.log(data?.data?.message?._message);
        console.log(data?.data.message);
        console.log(data);

        if (data?.data?.message?.errors !== undefined) {
          setError(data?.data?.message?._message);
        } else {
          setStatus(data?.data?.message);
          setTimeout(() => {
            setStatus("");
          }, 2000);
          const emailData = {
            from_name: role,
            to_name: data?.data?.id,
            from_email: localStorage.getItem("email"),
            to_email: data?.data?.email,
            message: `${data?.data?.password}`,
          };
          Email(emailData);
        }
      },
      (error) => {
        if (error.message === "Request failed with status code 404") {
          alert("You are not allowed to add HOD Details");
        } else {
          console.log(JSON.stringify(error));
        }
      }
    );
  };

  useEffect(() => {
    if (data !== undefined && data !== null) {
      createStudent();
    }
  }, [data]);

  useEffect(() => {
    setStatus("");
  }, [error]);

  var Form1 = (
    <div className="">
      <h1 className="text-base font-semibold leading-7 text-white text-center font-bold text-xl bg-indigo-500 p-4 h-10 rounded-lg flex items-center justify-center">
        Student Details Form
      </h1>
      <div className="grid grid-cols-3">
        <div>
          {/* Field htmlFor Reporting Date */}
          <label htmlFor="reporting_date">Reporting Date:</label>
          <input
            type="text"
            id="reporting_date"
            name="reporting_date"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            {...register("reporting_date")}
          />
        </div>
        <div>
          <label htmlFor="admission_type">Admission Type:</label>
          <input
            type="text"
            id="admission_type"
            name="admission_type"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            {...register("admission_type")}
          />
        </div>
        <div>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            {...register("first_name")}
          />
        </div>
        <div>
          <label htmlFor="middle_name">Middle Name:</label>
          <input
            type="text"
            id="middle_name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="middle_name"
            {...register("middle_name")}
          />
        </div>
        <div>
          {/* Field htmlFor Last Name */}
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            {...register("last_name")}
          />
        </div>
        <div>
          {/* Field htmlFor Name Format */}
          <label htmlFor="name_format">Name Format:</label>
          <input
            type="text"
            id="name_format"
            name="name_format"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            {...register("name_format")}
          />
        </div>
        <div>
          {/* Field htmlFor Name Format */}
          <label htmlFor="name_format">Full Name :</label>
          <input
            type="text"
            id="name_format"
            name="name_format"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            {...register("full_name")}
          />
        </div>
        <div>
          {/* Field htmlFor Gender */}
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            {...register("gender")}
          />
        </div>
        <div>
          {/* Field htmlFor Date of Birth */}
          <label htmlFor="date_of_birth">Date of Birth:</label>
          <input
            type="text"
            id="date_of_birth"
            name="date_of_birth"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            {...register("date_of_birth")}
          />
        </div>
        <div>
          {/* Field htmlFor Birth Place */}
          <label htmlFor="birth_place">Birth Place:</label>
          <input
            type="text"
            id="birth_place"
            name="birth_place"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            {...register("birth_place")}
          />
        </div>
        <div>
          {/* Field htmlFor ACPC Seat Allotment Date */}
          <label htmlFor="ACPC_seat_allotment_date">
            ACPC Seat Allotment Date:
          </label>
          <input
            type="text"
            id="ACPC_seat_allotment_date"
            name="ACPC_seat_allotment_date"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            {...register("ACPC_seat_allotment_date")}
          />
        </div>
        <div>
          {/* Field htmlFor isD2D */}
          <label htmlFor="isD2D">Is D2D:</label>
          <input
            type="checkbox"
            id="isD2D"
            name="isD2D"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("isD2D")}
          />
        </div>
        <div>
          {/* Field htmlFor Enrollment Year */}
          <label htmlFor="enrollment_year">Enrollment Year:</label>
          <input
            type="text"
            id="enrollment_year"
            name="enrollment_year"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            {...register("enrollment_year")}
          />
        </div>
        <div>
          {/* Field htmlFor Degree */}
          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            id="degree"
            name="degree"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            {...register("degree")}
          />
        </div>
        <div>
          {/* Field htmlFor Qualifying Exam Roll Number */}
          <label htmlFor="qualifying_exam_roll_number">
            Qualifying Exam Roll Number:
          </label>
          <input
            type="text"
            id="qualifying_exam_roll_number"
            name="qualifying_exam_roll_number"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            {...register("qualifying_exam_roll_number")}
          />
        </div>
        <div>
          {/* Field htmlFor Session Number */}
          <label htmlFor="session_number">Session Number:</label>
          <input
            type="number"
            id="session_number"
            name="session_number"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            {...register("session_number")}
          />
        </div>
        <div>
          {/* Field htmlFor Batch Year */}
          <label htmlFor="batch_year">Batch Year:</label>
          <input
            type="text"
            id="batch_year"
            name="batch_year"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            {...register("batch_year")}
          />
        </div>
        <div>
          {/* Field htmlFor Student ID */}
          <label htmlFor="student_id">Student ID:</label>
          <input
            type="text"
            id="student_id"
            name="student_id"
            required
            {...register("student_id")}
          />
        </div>
        <div>
          {/* Field htmlFor Old Student ID */}
          <label htmlFor="old_student_id">Old Student ID:</label>
          <input
            type="text"
            id="old_student_id"
            name="old_student_id"
            {...register("old_student_id")}
          />
        </div>
        <div>
          {/* Field htmlFor Merit Rank */}
          <label htmlFor="merit_rank">Merit Rank:</label>
          <input
            type="text"
            id="merit_rank"
            name="merit_rank"
            required
            {...register("merit_rank")}
          />
        </div>
        <div>
          {/* Field htmlFor Cast Category */}
          <label htmlFor="cast_category">Cast Category:</label>
          <input
            type="text"
            id="cast_category"
            name="cast_category"
            required
            {...register("cast_category")}
          />
        </div>
        <div>
          {/* Field htmlFor Student Email */}
          <label htmlFor="student_email">Student Email:</label>
          <input
            type="email"
            id="student_email"
            name="student_email"
            required
            {...register("student_email")}
          />
        </div>
        <div>
          {/* Field htmlFor Student Roll Number */}
          <label htmlFor="student_roll_number">Student Roll Number:</label>
          <input
            type="text"
            id="student_roll_number"
            name="student_roll_number"
            required
            {...register("student_roll_number")}
          />
        </div>
      </div>
    </div>
  );

  var Form2 = (
    <div>
      <h1 className="text-base font-semibold leading-7 text-white text-center font-bold text-xl bg-indigo-500 p-4 h-10 rounded-lg flex items-center justify-center">
        Student Guardian Info Form
      </h1>

      <div>
        {/* Field htmlFor Father's Name */}
        <label htmlFor="father_name">Father's Name:</label>
        <input
          type="text"
          id="father_name"
          name="father_name"
          required
          {...register("father_name")}
        />
      </div>
      <div>
        {/* Field htmlFor Father's Occupation */}
        <label htmlFor="father_occupation">Father's Occupation:</label>
        <input
          type="text"
          id="father_occupation"
          name="father_occupation"
          {...register("father_occupation")}
        />
      </div>
      <div>
        {/* Field htmlFor Organization Name */}
        <label htmlFor="organization_name">Organization Name:</label>
        <input
          type="text"
          id="organization_name"
          name="organization_name"
          {...register("organization_name")}
        />
      </div>
      <div>
        {/* Field htmlFor Annual Income */}
        <label htmlFor="annual_income">Annual Income:</label>
        <input
          type="text"
          id="annual_income"
          name="annual_income"
          {...register("annual_income")}
        />
      </div>
    </div>
  );

  var Form3 = (
    <div className="border-b border-gray-900/10 pb-12">
      <h1 className="text-base font-semibold leading-7 text-white text-center font-bold text-xl bg-indigo-500 p-4 h-10 rounded-lg flex items-center justify-center">
        Student Academic Info Form
      </h1>
      <div className="mt-10 grid grid-cols-3">
        <div className="sm:col-span-1">
          <label
            htmlFor="medium_of_exam"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Medium of Exam
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="medium_of_exam"
              name="medium_of_exam"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("medium_of_exam")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="seat_number"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Seat Number
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="seat_number"
              name="seat_number"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("seat_number")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="passing_year"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Passing Year
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="passing_year"
              name="passing_year"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("passing_year")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="passing_month"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Passing Month
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="passing_month"
              name="passing_month"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("passing_month")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="board"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Board
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="board"
              name="board"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("board")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="institute_name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Institute Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="institute_name"
              name="institute_name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("institute_name")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="result_type"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Result Type
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="result_type"
              name="result_type"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("result_type")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="result"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Result
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="result"
              name="result"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("result")}
            />
          </div>
        </div>
      </div>
    </div>
  );

  var Form4 = (
    <div className="border-b border-gray-900/10 pb-12 ">
      <h1 className="text-base font-semibold leading-7 text-white text-center font-bold text-xl bg-indigo-500 p-4 h-10 rounded-lg flex items-center justify-center">
        Student Contact Info Form
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="sm:col-span-1">
          <label
            htmlFor="address_line_1"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Address Line 1
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="address_line_1"
              name="address_line_1"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("address_line_1")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="address_line_2"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Address Line 2
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="address_line_2"
              name="address_line_2"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("address_line_2")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="address_line_3"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Address Line 3
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="address_line_3"
              name="address_line_3"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("address_line_3")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            City
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="city"
              name="city"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("city")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="state"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            State
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="state"
              name="state"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("state")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="pincode"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Pincode
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("pincode")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Country
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="country"
              name="country"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("country")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="mobile_number"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Mobile Number
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="mobile_number"
              name="mobile_number"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("mobile_number")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="alternate_mobile_number"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Alternate Mobile Number
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="alternate_mobile_number"
              name="alternate_mobile_number"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("alternate_mobile_number")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("email")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="local_address_line_1"
            className="block text-sm font-medium text-gray-900"
          >
            Local Address Line 1
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="local_address_line_1"
              name="local_address_line_1"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("local_address_line_1")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="local_address_line_2"
            className="block text-sm font-medium text-gray-900"
          >
            Local Address Line 2
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="local_address_line_2"
              name="local_address_line_2"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("local_address_line_2")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="local_address_line_3"
            className="block text-sm font-medium text-gray-900"
          >
            Local Address Line 3
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="local_address_line_3"
              name="local_address_line_3"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("local_address_line_3")}
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="local_city"
            className="block text-sm font-medium text-gray-900"
          >
            Local City
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="local_city"
              name="local_city"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              {...register("local_city")}
            />
          </div>
        </div>
      </div>
    </div>
  );

  var Form5 = (
    <div className="border-b border-gray-900/10 pb-12 ">
      <h1 class="text-base font-semibold leading-7 text-white text-center font-bold text-xl bg-indigo-500 p-4 h-10 rounded-lg flex items-center justify-center">
        Student Fees Info Form
      </h1>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-1">
          <label
            for="txn_date"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Transaction Date:
          </label>
          <input
            type="text"
            id="txn_date"
            name="txn_date"
            required
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
            {...register("txn_date")}
          />
        </div>
        <div class="col-span-1">
          <label
            for="voucher_number"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Voucher Number:
          </label>
          <input
            type="text"
            id="voucher_number"
            name="voucher_number"
            required
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
            {...register("voucher_number")}
          />
        </div>
        <div class="col-span-1">
          <label
            for="batch_year"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Batch Year:
          </label>
          <input
            type="text"
            id="batch_year"
            name="batch_year"
            required
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
            {...register("batch_year")}
          />
        </div>
        <div class="col-span-1">
          <label
            for="session_no"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Session Number:
          </label>
          <input
            type="number"
            id="session_no"
            name="session_no"
            required
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
            {...register("session_no")}
          />
        </div>
        <div class="col-span-1">
          <label
            for="admission_type"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Admission Type:
          </label>
          <input
            type="text"
            id="admission_type"
            name="admission_type"
            required
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
            {...register("admission_type")}
          />
        </div>
        <div class="col-span-1">
          <label
            for="fees_amount"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Fees Amount:
          </label>
          <input
            type="number"
            id="fees_amount"
            name="fees_amount"
            required
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
            {...register("fees_amount")}
          />
        </div>
        <div class="col-span-1">
          <label
            for="txn_status"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Transaction Status:
          </label>
          <input
            type="text"
            id="txn_status"
            name="txn_status"
            required
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
            {...register("txn_status")}
          />
        </div>
        <div class="col-span-1">
          <label
            for="payment_mode"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Payment Mode:
          </label>
          <input
            type="text"
            id="payment_mode"
            name="payment_mode"
            required
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
            {...register("payment_mode")}
          />
        </div>
        <div class="col-span-1">
          <label
            for="cheque_number"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Cheque Number:
          </label>
          <input
            type="text"
            id="cheque_number"
            name="cheque_number"
            required
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
            {...register("cheque_number")}
          />
        </div>
        <div class="col-span-1">
          <label
            for="cheque_date"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Cheque Date:
          </label>
          <input
            type="text"
            id="cheque_date"
            name="cheque_date"
            required
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
            {...register("cheque_date")}
          />
        </div>
        <div class="col-span-1">
          <label
            for="bank_name"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Bank Name:
          </label>
          <input
            type="text"
            id="bank_name"
            name="bank_name"
            required
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
            {...register("bank_name")}
          />
        </div>
        <div class="col-span-1">
          <label
            for="paid_date"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Paid Date:
          </label>
          <input
            type="text"
            id="paid_date"
            name="paid_date"
            required
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
            {...register("paid_date")}
          />
        </div>
        <div class="col-span-1">
          <label
            for="reconsile_date"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Reconcile Date:
          </label>
          <input
            type="text"
            id="reconsile_date"
            name="reconsile_date"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
            {...register("reconsile_date")}
          />
        </div>
        <div class="col-span-1">
          <label
            for="reconsile_number"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Reconcile Number:
          </label>
          <input
            type="text"
            id="reconsile_number"
            name="reconsile_number"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
            {...register("reconsile_number")}
          />
        </div>
      </div>
    </div>
  );

  var Form6 = (
    <div class="w-full mx-auto grid grid-cols-2">
      <h1 class="text-base font-semibold leading-7 text-white text-center font-bold text-xl bg-indigo-500 p-4 h-10 rounded-lg flex items-center justify-center">
        Student Other Details Form
      </h1>
      <div class="mb-1">
        <label for="sub_cast" class="block text-sm font-medium text-gray-700">
          Sub Cast:
        </label>
        <input
          type="text"
          id="sub_cast"
          name="sub_cast"
          required
          class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
          {...register("sub_cast")}
        />
      </div>
      <div class="mb-1">
        <label
          for="merital_status"
          class="block text-sm font-medium text-gray-700"
        >
          Marital Status:
        </label>
        <input
          type="text"
          id="merital_status"
          name="merital_status"
          class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
          {...register("merital_status")}
        />
      </div>
      <div class="mb-1">
        <label
          for="mother_tongue"
          class="block text-sm font-medium text-gray-700"
        >
          Mother Tongue:
        </label>
        <input
          type="text"
          id="mother_tongue"
          name="mother_tongue"
          class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
          {...register("mother_tongue")}
        />
      </div>
      <div class="mb-1">
        <label
          for="nationality"
          class="block text-sm font-medium text-gray-700"
        >
          Nationality:
        </label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
          {...register("nationality")}
        />
      </div>
      <div class="mb-1">
        <label
          for="blood_group"
          class="block text-sm font-medium text-gray-700"
        >
          Blood Group:
        </label>
        <input
          type="text"
          id="blood_group"
          name="blood_group"
          class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-400"
          {...register("blood_group")}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center w-screen">
      <div className="bg-slate-50 px-5 py-3 h-auto border-2 rounded w-max">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-auto">
          {currentPage == 1 && Form1}
          {currentPage == 2 && Form2}
          {currentPage == 3 && Form3}
          {currentPage == 4 && Form4}
          {currentPage == 5 && Form5}
          {currentPage == 6 && Form6}

          {currentPage == 6 && (
           <div className="flex items-center justify-center m-4">
           <button
             type="submit"
             className="bg-blue-500 rounded-lg text-center w-auto"
           >
             Add Student
           </button>
         </div>
         
          )}

          {status}
        </form>
        <PaginationControl
          page={currentPage}
          between={4}
          total={31}
          limit={6}
          changePage={(currentPage) => {
            setCurrentPage(currentPage);
            console.log(currentPage);
          }}
          ellipsis={1}
        />
      </div>
    </div>
  );
}

export default Student_Form;
