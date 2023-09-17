import React from 'react'

function HOD_Form() {
  return (
    <div class="col-xxl">
        <div class="card mb-4">
            <div class="card-header d-flex align-items-center justify-content-between">
                <h5 class="mb-0">HODDetails Form</h5>
                <small class="text-muted float-end">Default label</small>
            </div>
            <div class="card-body">
                <form action="/submit" method="POST">
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label" for="hod_id">HOD ID:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="hod_id" name="hod_id" required/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label" for="hod_name">HOD Name:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="hod_name" name="hod_name" required/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label" for="hod_email">HOD Email:</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="hod_email" name="hod_email" required/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label" for="hod_mobile_number">HOD Mobile Number:</label>
                        <div class="col-sm-10">
                            <input type="tel" class="form-control phone-mask" id="hod_mobile_number" name="hod_mobile_number" required/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label" for="hod_experience">HOD Experience:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="hod_experience" name="hod_experience" required/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label" for="hod_qualification">HOD Qualification:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="hod_qualification" name="hod_qualification" required/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label" for="hod_designation">HOD Designation:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="hod_designation" name="hod_designation" required/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label" for="hod_department">HOD Department:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="hod_department" name="hod_department" required/>
                        </div>
                    </div>
                    <div class="row justify-content-end">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default HOD_Form
