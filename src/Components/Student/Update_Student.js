import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update_Student = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    // Student Details
    details: {
      reporting_date: "",
      admission_type: "",
      full_name: "",
      gender: "",
      date_of_birth: "",
      birth_place: "",
      ACPC_seat_allotment_date: "",
      isD2D: "",
      enrollment_year: "",
      degree: "",
      qualifying_exam_roll_number: "",
      session_number: "",
      batch_year: "",
      student_id: "",
      old_student_id: "",
      merit_rank: "",
      cast_category: "",
      student_email: "",
      student_roll_number: "",
    },

    // Student Guardian
    guardian: {
      student_id: "",
      father_name: "",
      father_occupation: "",
      organization_name: "",
      annual_income: "",
    },

    // Student Academic Info
    academic: {
      student_id: "",
      medium_of_exam: [""],
      seat_number: [""],
      passing_year: [""],
      passing_month: [""],
      board: [""],
      institute_name: [""],
      result_type: [""],
      result: [""],
    },

    // Student Contact
    contact: {
      student_id: "",
      address_line_1: "",
      address_line_2: "",
      address_line_3: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
      mobile_number: "",
      alternate_mobile_number: "",
      email: "",
      local_address_line_1: "",
      local_address_line_2: "",
      local_address_line_3: "",
      local_city: "",
    },

    // Student Fees
    fees: {
      student_id: "",
      txn_date: "",
      voucher_number: "",
      batch_year: "",
      session_no: "",
      admission_type: "",
      fees_amount: "",
      txn_status: "",
      payment_mode: "",
      cheque_number: "",
      cheque_date: "",
      bank_name: "",
      paid_date: "",
      reconsile_date: "",
      reconsile_number: "",
    },

    // Student Other Details
    otherDetails: {
      student_id: "",
      sub_cast: "",
      marital_status: "",
      mother_tongue: "",
      nationality: "",
      blood_group: "",
    },
  });

  const [status, setStatus] = useState("");

  const preData = async () => {
    try {
      const detailsPromise = axios.get(
        `http://localhost:3001/student/getStudentDetails/${id}`
      );
      const guardianPromise = axios.get(
        `http://localhost:3001/student/getStudentGuardianInfo/${id}`
      );
      const academicPromise = axios.get(
        `http://localhost:3001/student/getStudentAcademicInfo/${id}`
      );
      const contactPromise = axios.get(
        `http://localhost:3001/student/getStudentContactInfo/${id}`
      );
      const feesPromise = axios.get(
        `http://localhost:3001/student/getStudentFeesInfo/${id}`
      );
      const otherDetailsPromise = axios.get(
        `http://localhost:3001/student/getStudentOtherDetails/${id}`
      );

      const [details, guardian, academic, contact, fees, otherDetails] =
        await Promise.all([
          detailsPromise,
          guardianPromise,
          academicPromise,
          contactPromise,
          feesPromise,
          otherDetailsPromise,
        ]);

      console.log(details?.data[0]);
      console.log(guardian?.data[0]);
      console.log(academic?.data[0]);
      console.log(contact?.data[0]);
      console.log(fees?.data[0]);
      console.log(otherDetails?.data[0]);

      setFormData({
        details: details?.data[0],
        guardian: guardian?.data[0],
        academic: academic?.data[0],
        contact: contact?.data[0],
        fees: fees?.data[0],
        otherDetails: otherDetails?.data[0],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateDataDetails = async () => {
    await axios
      .patch(`http://localhost:3001/admin/updateStudentDetails`, formData)
      .then(
        (data) => {
          console.log(data?.data);
          setStatus(
            data?.data?.message
              ? "Data Updated Successfully!"
              : "Data Updation Failed!"
          );
          setTimeout(() => {
            setStatus("");
          }, 2000);
        },
        (error) => {
          console.log(error);
          setStatus(JSON.stringify(error));
        }
      );
  };

  const updateDataGuardian = async () => {
    await axios
      .patch(`http://localhost:3001/admin/updateStudentGuardianInfo`, formData)
      .then(
        (data) => {
          console.log(data?.data);
          setStatus(
            data?.data?.message
              ? "Data Updated Successfully!"
              : "Data Updation Failed!"
          );
          setTimeout(() => {
            setStatus("");
          }, 2000);
        },
        (error) => {
          console.log(error);
          setStatus(JSON.stringify(error));
        }
      );
  };

  const updateDataOtherDetails = async () => {
    await axios
      .patch(`http://localhost:3001/admin/updateStudentOtherDetails`, formData)
      .then(
        (data) => {
          console.log(data?.data);
          setStatus(
            data?.data?.message
              ? "Data Updated Successfully!"
              : "Data Updation Failed!"
          );
          setTimeout(() => {
            setStatus("");
          }, 2000);
        },
        (error) => {
          console.log(error);
          setStatus(JSON.stringify(error));
        }
      );
  };

  const updateDataContact = async () => {
    await axios
      .patch(`http://localhost:3001/admin/updateStudentContactInfo`, formData)
      .then(
        (data) => {
          console.log(data?.data);
          setStatus(
            data?.data?.message
              ? "Data Updated Successfully!"
              : "Data Updation Failed!"
          );
          setTimeout(() => {
            setStatus("");
          }, 2000);
        },
        (error) => {
          console.log(error);
          setStatus(JSON.stringify(error));
        }
      );
  };

  const updateDataFee = async () => {
    await axios
      .patch(`http://localhost:3001/admin/updateStudent`, formData)
      .then(
        (data) => {
          console.log(data?.data);
          setStatus(
            data?.data?.message
              ? "Data Updated Successfully!"
              : "Data Updation Failed!"
          );
          setTimeout(() => {
            setStatus("");
          }, 2000);
        },
        (error) => {
          console.log(error);
          setStatus(JSON.stringify(error));
        }
      );
  };

  const updateDataAcademic = async () => {
    await axios
      .patch(`http://localhost:3001/admin/updateStudentAcademicInfo`, formData)
      .then(
        (data) => {
          console.log(data?.data);
          setStatus(
            data?.data?.message
              ? "Data Updated Successfully!"
              : "Data Updation Failed!"
          );
          setTimeout(() => {
            setStatus("");
          }, 2000);
        },
        (error) => {
          console.log(error);
          setStatus(JSON.stringify(error));
        }
      );
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const [section, field] = name.split('.');
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [section]: {
        ...prevFormData[section],
        [field]: value.trim(),
      },
    }));
    console.log(formData);
  };
  
  
  

  const handleIsD2DChange = (e) => {
    const { checked } = e.target;
  
    setFormData((prevData) => ({
      ...prevData,
      details: {
        ...prevData.details,
        isD2D: checked,
      },
    }));
  };
  

  const handleSubmitDetails = async (e) => {
    e.preventDefault();

    if (formData.details.reporting_date.length !== 10) {
      alert("Reporting Date should be of 10 characters!");
      return;
    }

    if (formData.details.admission_type.length < 5) {
      alert("Admission Type should be at least 5 characters!");
      return;
    }

    if (formData.details.first_name.length < 5) {
      alert("First Name should be at least 5 characters!");
      return;
    }

    if (
      !formData.details.reporting_date ||
      !formData.details.admission_type ||
      !formData.details.first_name ||
      !formData.details.last_name ||
      !formData.details.name_format ||
      !formData.details.full_name ||
      !formData.details.gender ||
      !formData.details.date_of_birth ||
      !formData.details.birth_place ||
      !formData.details.enrollment_year ||
      !formData.details.degree ||
      !formData.details.qualifying_exam_roll_number ||
      !formData.details.batch_year ||
      !formData.details.student_id ||
      !formData.details.merit_rank ||
      !formData.details.cast_category ||
      !formData.details.student_email ||
      !formData.details.student_roll_number
    ) {
      alert("Please fill all the required fields!");
      return;
    } else {
      console.log(formData);
      await updateDataDetails();
    }
  };

  const handleSubmitGuardian = async (e) => {
    e.preventDefault();

    if (formData.guardian.father_name.length < 5) {
      alert("Father's Name should be at least 5 characters!");
      return;
    }

    if (
      !formData.guardian.student_id ||
      !formData.guardian.father_name ||
      !formData.guardian.father_occupation ||
      !formData.guardian.organization_name ||
      !formData.guardian.annual_income
    ) {
      alert("Please fill all the required fields in Guardian section!");
      return;
    } else {
      console.log(formData);
      await updateDataGuardian();
    }
  };

  const handleSubmitAcademics = async (e) => {
    e.preventDefault();

    if (
      formData.academic.medium_of_exam.length === 0 ||
      formData.academic.seat_number.length === 0 ||
      formData.academic.passing_year.length === 0 ||
      formData.academic.passing_month.length === 0 ||
      formData.academic.board.length === 0 ||
      formData.academic.institute_name.length === 0 ||
      formData.academic.result_type.length === 0 ||
      formData.academic.result.length === 0
    ) {
      alert("Please fill all the required fields in Academics section!");
      return;
    } else {
      console.log(formData);
      await updateDataAcademic();
    }
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();

    if (
      !formData.contact.address_line_1 ||
      !formData.contact.city ||
      !formData.contact.pincode ||
      !formData.contact.country ||
      !formData.contact.mobile_number ||
      !formData.contact.email ||
      !formData.contact.local_address_line_1 ||
      !formData.contact.local_city
    ) {
      alert("Please fill all the required fields in Contact section!");
      return;
    } else {
      console.log(formData);
      await updateDataContact();
    }
  };

  const handleSubmitFees = async (e) => {
    e.preventDefault();

    if (
      !formData.fees.txn_date ||
      !formData.fees.voucher_number ||
      !formData.fees.batch_year ||
      !formData.fees.session_no ||
      !formData.fees.admission_type ||
      !formData.fees.fees_amount ||
      !formData.fees.txn_status ||
      !formData.fees.payment_mode ||
      !formData.fees.paid_date
    ) {
      alert("Please fill all the required fields in Fees section!");
      return;
    } else {
      console.log(formData);
      await updateDataFee();
    }
  };

  const handleSubmitOtherDetails = async (e) => {
    e.preventDefault();

    if (
      !formData.otherDetails.sub_cast ||
      !formData.otherDetails.marital_status ||
      !formData.otherDetails.mother_tongue ||
      !formData.otherDetails.nationality ||
      !formData.otherDetails.blood_group
    ) {
      alert("Please fill all the required fields in Other Details section!");
      return;
    } else {
      console.log(formData);
      await updateDataOtherDetails();
    }
  };

  useEffect(() => {
    preData();
  }, []);

  return (
    <div>
      <div className="container">
        <h1 className="mb-3">StudentDetails Form</h1>
        <form onSubmit={handleSubmitDetails}>
          <div className="mb-3">
            <label htmlFor="student_id" className="form-label">
              Student ID:
            </label>
            <input
              type="text"
              id="student_id"
              name="details.student_id"
              value={formData.details?.student_id}
              // onChange={handleChange}
              disabled
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="reporting_date" className="form-label">
              Reporting Date:
            </label>
            <input
              type="text"
              id="reporting_date"
              name="details.reporting_date"
              value={formData.details?.reporting_date}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="admission_type" className="form-label">
              Admission Type:
            </label>
            <input
              type="text"
              id="admission_type"
              name="details.admission_type"
              value={formData.details?.admission_type}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="first_name" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              id="first_name"
              name="details.first_name"
              value={formData.details?.first_name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="middle_name" className="form-label">
              Middle Name:
            </label>
            <input
              type="text"
              id="middle_name"
              name="details.middle_name"
              value={formData.details?.middle_name}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="last_name" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              id="last_name"
              name="details.last_name"
              value={formData.details?.last_name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="name_format" className="form-label">
              Name Format:
            </label>
            <input
              type="text"
              id="name_format"
              name="details.name_format"
              value={formData.details?.name_format}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="full_name" className="form-label">
              Full Name:
            </label>
            <input
              type="text"
              id="full_name"
              name="details.full_name"
              value={formData.details?.full_name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender:
            </label>
            <input
              type="text"
              id="gender"
              name="details.gender"
              value={formData.details?.gender}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="date_of_birth" className="form-label">
              Date of Birth:
            </label>
            <input
              type="text"
              id="date_of_birth"
              name="details.date_of_birth"
              value={formData.details?.date_of_birth}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="birth_place" className="form-label">
              Birth Place:
            </label>
            <input
              type="text"
              id="birth_place"
              name="details.birth_place"
              value={formData.details?.birth_place}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="ACPC_seat_allotment_date" className="form-label">
              ACPC Seat Allotment Date:
            </label>
            <input
              type="text"
              id="ACPC_seat_allotment_date"
              name="details.ACPC_seat_allotment_date"
              value={formData.details?.ACPC_seat_allotment_date}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="isD2D" className="form-label">
              Is D2D:
            </label>
            <input
              type="checkbox"
              id="isD2D"
              name="details.isD2D"
              checked={formData.details?.isD2D}
              onChange={handleIsD2DChange}
              className="form-check-input"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="enrollment_year" className="form-label">
              Enrollment Year:
            </label>
            <input
              type="text"
              id="enrollment_year"
              name="details.enrollment_year"
              value={formData.details?.enrollment_year}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="degree" className="form-label">
              Degree:
            </label>
            <input
              type="text"
              id="degree"
              name="details.degree"
              value={formData.details?.degree}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="qualifying_exam_roll_number" className="form-label">
              Qualifying Exam Roll Number:
            </label>
            <input
              type="text"
              id="qualifying_exam_roll_number"
              name="details.qualifying_exam_roll_number"
              value={formData.details?.qualifying_exam_roll_number}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="session_number" className="form-label">
              Session Number:
            </label>
            <input
              type="text"
              id="session_number"
              name="details.session_number"
              value={formData.details?.session_number}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="batch_year" className="form-label">
              Batch Year:
            </label>
            <input
              type="text"
              id="batch_year"
              name="details.batch_year"
              value={formData.details?.batch_year}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="old_student_id" className="form-label">
              Old Student ID:
            </label>
            <input
              type="text"
              id="old_student_id"
              name="details.old_student_id"
              value={formData.details?.old_student_id}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cast_category" className="form-label">
              Cast Category:
            </label>
            <input
              type="text"
              id="cast_category"
              name="details.cast_category"
              value={formData.details?.cast_category}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="student_email" className="form-label">
              Student Email:
            </label>
            <input
              type="email"
              id="student_email"
              name="details.student_email"
              value={formData.details?.student_email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="student_roll_number" className="form-label">
              Student Roll Number:
            </label>
            <input
              type="text"
              id="student_roll_number"
              name="details.student_roll_number"
              value={formData.details?.student_roll_number}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {status !== "" && <p>{status}</p>}
        </form>
      </div>
      <div className="container">
        <h1 className="mb-3">Student Details Form</h1>
        <form onSubmit={handleSubmitGuardian}>
          <div className="mb-3">
            <label htmlFor="student_id" className="form-label">
              Student ID:
            </label>
            <input
              type="text"
              id="student_id"
              name="guardian.student_id"
              value={formData.guardian?.student_id}
              onChange={handleChange}
              disabled
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="father_name" className="form-label">
              Father's Name:
            </label>
            <input
              type="text"
              id="father_name"
              name="guardian.father_name"
              value={formData.guardian?.father_name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="father_occupation" className="form-label">
              Father's Occupation:
            </label>
            <input
              type="text"
              id="father_occupation"
              name="guardian.father_occupation"
              value={formData.guardian?.father_occupation}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="organization_name" className="form-label">
              Organization Name:
            </label>
            <input
              type="text"
              id="organization_name"
              name="guardian.organization_name"
              value={formData.guardian?.organization_name}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="annual_income" className="form-label">
              Annual Income:
            </label>
            <input
              type="text"
              id="annual_income"
              name="guardian.annual_income"
              value={formData.guardian?.annual_income}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {status !== "" && <p>{status}</p>}
        </form>
      </div>
      <div className="container">
        <h1 className="mb-3">Student Details Form</h1>
        <form onSubmit={handleSubmitAcademics}>
          <div className="mb-3">
            <label htmlFor="student_id" className="form-label">
              Student ID:
            </label>
            <input
              type="text"
              id="student_id"
              name="academic.student_id"
              value={formData.academic?.student_id}
              onChange={handleChange}
              disabled
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="medium_of_exam" className="form-label">
              Medium of Exam:
            </label>
            <input
              type="text"
              id="medium_of_exam"
              name="academic.medium_of_exam"
              value={formData.academic?.medium_of_exam}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="seat_number" className="form-label">
              Seat Number:
            </label>
            <input
              type="text"
              id="seat_number"
              name="academic.seat_number"
              value={formData.academic?.seat_number}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="passing_year" className="form-label">
              Passing Year:
            </label>
            <input
              type="text"
              id="passing_year"
              name="academic.passing_year"
              value={formData.academic?.passing_year}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="passing_month" className="form-label">
              Passing Month:
            </label>
            <input
              type="text"
              id="passing_month"
              name="academic.passing_month"
              value={formData.academic?.passing_month}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="board" className="form-label">
              Board:
            </label>
            <input
              type="text"
              id="board"
              name="academic.board"
              value={formData.academic?.board}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="institute_name" className="form-label">
              Institute Name:
            </label>
            <input
              type="text"
              id="institute_name"
              name="academic.institute_name"
              value={formData.academic?.institute_name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="result_type" className="form-label">
              Result Type:
            </label>
            <input
              type="text"
              id="result_type"
              name="academic.result_type"
              value={formData.academic?.result_type}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="result" className="form-label">
              Result:
            </label>
            <input
              type="text"
              id="result"
              name="academic.result"
              value={formData.academic?.result}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {status !== "" && <p>{status}</p>}
        </form>
      </div>
      <div className="container">
        <h1 className="mb-3">Student Details Form</h1>
        <form onSubmit={handleSubmitContact}>
          <div className="mb-3">
            <label htmlFor="student_id" className="form-label">
              Student ID:
            </label>
            <input
              type="text"
              id="student_id"
              name="contact.student_id"
              value={formData.contact?.student_id}
              onChange={handleChange}
              disabled
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address_line_1" className="form-label">
              Address Line 1:
            </label>
            <input
              type="text"
              id="address_line_1"
              name="contact.address_line_1"
              value={formData.contact?.address_line_1}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address_line_2" className="form-label">
              Address Line 2:
            </label>
            <input
              type="text"
              id="address_line_2"
              name="contact.address_line_2"
              value={formData.contact?.address_line_2}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address_line_3" className="form-label">
              Address Line 3:
            </label>
            <input
              type="text"
              id="address_line_3"
              name="contact.address_line_3"
              value={formData.contact?.address_line_3}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="contact.city"
              value={formData.contact?.city}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="state" className="form-label">
              State:
            </label>
            <input
              type="text"
              id="state"
              name="contact.state"
              value={formData.contact?.state}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="pincode" className="form-label">
              Pincode:
            </label>
            <input
              type="text"
              id="pincode"
              name="contact.pincode"
              value={formData.contact?.pincode}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Country:
            </label>
            <input
              type="text"
              id="country"
              name="contact.country"
              value={formData.contact?.country}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mobile_number" className="form-label">
              Mobile Number:
            </label>
            <input
              type="text"
              id="mobile_number"
              name="contact.mobile_number"
              value={formData.contact?.mobile_number}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="alternate_mobile_number" className="form-label">
              Alternate Mobile Number:
            </label>
            <input
              type="text"
              id="alternate_mobile_number"
              name="contact.alternate_mobile_number"
              value={formData.contact?.alternate_mobile_number}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="contact.email"
              value={formData.contact?.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="local_address_line_1" className="form-label">
              Local Address Line 1:
            </label>
            <input
              type="text"
              id="local_address_line_1"
              name="contact.local_address_line_1"
              value={formData.contact?.local_address_line_1}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="local_address_line_2" className="form-label">
              Local Address Line 2:
            </label>
            <input
              type="text"
              id="local_address_line_2"
              name="contact.local_address_line_2"
              value={formData.contact?.local_address_line_2}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="local_address_line_3" className="form-label">
              Local Address Line 3:
            </label>
            <input
              type="text"
              id="local_address_line_3"
              name="contact.local_address_line_3"
              value={formData.contact?.local_address_line_3}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="local_city" className="form-label">
              Local City:
            </label>
            <input
              type="text"
              id="local_city"
              name="contact.local_city"
              value={formData.contact?.local_city}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {status !== "" && <p>{status}</p>}
        </form>
      </div>
      <div className="container">
        <h1 className="mb-3">Student Payment Details Form</h1>
        <form onSubmit={handleSubmitFees}>
          <div className="mb-3">
            <label htmlFor="student_id" className="form-label">
              Student ID:
            </label>
            <input
              type="text"
              id="student_id"
              name="fees.student_id"
              value={formData.fees?.student_id}
              onChange={handleChange}
              disabled
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="txn_date" className="form-label">
              Transaction Date:
            </label>
            <input
              type="text"
              id="txn_date"
              name="fees.txn_date"
              value={formData.fees?.txn_date}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="voucher_number" className="form-label">
              Voucher Number:
            </label>
            <input
              type="text"
              id="voucher_number"
              name="fees.voucher_number"
              value={formData.fees?.voucher_number}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="batch_year" className="form-label">
              Batch Year:
            </label>
            <input
              type="text"
              id="batch_year"
              name="fees.batch_year"
              value={formData.fees?.batch_year}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="session_no" className="form-label">
              Session Number:
            </label>
            <input
              type="text"
              id="session_no"
              name="fees.session_no"
              value={formData.fees?.session_no}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="admission_type" className="form-label">
              Admission Type:
            </label>
            <input
              type="text"
              id="admission_type"
              name="fees.admission_type"
              value={formData.fees?.admission_type}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="fees_amount" className="form-label">
              Fees Amount:
            </label>
            <input
              type="text"
              id="fees_amount"
              name="fees.fees_amount"
              value={formData.fees?.fees_amount}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="txn_status" className="form-label">
              Transaction Status:
            </label>
            <input
              type="text"
              id="txn_status"
              name="fees.txn_status"
              value={formData.fees?.txn_status}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="payment_mode" className="form-label">
              Payment Mode:
            </label>
            <input
              type="text"
              id="payment_mode"
              name="fees.payment_mode"
              value={formData.fees?.payment_mode}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cheque_number" className="form-label">
              Cheque Number:
            </label>
            <input
              type="text"
              id="cheque_number"
              name="fees.cheque_number"
              value={formData.fees?.cheque_number}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cheque_date" className="form-label">
              Cheque Date:
            </label>
            <input
              type="text"
              id="cheque_date"
              name="fees.cheque_date"
              value={formData.fees?.cheque_date}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="bank_name" className="form-label">
              Bank Name:
            </label>
            <input
              type="text"
              id="bank_name"
              name="fees.bank_name"
              value={formData.fees?.bank_name}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="paid_date" className="form-label">
              Paid Date:
            </label>
            <input
              type="text"
              id="paid_date"
              name="fees.paid_date"
              value={formData.fees?.paid_date}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="reconsile_date" className="form-label">
              Reconciliation Date:
            </label>
            <input
              type="text"
              id="reconsile_date"
              name="fees.reconsile_date"
              value={formData.fees?.reconsile_date}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="reconsile_number" className="form-label">
              Reconciliation Number:
            </label>
            <input
              type="text"
              id="reconsile_number"
              name="fees.reconsile_number"
              value={formData.fees?.reconsile_number}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {status !== "" && <p>{status}</p>}
        </form>
      </div>
      <div className="container">
        <h1 className="mb-3">Student Personal Details Form</h1>
        <form onSubmit={handleSubmitOtherDetails}>
          <div className="mb-3">
            <label htmlFor="student_id" className="form-label">
              Student ID:
            </label>
            <input
              type="text"
              id="student_id"
              name="otherDetails.student_id"
              value={formData.otherDetails?.student_id}
              onChange={handleChange}
              disabled
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="sub_cast" className="form-label">
              Sub-Caste:
            </label>
            <input
              type="text"
              id="sub_cast"
              name="otherDetails.sub_cast"
              value={formData.otherDetails?.sub_cast}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="marital_status" className="form-label">
              Marital Status:
            </label>
            <input
              type="text"
              id="marital_status"
              name="otherDetails.marital_status"
              value={formData.otherDetails?.marital_status}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mother_tongue" className="form-label">
              Mother Tongue:
            </label>
            <input
              type="text"
              id="mother_tongue"
              name="otherDetails.mother_tongue"
              value={formData.otherDetails?.mother_tongue}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="nationality" className="form-label">
              Nationality:
            </label>
            <input
              type="text"
              id="nationality"
              name="otherDetails.nationality"
              value={formData.otherDetails?.nationality}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="blood_group" className="form-label">
              Blood Group:
            </label>
            <input
              type="text"
              id="blood_group"
              name="otherDetails.blood_group"
              value={formData.otherDetails?.blood_group}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {status !== "" && <p>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Update_Student;
