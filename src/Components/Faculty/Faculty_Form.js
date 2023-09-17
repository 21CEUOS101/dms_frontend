import React from 'react'

function Faculty_Form() {
  return (
    <div className="col-xxl">
      <div className="card mb-4">
          <div className="card-header d-flex align-items-center justify-content-between">
              <h5 className="mb-0">FacultyDetails Form</h5>
              <small className="text-muted float-end">Default label</small>
          </div>
          <div className="card-body">
              <form action="/submit" method="POST">
                  <div className="row mb-3">
                      <label className="col-sm-5 col-form-label" htmlFor="faculty_id">Faculty ID:</label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control" id="faculty_id" name="faculty_id" required />
                      </div>
                  </div>
                  <div className="row mb-3">
                      <label className="col-sm-5 col-form-label" htmlFor="faculty_name">Faculty Name:</label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control" id="faculty_name" name="faculty_name" required />
                      </div>
                  </div>
                  <div className="row mb-3">
                      <label className="col-sm-5 col-form-label" htmlFor="faculty_email">Faculty Email:</label>
                      <div className="col-sm-10">
                          <input type="email" className="form-control" id="faculty_email" name="faculty_email" required />
                      </div>
                  </div>
                  <div className="row mb-3">
                      <label className="col-sm-5 col-form-label" htmlFor="faculty_mobile_number">Faculty Mobile Number:</label>
                      <div className="col-sm-10">
                          <input type="tel" className="form-control phone-mask" id="faculty_mobile_number" name="faculty_mobile_number" required />
                      </div>
                  </div>
                  <div className="row mb-3">
                      <label className="col-sm-5 col-form-label" htmlFor="faculty_experience">Faculty Experience:</label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control" id="faculty_experience" name="faculty_experience" required />
                      </div>
                  </div>
                  <div className="row mb-3">
                      <label className="col-sm-5 col-form-label" htmlFor="faculty_qualification">Faculty Qualification:</label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control" id="faculty_qualification" name="faculty_qualification" required />
                      </div>
                  </div>
                  <div className="row mb-3">
                      <label className="col-sm-5 col-form-label" htmlFor="faculty_designation">Faculty Designation:</label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control" id="faculty_designation" name="faculty_designation" required />
                      </div>
                  </div>
                  <div className="row mb-3">
                      <label className="col-sm-5 col-form-label" htmlFor="faculty_department">Faculty Department:</label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control" id="faculty_department" name="faculty_department" required />
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

export default Faculty_Form
