import React from 'react';
import './tto_form.css';

function TTO_Form() {
  return (
    <div className="container">
      <h1>TTODetails Form</h1>
      <form action="/submit" method="POST">
        <div>
          <label htmlFor="tto_id">TTO ID:</label>
          <input type="text" id="tto_id" name="tto_id" required />
        </div>
        <div>
          <label htmlFor="tto_name">TTO Name:</label>
          <input type="text" id="tto_name" name="tto_name" required />
        </div>
        <div>
          <label htmlFor="tto_email">TTO Email:</label>
          <input type="email" id="tto_email" name="tto_email" required />
        </div>
        <div>
          <label htmlFor="tto_mobile_number">TTO Mobile Number:</label>
          <input type="tel" id="tto_mobile_number" name="tto_mobile_number" required />
        </div>
        <div>
          <label htmlFor="tto_experience">TTO Experience:</label>
          <input type="text" id="tto_experience" name="tto_experience" required />
        </div>
        <div>
          <label htmlFor="tto_qualification">TTO Qualification:</label>
          <input type="text" id="tto_qualification" name="tto_qualification" required />
        </div>
        <div>
          <label htmlFor="tto_designation">TTO Designation:</label>
          <input type="text" id="tto_designation" name="tto_designation" required />
        </div>
        <div>
          <label htmlFor="tto_department">TTO Department:</label>
          <input type="text" id="tto_department" name="tto_department" required />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default TTO_Form;
