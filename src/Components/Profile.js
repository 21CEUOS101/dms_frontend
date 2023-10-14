import React from 'react';
import './Profile.css'; // Import your CSS file with styles

function Profile(props) {
  const user = props.data;

  return (
    <div className="profile-container">
      <div className="profile-table">
        <table>
          <tbody>
            {Object.keys(user).map((key, index) => (
              <tr key={index} className="profile-row">
                <td className="profile-cell key-cell">
                  {key}
                </td>
                <td className="profile-cell colon-cell">:</td>
                <td className="profile-cell value-cell">
                  {user[key]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
