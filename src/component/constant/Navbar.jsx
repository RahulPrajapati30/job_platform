import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { MdWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600 dark:text-blue-400">
            MyApp
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              About
            </Link>
            <Link
              to="/login"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Register
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-xl"
            >
              {darkMode ? <MdWbSunny /> : <LuMoon />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-200 text-2xl focus:outline-none"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2 bg-gray-50 dark:bg-gray-700">
          <Link
            to="/"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="/login"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Register
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-xl mt-2"
          >
            {darkMode ? <MdWbSunny /> : <LuMoon />}
          </button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;