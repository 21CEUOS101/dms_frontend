import React from 'react';
import './profileStyles.css';

function Profile(props) {
  const user = props.data;

  return (
    <div className="profile-container">
      {Object.keys(user).map((key) => {
        return (
          <div className="profile-info" key={key}>
            <span className="profile-key">{key}:</span>
            <span className="profile-value">{user[key]}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
