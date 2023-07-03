"use client";
import Link from "next/link";
import React, { useState } from "react";
import PasswordToggle from "../components/PasswordToggle";
import RememberMeCheckbox from "../components/RememberMeCheckbox";

interface FormInputProps {
  label: string;
  type: string;
  showPassword: boolean;
  handlePasswordToggle: () => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  showPassword,
  handlePasswordToggle,
}) => (
  <div className="mb-4">
    <label htmlFor={label.toLowerCase()} className="block text-sm font-semibold text-gray-800">
      {label}
    </label>
    <div className="mb-2 relative">
      <input
        type={type === "password" && showPassword ? "text" : type}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-txtbox_bg_color border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
      {type === "password" && (
        <PasswordToggle showPassword={showPassword} handlePasswordToggle={handlePasswordToggle} />
      )}
    </div>
  </div>
);

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handlePasswordToggle2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div className="relative flex flex-col md:flex-row items-stretch md:h-screen overflow-hidden bg-gray-100">
      <div className="w-full md:w-96 md:flex-shrink-0 bg-txtbox_bg_color rounded-md shadow-md">
        <div className="flex flex-col justify-center items-center h-auto p-8 md:p-16">
          <h1 className="text-3xl font-bold text-center text-gray-700">PetriLab</h1>
          <form className="mt-6 w-full max-w-sm">
            <FormInput
              label="Name"
              type="text"
              showPassword={showPassword}
              handlePasswordToggle={handlePasswordToggle}
            />
            <FormInput
              label="Email"
              type="email"
              showPassword={showPassword}
              handlePasswordToggle={handlePasswordToggle}
            />
            <FormInput
              label="Password"
              type="password"
              showPassword={showPassword}
              handlePasswordToggle={handlePasswordToggle}
            />
            <FormInput
              label="Check Password"
              type="password"
              showPassword={showPassword2}
              handlePasswordToggle={handlePasswordToggle2}
            />
            <div className="flex items-center mb-4">
              <RememberMeCheckbox label="I agree to the terms and conditions" htmlFor="terms" />
            </div>
            <div className="mt-2">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Sign Up
              </button>
            </div>
            <p className="mt-4 text-sm text-center text-gray-700">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-blue-600 hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="hidden md:block md:flex-1 relative">
        <img
          src="https://besthqwallpapers.com/Uploads/12-2-2022/188648/kfc-red-logo-4k-red-brickwall-kfc-logo-brands.jpg"
          alt="petrilab_bg"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Register;