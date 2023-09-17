import React from 'react';
import './profileStyles.css';

function Profile(props) {
  const user = props.data;

  return (
    <div className="profile-container w-auto">
      {Object?.keys(user)?.map((key,index) => {
        if (index !== 0)
        {
          return (
            <div className="profile-info" key={index}>
              <span className="profile-key">{key}:</span>
              <span className="profile-value">{JSON.stringify(user[key])}</span>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Profile;
