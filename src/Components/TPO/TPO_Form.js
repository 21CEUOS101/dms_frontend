import React from 'react'

function TPO_Form() {
  return (
    <div>
    <h1>TPODetails Form</h1>
    <form action="/submit" method="POST">
        <div>
            <label for="tpo_id">TPO ID:</label>
            <input type="text" id="tpo_id" name="tpo_id" required/>
        </div>
        <div>
            <label for="tpo_name">TPO Name:</label>
            <input type="text" id="tpo_name" name="tpo_name" required/>
        </div>
        <div>
            <label for="tpo_email">TPO Email:</label>
            <input type="email" id="tpo_email" name="tpo_email" required/>
        </div>
        <div>
            <label for="tpo_mobile_number">TPO Mobile Number:</label>
            <input type="tel" id="tpo_mobile_number" name="tpo_mobile_number" required/>
        </div>
        <div>
            <label for="tpo_experience">TPO Experience:</label>
            <input type="text" id="tpo_experience" name="tpo_experience" required/>
        </div>
        <div>
            <label for="tpo_qualification">TPO Qualification:</label>
            <input type="text" id="tpo_qualification" name="tpo_qualification" required/>
        </div>
        <div>
            <label for="tpo_designation">TPO Designation:</label>
            <input type="text" id="tpo_designation" name="tpo_designation" required/>
        </div>
        <div>
            <label for="tpo_department">TPO Department:</label>
            <input type="text" id="tpo_department" name="tpo_department" required/>
        </div>
        <div>
            <input type="submit" value="Submit"/>
        </div>
    </form>
    </div>
  )
}

export default TPO_Form
