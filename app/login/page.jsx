// pages/login.js
"use client"
import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		
			const response=await axios.post('/api/loginData', { email: email, password: pass });
			// Handle success, e.g., show a success 
			setEmail("")
			setPass("")
      if(response.success)
			console.log('Credentials stored successfully');
		// } catch (error) {
		// 	// Handle error, e.g., show an error message
		// 	console.error('Error storing credentials', error);
		}
	
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 bg-white dark:bg-gray-800 shadow-md rounded-md">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          {/* Your login form fields go here */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 dark:text-white">Email</label>
            <input type="text" onChange={e=>setEmail(e.target.value)} id="username" className="w-full p-2 border rounded-md text-gray-900" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 dark:text-white">Password</label>
            <input type="password" onChange={e=>setPass(e.target.value)} id="password" className="w-full p-2 border rounded-md text-gray-900" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
