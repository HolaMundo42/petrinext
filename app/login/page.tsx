"use client";
import React, { useState } from "react";
import Link from "next/link";
import RememberMeCheckbox from "../components/RememberMeCheckbox";
import BackgroundRight from "../components/bg_right";
import PasswordInput from "../components/PasswordInput";

function EmailInput() {
  return (
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
        Email
      </label>
      <input
        type="email"
        placeholder="petrilab@example.com"
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-txtbox_bg_color border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </div>
  );
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div className="relative flex flex-col md:flex-row items-stretch md:h-screen overflow-hidden bg-gray-100">
      <div className="w-full h-screen md:w-96 md:flex-shrink-0 bg-bg_color rounded-md shadow-md">
        <div className="flex flex-col justify-center items-center h-[100vh] p-8 md:p-16">
          <h1 className="text-3xl font-bold text-center text-gray-700">PetriLab</h1>
          <form className="mt-6 w-full max-w-sm">
            <EmailInput />
            
            <PasswordInput
              label="Password"
              type="password"
              showPassword={showPassword}
              handlePasswordToggle={handlePasswordToggle}
            />
            
            <RememberMeCheckbox htmlFor="RememberMe"/>
            
            <Link href="/forgot" className="text-xs text-blue-600 hover:underline">
              Forgot Password?
            </Link>
            
            <div className="mt-2">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Login
              </button>
            </div>
            
            <p className="mt-4 text-sm text-center text-gray-700">
              Don't have an account?{" "}
              <Link href="/signup" className="font-medium text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
            
            <div className="my-4 border-b border-gray-300"></div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 flex items-center justify-center text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none">
                Sign In with Google
              </button>
            </div>
            
            <div className="mt-6">
              <button className="w-full px-4 py-2 flex items-center justify-center text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none">
                Sign In with Apple
              </button>
            </div>
          </form>
        </div> 
      </div>
      <BackgroundRight/>      
    </div>
  );
}
