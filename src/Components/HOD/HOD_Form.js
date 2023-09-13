import React from 'react'

function HOD_Form() {
  return (
    <div>
    <h1>HODDetails Form</h1>
    <form action="/submit" method="POST">
        <div>
            <label for="hod_id">HOD ID:</label>
            <input type="text" id="hod_id" name="hod_id" required/>
        </div>
        <div>
            <label for="hod_name">HOD Name:</label>
            <input type="text" id="hod_name" name="hod_name" required/>
        </div>
        <div>
            <label for="hod_email">HOD Email:</label>
            <input type="email" id="hod_email" name="hod_email" required/>
        </div>
        <div>
            <label for="hod_mobile_number">HOD Mobile Number:</label>
            <input type="tel" id="hod_mobile_number" name="hod_mobile_number" required/>
        </div>
        <div>
            <label for="hod_experience">HOD Experience:</label>
            <input type="text" id="hod_experience" name="hod_experience" required/>
        </div>
        <div>
            <label for="hod_qualification">HOD Qualification:</label>
            <input type="text" id="hod_qualification" name="hod_qualification" required/>
        </div>
        <div>
            <label for="hod_designation">HOD Designation:</label>
            <input type="text" id="hod_designation" name="hod_designation" required/>
        </div>
        <div>
            <label for="hod_department">HOD Department:</label>
            <input type="text" id="hod_department" name="hod_department" required/>
        </div>
        <div>
            <input type="submit" value="Submit"/>
        </div>
    </form>
    </div>
  )
}

export default HOD_Form
