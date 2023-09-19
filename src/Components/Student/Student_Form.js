import React from 'react';
import './form.css';

function Student_Form() {
  return (
    <div className='grid grid-cols-2 gap-20'>
      <div className='bg-slate-50 px-10 py-5 h-auto border-2 rounded'>
        <h1 class="text-base font-semibold leading-7 text-gray-900">Student Academic Info Form</h1>

        <form action="/submit" method="POST" class="space-y-12">

          <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="student_id" class="block text-sm font-medium leading-6 text-gray-900">Student ID</label>
                <div class="mt-2">
                  <input type="text" id="student_id" name="student_id" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="medium_of_exam" class="block text-sm font-medium leading-6 text-gray-900">Medium of Exam</label>
                <div class="mt-2">
                  <input type="text" id="medium_of_exam" name="medium_of_exam" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="seat_number" class="block text-sm font-medium leading-6 text-gray-900">Seat Number</label>
                <div class="mt-2">
                  <input type="text" id="seat_number" name="seat_number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="passing_year" class="block text-sm font-medium leading-6 text-gray-900">Passing Year</label>
                <div class="mt-2">
                  <input type="text" id="passing_year" name="passing_year" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="passing_month" class="block text-sm font-medium leading-6 text-gray-900">Passing Month</label>
                <div class="mt-2">
                  <input type="text" id="passing_month" name="passing_month" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="board" class="block text-sm font-medium leading-6 text-gray-900">Board</label>
                <div class="mt-2">
                  <input type="text" id="board" name="board" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="institute_name" class="block text-sm font-medium leading-6 text-gray-900">Institute Name</label>
                <div class="mt-2">
                  <input type="text" id="institute_name" name="institute_name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="result_type" class="block text-sm font-medium leading-6 text-gray-900">Result Type</label>
                <div class="mt-2">
                  <input type="text" id="result_type" name="result_type" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="result" class="block text-sm font-medium leading-6 text-gray-900">Result</label>
                <div class="mt-2">
                  <input type="text" id="result" name="result" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="col-span-full">
                <input type="submit" value="Submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
              </div>
            </div>
          </div>
        </form>
      </div>



      <div class='bg-slate-50 px-10 py-5 h-auto border-2 rounded'>
        <h1 class="text-base font-semibold leading-7 text-gray-900">Student Contact Info Form</h1>

        <form action="/submit" method="POST" class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="student_id" class="block text-sm font-medium leading-6 text-gray-900">Student ID</label>
                <div class="mt-2">
                  <input type="text" id="student_id" name="student_id" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="address_line_1" class="block text-sm font-medium leading-6 text-gray-900">Address Line 1</label>
                <div class="mt-2">
                  <input type="text" id="address_line_1" name="address_line_1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="address_line_2" class="block text-sm font-medium leading-6 text-gray-900">Address Line 2</label>
                <div class="mt-2">
                  <input type="text" id="address_line_2" name="address_line_2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="address_line_3" class="block text-sm font-medium leading-6 text-gray-900">Address Line 3</label>
                <div class="mt-2">
                  <input type="text" id="address_line_3" name="address_line_3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                <div class="mt-2">
                  <input type="text" id="city" name="city" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="state" class="block text-sm font-medium leading-6 text-gray-900">State</label>
                <div class="mt-2">
                  <input type="text" id="state" name="state" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="pincode" class="block text-sm font-medium leading-6 text-gray-900">Pincode</label>
                <div class="mt-2">
                  <input type="text" id="pincode" name="pincode" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                <div class="mt-2">
                  <input type="text" id="country" name="country" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="mobile_number" class="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
                <div class="mt-2">
                  <input type="text" id="mobile_number" name="mobile_number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="alternate_mobile_number" class="block text-sm font-medium leading-6 text-gray-900">Alternate Mobile Number</label>
                <div class="mt-2">
                  <input type="text" id="alternate_mobile_number" name="alternate_mobile_number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div class="mt-2">
                  <input type="email" id="email" name="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="local_address_line_1" class="block text-sm font-medium leading-6 text-gray-900">Local Address Line 1</label>
                <div class="mt-2">
                  <input type="text" id="local_address_line_1" name="local_address_line_1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="local_address_line_2" class="block text-sm font-medium leading-6 text-gray-900">Local Address Line 2</label>
                <div class="mt-2">
                  <input type="text" id="local_address_line_2" name="local_address_line_2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="local_address_line_3" class="block text-sm font-medium leading-6 text-gray-900">Local Address Line 3</label>
                <div class="mt-2">
                  <input type="text" id="local_address_line_3" name="local_address_line_3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="local_city" class="block text-sm font-medium leading-6 text-gray-900">Local City</label>
                <div class="mt-2">
                  <input type="text" id="local_city" name="local_city" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div class="col-span-full">
                <input type="submit" value="Submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
              </div>
            </div>
          </div>
        </form>
      </div>




      <div className='bg-slate-50 px-10 py-5 h-auto border-2 rounded'>
        <h1>Student Details Form</h1>
        <form action="/submit" method="POST">
          <div>
            {/* Field for Reporting Date */}
            <label htmlFor="reporting_date">Reporting Date:</label>
            <input type="text" id="reporting_date" name="reporting_date" required />
          </div>
          <div>
            {/* Field for Admission Type */}
            <label htmlFor="admission_type">Admission Type:</label>
            <input type="text" id="admission_type" name="admission_type" required />
          </div>
          <div>
            {/* Field for First Name */}
            <label htmlFor="first_name">First Name:</label>
            <input type="text" id="first_name" name="first_name" required />
          </div>
          <div>
            {/* Field for Middle Name */}
            <label htmlFor="middle_name">Middle Name:</label>
            <input type="text" id="middle_name" name="middle_name" />
          </div>
          <div>
            {/* Field for Last Name */}
            <label htmlFor="last_name">Last Name:</label>
            <input type="text" id="last_name" name="last_name" required />
          </div>
          <div>
            {/* Field for Name Format */}
            <label htmlFor="name_format">Name Format:</label>
            <input type="text" id="name_format" name="name_format" required />
          </div>
          <div>
            {/* Field for Gender */}
            <label htmlFor="gender">Gender:</label>
            <input type="text" id="gender" name="gender" required />
          </div>
          <div>
            {/* Field for Date of Birth */}
            <label htmlFor="date_of_birth">Date of Birth:</label>
            <input type="text" id="date_of_birth" name="date_of_birth" required />
          </div>
          <div>
            {/* Field for Birth Place */}
            <label htmlFor="birth_place">Birth Place:</label>
            <input type="text" id="birth_place" name="birth_place" required />
          </div>
          <div>
            {/* Field for ACPC Seat Allotment Date */}
            <label htmlFor="ACPC_seat_allotment_date">ACPC Seat Allotment Date:</label>
            <input type="text" id="ACPC_seat_allotment_date" name="ACPC_seat_allotment_date" />
          </div>
          <div>
            {/* Field for isD2D */}
            <label htmlFor="isD2D">Is D2D:</label>
            <input type="checkbox" id="isD2D" name="isD2D" />
          </div>
          <div>
            {/* Field for Enrollment Year */}
            <label htmlFor="enrollment_year">Enrollment Year:</label>
            <input type="text" id="enrollment_year" name="enrollment_year" required />
          </div>
          <div>
            {/* Field for Degree */}
            <label htmlFor="degree">Degree:</label>
            <input type="text" id="degree" name="degree" required />
          </div>
          <div>
            {/* Field for Qualifying Exam Roll Number */}
            <label htmlFor="qualifying_exam_roll_number">Qualifying Exam Roll Number:</label>
            <input type="text" id="qualifying_exam_roll_number" name="qualifying_exam_roll_number" required />
          </div>
          <div>
            {/* Field for Session Number */}
            <label htmlFor="session_number">Session Number:</label>
            <input type="number" id="session_number" name="session_number" required />
          </div>
          <div>
            {/* Field for Batch Year */}
            <label htmlFor="batch_year">Batch Year:</label>
            <input type="text" id="batch_year" name="batch_year" required />
          </div>
          <div>
            {/* Field for Student ID */}
            <label htmlFor="student_id">Student ID:</label>
            <input type="text" id="student_id" name="student_id" required />
          </div>
          <div>
            {/* Field for Old Student ID */}
            <label htmlFor="old_student_id">Old Student ID:</label>
            <input type="text" id="old_student_id" name="old_student_id" />
          </div>
          <div>
            {/* Field for Merit Rank */}
            <label htmlFor="merit_rank">Merit Rank:</label>
            <input type="text" id="merit_rank" name="merit_rank" required />
          </div>
          <div>
            {/* Field for Cast Category */}
            <label htmlFor="cast_category">Cast Category:</label>
            <input type="text" id="cast_category" name="cast_category" required />
          </div>
          <div>
            {/* Field for Student Email */}
            <label htmlFor="student_email">Student Email:</label>
            <input type="email" id="student_email" name="student_email" required />
          </div>
          <div>
            {/* Field for Student Roll Number */}
            <label htmlFor="student_roll_number">Student Roll Number:</label>
            <input type="text" id="student_roll_number" name="student_roll_number" required />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>

      <div className='bg-slate-50 px-10 py-5 h-auto border-2 rounded'>
        <h1>Student Guardian Info Form</h1>
        <form action="/submit" method="POST">
          <div>
            {/* Field for Student ID */}
            <label htmlFor="student_id">Student ID:</label>
            <input type="text" id="student_id" name="student_id" required />
          </div>
          <div>
            {/* Field for Father's Name */}
            <label htmlFor="father_name">Father's Name:</label>
            <input type="text" id="father_name" name="father_name" required />
          </div>
          <div>
            {/* Field for Father's Occupation */}
            <label htmlFor="father_occupation">Father's Occupation:</label>
            <input type="text" id="father_occupation" name="father_occupation" />
          </div>
          <div>
            {/* Field for Organization Name */}
            <label htmlFor="organization_name">Organization Name:</label>
            <input type="text" id="organization_name" name="organization_name" />
          </div>
          <div>
            {/* Field for Annual Income */}
            <label htmlFor="annual_income">Annual Income:</label>
            <input type="text" id="annual_income" name="annual_income" />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>

      <div className='bg-slate-50 px-10 py-5 h-auto border-2 rounded'>
        <h1>Student Fees Info Form</h1>
        <form action="/submit" method="POST">
          <div>
            {/* Field for Student ID */}
            <label htmlFor="student_id">Student ID:</label>
            <input type="text" id="student_id" name="student_id" required />
          </div>
          <div>
            {/* Field for Transaction Date */}
            <label htmlFor="txn_date">Transaction Date:</label>
            <input type="text" id="txn_date" name="txn_date" required />
          </div>
          <div>
            {/* Field for Voucher Number */}
            <label htmlFor="voucher_number">Voucher Number:</label>
            <input type="text" id="voucher_number" name="voucher_number" required />
          </div>
          <div>
            {/* Field for Batch Year */}
            <label htmlFor="batch_year">Batch Year:</label>
            <input type="text" id="batch_year" name="batch_year" required />
          </div>
          <div>
            {/* Field for Session Number */}
            <label htmlFor="session_no">Session Number:</label>
            <input type="number" id="session_no" name="session_no" required />
          </div>
          <div>
            {/* Field for Admission Type */}
            <label htmlFor="admission_type">Admission Type:</label>
            <input type="text" id="admission_type" name="admission_type" required />
          </div>
          <div>
            {/* Field for Fees Amount */}
            <label htmlFor="fees_amount">Fees Amount:</label>
            <input type="number" id="fees_amount" name="fees_amount" required />
          </div>
          <div>
            {/* Field for Transaction Status */}
            <label htmlFor="txn_status">Transaction Status:</label>
            <input type="text" id="txn_status" name="txn_status" required />
          </div>
          <div>
            {/* Field for Payment Mode */}
            <label htmlFor="payment_mode">Payment Mode:</label>
            <input type="text" id="payment_mode" name="payment_mode" required />
          </div>
          <div>
            {/* Field for Cheque Number */}
            <label htmlFor="cheque_number">Cheque Number:</label>
            <input type="text" id="cheque_number" name="cheque_number" />
          </div>
          <div>
            {/* Field for Cheque Date */}
            <label htmlFor="cheque_date">Cheque Date:</label>
            <input type="text" id="cheque_date" name="cheque_date" />
          </div>
          <div>
            {/* Field for Bank Name */}
            <label htmlFor="bank_name">Bank Name:</label>
            <input type="text" id="bank_name" name="bank_name" />
          </div>
          <div>
            {/* Field for Paid Date */}
            <label htmlFor="paid_date">Paid Date:</label>
            <input type="text" id="paid_date" name="paid_date" required />
          </div>
          <div>
            {/* Field for Reconcile Date */}
            <label htmlFor="reconsile_date">Reconcile Date:</label>
            <input type="text" id="reconsile_date" name="reconsile_date" />
          </div>
          <div>
            {/* Field for Reconcile Number */}
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
            {/* Field for Student ID */}
            <label htmlFor="student_id">Student ID:</label>
            <input type="text" id="student_id" name="student_id" required />
          </div>
          <div>
            {/* Field for Sub Cast */}
            <label htmlFor="sub_cast">Sub Cast:</label>
            <input type="text" id="sub_cast" name="sub_cast" />
          </div>
          <div>
            {/* Field for Marital Status */}
            <label htmlFor="marital_status">Marital Status:</label>
            <input type="text" id="marital_status" name="marital_status" />
          </div>
          <div>
            {/* Field for Mother Tongue */}
            <label htmlFor="mother_tongue">Mother Tongue:</label>
            <input type="text" id="mother_tongue" name="mother_tongue" />
          </div>
          <div>
            {/* Field for Nationality */}
            <label htmlFor="nationality">Nationality:</label>
            <input type="text" id="nationality" name="nationality" />
          </div>
          <div>
            {/* Field for Blood Group */}
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
