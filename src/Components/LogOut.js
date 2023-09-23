import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App';

function LogOut() {
    const { setIsLoggedIn } = useContext(AppContext);
    const LogOut = () => {
        localStorage.removeItem("role");
        localStorage.removeItem("id");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        setIsLoggedIn(false);
    }

  return (
      <>
        <div className='w-5/6 flex flex-col items-center'>
            <h2 className='text-lg font-mono font-extrabold text-center'>
                Are you sure you want to LogOut?
            </h2>
            <button onClick={LogOut} className='py-2 px-4 bg-blue-500 text-white rounded-md mt-4'>
                LogOut
            </button>
        </div>
      </>
  )
}

export default LogOut