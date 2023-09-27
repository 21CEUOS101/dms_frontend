import React from 'react';

function Profile(props) {
  const user = props.data;

  return (
    <div className="bg-white shadow-md rounded my-6">
      <div className="p-4">
        <table className="min-w-max w-full table-auto">
          <tbody className="text-gray-600 text-sm font-light">
            {Object.keys(user).map((key, index) => {
              if (index !== 0) {
                return (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap font-bold">{key}:</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user[key]}</td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
