// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/login');
      }
    });

    return unsubscribe;
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
        {user ? <p>Welcome, {user.email}</p> : <p>Loading...</p>}
        <button
          onClick={() => auth.signOut()}
          className="mt-6 w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
