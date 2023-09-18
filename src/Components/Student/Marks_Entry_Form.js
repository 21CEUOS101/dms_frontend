import React from 'react'

function Marks_Entry_Form() {
  return (
      <>
        <h1>Student Exam Result Form</h1>
      <form action="/submit" method="POST">
        <div>
          <label htmlFor="student_id">Student ID:</label>
          <input type="text" id="student_id" name="student_id" required />
        </div>
        <div>
          <label htmlFor="semester">Semester:</label>
          <input type="number" id="semester" name="semester" required />
        </div>
        <div>
          <label htmlFor="batch_year">Batch Year:</label>
          <input type="number" id="batch_year" name="batch_year" required />
        </div>
        <div>
          <label htmlFor="subject_code">Subject Code:</label>
          <input type="text" id="subject_code" name="subject_code" required />
        </div>
        <div>
          <label htmlFor="subject_name">Subject Name:</label>
          <input type="text" id="subject_name" name="subject_name" required />
        </div>
        <div>
          <label htmlFor="sessional1_marks">Sessional 1 Marks:</label>
          <input type="number" id="sessional1_marks" name="sessional1_marks" required />
        </div>
        <div>
          <label htmlFor="sessional2_marks">Sessional 2 Marks:</label>
          <input type="number" id="sessional2_marks" name="sessional2_marks" required />
        </div>
        <div>
          <label htmlFor="sessional3_marks">Sessional 3 Marks:</label>
          <input type="number" id="sessional3_marks" name="sessional3_marks" required />
        </div>
        <div>
          <label htmlFor="sessional1_present">Sessional 1 Present:</label>
          <input type="text" id="sessional1_present" name="sessional1_present" required />
        </div>
        <div>
          <label htmlFor="sessional2_present">Sessional 2 Present:</label>
          <input type="text" id="sessional2_present" name="sessional2_present" required />
        </div>
        <div>
          <label htmlFor="sessional3_present">Sessional 3 Present:</label>
          <input type="text" id="sessional3_present" name="sessional3_present" required />
        </div>
        <div>
          <label htmlFor="sessional1_attendance">Sessional 1 Attendance:</label>
          <input type="number" id="sessional1_attendance" name="sessional1_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional2_attendance">Sessional 2 Attendance:</label>
          <input type="number" id="sessional2_attendance" name="sessional2_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional3_attendance">Sessional 3 Attendance:</label>
          <input type="number" id="sessional3_attendance" name="sessional3_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional1_total_attendance">Sessional 1 Total Attendance:</label>
          <input type="number" id="sessional1_total_attendance" name="sessional1_total_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional2_total_attendance">Sessional 2 Total Attendance:</label>
          <input type="number" id="sessional2_total_attendance" name="sessional2_total_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional3_total_attendance">Sessional 3 Total Attendance:</label>
          <input type="number" id="sessional3_total_attendance" name="sessional3_total_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional1_practical_attendance">Sessional 1 Practical Attendance:</label>
          <input type="number" id="sessional1_practical_attendance" name="sessional1_practical_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional2_practical_attendance">Sessional 2 Practical Attendance:</label>
          <input type="number" id="sessional2_practical_attendance" name="sessional2_practical_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional3_practical_attendance">Sessional 3 Practical Attendance:</label>
          <input type="number" id="sessional3_practical_attendance" name="sessional3_practical_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional1_total_practical_attendance">Sessional 1 Total Practical Attendance:</label>
          <input type="number" id="sessional1_total_practical_attendance" name="sessional1_total_practical_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional2_total_practical_attendance">Sessional 2 Total Practical Attendance:</label>
          <input type="number" id="sessional2_total_practical_attendance" name="sessional2_total_practical_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional3_total_practical_attendance">Sessional 3 Total Practical Attendance:</label>
          <input type="number" id="sessional3_total_practical_attendance" name="sessional3_total_practical_attendance" required />
        </div>
        <div>
          <label htmlFor="block_marks">Block Marks:</label>
          <input type="number" id="block_marks" name="block_marks" required />
        </div>
        <div>
          <label htmlFor="block_present">Block Present:</label>
          <input type="text" id="block_present" name="block_present" required />
        </div>
        <div>
          <label htmlFor="external_marks">External Marks:</label>
          <input type="number" id="external_marks" name="external_marks" required />
        </div>
        <div>
          <label htmlFor="external_status">External Status:</label>
          <input type="text" id="external_status" name="external_status" required />
        </div>
        <div>
          <label htmlFor="avg_sessional_marks">Average Sessional Marks:</label>
          <input type="number" id="avg_sessional_marks" name="avg_sessional_marks" required />
        </div>
        <div>
          <label htmlFor="sessional_status">Sessional Status:</label>
          <input type="text" id="sessional_status" name="sessional_status" required />
        </div>
        <div>
          <label htmlFor="avg_practical_marks">Average Practical Marks:</label>
          <input type="number" id="avg_practical_marks" name="avg_practical_marks" required />
        </div>
        <div>
          <label htmlFor="practical_status">Practical Status:</label>
          <input type="text" id="practical_status" name="practical_status" required />
        </div>
        <div>
          <label htmlFor="termwork_marks">Termwork Marks:</label>
          <input type="number" id="termwork_marks" name="termwork_marks" required />
        </div>
        <div>
          <label htmlFor="termwork_status">Termwork Status:</label>
          <input type="text" id="termwork_status" name="termwork_status" required />
        </div>
        <div>
          <label htmlFor="total_marks">Total Marks:</label>
          <input type="number" id="total_marks" name="total_marks" required />
        </div>
        <div>
          <label htmlFor="max_total_marks">Max Total Marks:</label>
          <input type="number" id="max_total_marks" name="max_total_marks" required />
        </div>
        <div>
          <label htmlFor="subject_points">Subject Points:</label>
          <input type="number" id="subject_points" name="subject_points" required />
        </div>
        <div>
          <label htmlFor="subject_grade">Subject Grade:</label>
          <input type="text" id="subject_grade" name="subject_grade" required />
        </div>
        <div>
          <label htmlFor="subject_credit">Subject Credit:</label>
          <input type="number" id="subject_credit" name="subject_credit" required />
        </div>
        <div>
          <label htmlFor="subject_status">Subject Status:</label>
          <input type="text" id="subject_status" name="subject_status" required />
        </div>
        <div>
          <label htmlFor="spi_credit">SPI Credit:</label>
          <input type="number" id="spi_credit" name="spi_credit" required />
        </div>
        <div>
          <label htmlFor="spi_points">SPI Points:</label>
          <input type="number" id="spi_points" name="spi_points" required />
        </div>
        <div>
          <label htmlFor="spi">SPI:</label>
          <input type="number" id="spi" name="spi" required />
        </div>
        <div>
          <label htmlFor="cpi_credit">CPI Credit:</label>
          <input type="number" id="cpi_credit" name="cpi_credit" required />
        </div>
        <div>
          <label htmlFor="cpi_points">CPI Points:</label>
          <input type="number" id="cpi_points" name="cpi_points" required />
        </div>
        <div>
          <label htmlFor="cpi">CPI:</label>
          <input type="number" id="cpi" name="cpi" required />
        </div>
        <div>
          <label htmlFor="result_status">Result Status:</label>
          <input type="text" id="result_status" name="result_status" required />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
      </>
  )
}

export default Marks_Entry_Form