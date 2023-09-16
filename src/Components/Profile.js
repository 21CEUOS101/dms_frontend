// Profile.js

import React from 'react';
import './profileStyles.css';

function Profile(props) {
  const user = props.data;

  return (
    <div className="container bootstrap snippets bootdeys">
      <div className="row" id="user-profile">
        {/* Centered Profile Box */}
        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
          <div className="main-box clearfix">
            <h2>John Doe</h2>
            <img
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
              className="profile-img img-responsive center-block"
            />
            <div className="profile-label">
              <span className="label label-danger">Admin</span>
            </div>

            {/* User Details */}
            <div className="profile-user-details">
              <div className="row">
                <div className="col-md-6">
                  <div className="profile-user-details-item">
                    <span className="label">Name:</span> {user.tto_name}
                  </div>
                  <div className="profile-user-details-item">
                    <span className="label">Email:</span> {user.tto_email}
                  </div>
                  <div className="profile-user-details-item">
                    <span className="label">Phone number:</span> {user.tto_mobile_number}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="profile-user-details-item">
                    <span className="label">Experience:</span> {user.tto_experience}
                  </div>
                  <div className="profile-user-details-item">
                    <span className="label">Qualification:</span> {user.tto_qualification}
                  </div>
                  <div className="profile-user-details-item">
                    <span className="label">Designation:</span> {user.tto_designation}
                  </div>
                  <div className="profile-user-details-item">
                    <span className="label">Department:</span> {user.tto_department}
                  </div>
                </div>
              </div>
            </div>
            {/* End of User Details */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
