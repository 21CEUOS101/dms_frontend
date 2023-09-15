import React from 'react';
import '../form.css';

function TTO_Form() {
  return (
    <>
      <div className="col-xxl">
      <div className="card mb-4">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="mb-0">TTODetails Form</h5>
        </div>
        <div className="card-body">
          <form action="/submit" method="POST">
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_id">TTO ID:</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="tto_id" name="tto_id" required />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_name">TTO Name:</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="tto_name" name="tto_name" required />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_email">TTO Email:</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="tto_email" name="tto_email" required />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_mobile_number">TTO Mobile Number:</label>
              <div className="col-sm-10">
                <input type="tel" className="form-control phone-mask" id="tto_mobile_number" name="tto_mobile_number" required />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_experience">TTO Experience:</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="tto_experience" name="tto_experience" required />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_qualification">TTO Qualification:</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="tto_qualification" name="tto_qualification" required />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_designation">TTO Designation:</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="tto_designation" name="tto_designation" required />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-5 col-form-label" htmlFor="tto_department">TTO Department:</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="tto_department" name="tto_department" required />
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    </>
  );
}

export default TTO_Form;
