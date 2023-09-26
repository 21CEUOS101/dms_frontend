import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import Swal from 'sweetalert2'; // Import SweetAlert2

function LogOut() {
  const { setIsLoggedIn } = useContext(AppContext);

  const handleLogOut = () => {
    Swal.fire({
      title: 'Confirm Log Out',
      text: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log out',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Yes, log out"
        localStorage.removeItem('role');
        localStorage.removeItem('id');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('secretKey');
        localStorage.removeItem('selectedSession');
        setIsLoggedIn(false);
        Swal.fire('Logged Out', 'You have been logged out', 'success');
      }
    });
  };

  return (
    <>
      <div className='w-5/6 flex flex-col items-center'>
        <h2 className='text-lg font-mono font-extrabold text-center'>
          Are you sure you want to Log Out?
        </h2>
        <button
          onClick={handleLogOut} // Use the updated function with the confirmation dialog
          className='py-2 px-4 bg-blue-500 text-white rounded-md mt-4'
        >
          Log Out
        </button>
      </div>
    </>
  );
}

export default LogOut;
