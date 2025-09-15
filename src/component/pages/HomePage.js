import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Navbar from "../constant/Navbar";

const HomePage = () => {
  return (
    <div>
    <Navbar/>
    <div className="text-center py-12 px-4 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Tagline */}
      <div className="inline-block bg-gray-200 dark:bg-gray-700 text-red-500 px-4 py-1 rounded-full text-sm font-semibold mb-4">
        No. 1 Job Hunt Website
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Search, Apply & <br />
        Get Your <span className="text-purple-600">Dream Jobs</span>
      </h1>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        aspernatur temporibus nihil tempora dolor!
      </p>

      {/* Search bar */}
      <div className="flex justify-center items-center max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Find your dream jobs"
          className="flex-grow px-4 h-12 rounded-l-full border border-gray-300 focus:outline-none 
                     bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <button className="h-12 w-14 flex items-center justify-center bg-purple-600 text-white rounded-r-full hover:bg-purple-700 transition">
          <FaSearch />
        </button>
      </div>

      {/* Categories + Arrows */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <button className="p-2 border rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white">
          <FiArrowLeft />
        </button>

        <button className="px-6 py-2 border rounded-full font-medium 
                           hover:bg-purple-600 hover:text-white transition 
                           bg-white dark:bg-gray-800 dark:text-white">
          Frontend Developer
        </button>

        <button className="px-6 py-2 border rounded-full font-medium 
                           hover:bg-purple-600 hover:text-white transition 
                           bg-white dark:bg-gray-800 dark:text-white">
          Backend Developer
        </button>

        <button className="p-2 border rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white">
          <FiArrowRight />
        </button>
      </div>

      {/* Job Openings Section */}
      <div className="text-left max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          <span className="text-purple-600">Latest & Top</span> Job Openings
        </h2>
        <p className="text-gray-600 dark:text-gray-300">No Job Available</p>
      </div>
    </div>
    </div>

  );
};

export default HomePage;