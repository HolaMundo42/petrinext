'use client';
import React from "react";
import Link from "next/link";
import BackgroundRight from "../components/bg_right";

export default function ForgotPassword() {
const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
};

return (
    <div className="relative flex flex-col md:flex-row items-stretch md:h-screen overflow-hidden bg-gray-100">
    <div className="w-full md:w-96 md:flex-shrink-0 bg-bg_color rounded-md shadow-md">
    <div className="flex flex-col justify-center items-center h-[100vh] p-8 md:p-16">
        <h1 className="text-3xl font-bold text-center text-gray-700">PetriLab</h1>
        <form className="mt-6 w-full max-w-sm" onSubmit={handleSubmit}>
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
            <div className="mt-2">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Reset Password
            </button>
            </div>
            <p className="mt-4 text-sm text-center text-gray-700">
            Remember your password?{" "}
            <Link href="/login" className="font-medium text-blue-600 hover:underline">
                Log in
            </Link>
            </p>
        </form>
        </div>
    </div>
    <BackgroundRight/>
    </div>
);
}
