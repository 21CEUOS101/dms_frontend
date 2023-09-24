import React, { useEffect, useState } from 'react';

function HomePage() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem("id");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center w-screen">
      <h1 className="text-3xl font-semibold text-gray-700 mb-4">
        Welcome to the University Management System
      </h1>
      <p className="text-xl text-gray-600">
        Hello, {userName || 'Guest'}!
      </p>
      <p className="text-gray-500 mt-2">
        Manage various aspects of the university with ease.
      </p>
    </div>
  );
}

export default HomePage;
