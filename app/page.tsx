"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Menu from './components/menu_navbar';
import Link from 'next/link';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-700 py-4">
      <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></script>
      <script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"></script>
        <div className="container mx-auto flex items-center">
          <img src="https://cdn.icon-icons.com/icons2/2379/PNG/512/petri_dish_experimentation_biology_education_petri_dish_icon_143934.png" alt="Petri Dish Icon" className="w-10 h-10 mr-2" />
          <h1 className="text-4xl font-semibold text-white">PetriLab</h1>
          <div className="ml-auto space-x-4">
            <Link href="/signup" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
              Signup
            </Link>
            <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
              Login
            </Link>
          </div>
        </div>
      </header>

      <section className="flex-1 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Features</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition duration-300 transform hover:translate-y-[-5px]">
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600">Our landing page is fully responsive, ensuring it looks great on all devices.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition duration-300 transform hover:translate-y-[-5px]">
              <h3 className="text-xl font-semibold mb-2">Simple and Minimalistic</h3>
              <p className="text-gray-600">We believe in the beauty of simplicity, making the user experience smooth and clutter-free.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition duration-300 transform hover:translate-y-[-5px]">
              <h3 className="text-xl font-semibold mb-2">Built with Modern Tools</h3>
              <p className="text-gray-600">This landing page is powered by Next.js, TypeScript, and Tailwind CSS.</p>
            </div>
          </div>
          <button className="mt-8 px-8 py-4 bg-[rgb(31, 41, 55)] text-white rounded hover:bg-gray-700 transition duration-300">Start Now</button>
        </div>
      </section>

      <footer className="bg-gray-200 py-6">
        <div className="container mx-auto text-center flex flex-col items-center">
          <div className="space-x-4 mb-4">
            <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-800">Terms of Service</Link>
          
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
          
          <button id="instagram" className=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-12 h-12  transform hover:-translate-y-3 rounded-full duration-500 ">
          <i className="fab fa-instagram"></i>
          </button>
          <button id="youtube" className="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-red-500 border-red-500 hover:bg-red-500 hover:text-white text-2xl">
            <i className="fab fa-youtube"></i>
          </button>
          <button id="discord" className="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:text-white text-2xl">
            <i className="fab fa-discord"></i>
          </button>
          <button id="linkedin" className="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-500 border-blue-500  hover:bg-blue-500 hover:text-white text-2xl">
            <i className="fab fa-linkedin-in"></i>
          </button>
          
          </div>          
        </div>
      </footer>

    </div>
  );
};


export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false); // Change the initial value based on your authentication logic

  return (
    <div className={`bg-txtbox_bg_color_2 ${loggedIn ? 'logged-in' : 'anonymous'}`}>
      {loggedIn ? (
        // Content for logged users
        <Menu />
      ) : (
        // Content for anonymous users
        <LandingPage/>
      )}
    </div>
  );
}
