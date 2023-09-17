import React from 'react'
import '../form.css';
function TPO_Form() {
  return (
    <div className="col-xxl">
        <div className="card mb-4">
            <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="mb-0">TPODetails Form</h5>
            <small className="text-muted float-end">Default label</small>
            </div>
            <div className="card-body">
            <form action="/submit" method="POST">
                <div className="row mb-3">
                <label className="col-sm-5 col-form-label" htmlFor="tpo_id">TPO ID:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="tpo_id" name="tpo_id" required />
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-5 col-form-label" htmlFor="tpo_name">TPO Name:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="tpo_name" name="tpo_name" required />
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-5 col-form-label" htmlFor="tpo_email">TPO Email:</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="tpo_email" name="tpo_email" required />
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-5 col-form-label" htmlFor="tpo_mobile_number">TPO Mobile Number:</label>
                <div className="col-sm-10">
                    <input type="tel" className="form-control phone-mask" id="tpo_mobile_number" name="tpo_mobile_number" required />
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-5 col-form-label" htmlFor="tpo_experience">TPO Experience:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="tpo_experience" name="tpo_experience" required />
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-5 col-form-label" htmlFor="tpo_qualification">TPO Qualification:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="tpo_qualification" name="tpo_qualification" required />
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-5 col-form-label" htmlFor="tpo_designation">TPO Designation:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="tpo_designation" name="tpo_designation" required />
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-5 col-form-label" htmlFor="tpo_department">TPO Department:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="tpo_department" name="tpo_department" required />
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

  )
}

export default TPO_Form
