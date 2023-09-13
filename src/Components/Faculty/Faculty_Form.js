import React from 'react'

function Faculty_Form() {
  return (
    <div>
      <h1>FacultyDetails Form</h1>
      <form action="/submit" method="POST">
        <div>
          <label htmlFor="faculty_id">Faculty ID:</label>
          <input type="text" id="faculty_id" name="faculty_id" required />
        </div>
        <div>
          <label htmlFor="faculty_name">Faculty Name:</label>
          <input type="text" id="faculty_name" name="faculty_name" required />
        </div>
        <div>
          <label htmlFor="faculty_email">Faculty Email:</label>
          <input type="email" id="faculty_email" name="faculty_email" required />
        </div>
        <div>
          <label htmlFor="faculty_mobile_number">Faculty Mobile Number:</label>
          <input type="tel" id="faculty_mobile_number" name="faculty_mobile_number" required />
        </div>
        <div>
          <label htmlFor="faculty_experience">Faculty Experience:</label>
          <input type="text" id="faculty_experience" name="faculty_experience" required />
        </div>
        <div>
          <label htmlFor="faculty_qualification">Faculty Qualification:</label>
          <input type="text" id="faculty_qualification" name="faculty_qualification" required />
        </div>
        <div>
          <label htmlFor="faculty_designation">Faculty Designation:</label>
          <input type="text" id="faculty_designation" name="faculty_designation" required />
        </div>
        <div>
          <label htmlFor="faculty_department">Faculty Department:</label>
          <input type="text" id="faculty_department" name="faculty_department" required />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default Faculty_Form
