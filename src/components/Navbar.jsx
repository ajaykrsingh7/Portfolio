// Navbar.jsx
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode toggle effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black dark:text-white">
          AJ
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-medium">
          <li>
            <a href="#about" className="text-white dark:text-gray-300 hover:text-indigo-500">
              About me
            </a>
          </li>
          <li>
            <a href="#skills" className="text-white dark:text-gray-300 hover:text-indigo-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-white dark:text-gray-300 hover:text-indigo-500">
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-600"
            >
              Contact Me
            </a>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-gray-800" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black dark:text-white ml-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black dark:bg-gray-900 text-white px-6 py-4 space-y-4">
          <a href="#about" className="block hover:text-indigo-500">About me</a>
          <a href="#skills" className="block hover:text-indigo-500">Skills</a>
          <a href="#portfolio" className="block hover:text-indigo-500">Portfolio</a>
          <a
            href="#contact"
            className="block bg-white text-black dark:bg-indigo-500 dark:text-white px-4 py-2 rounded-full text-center hover:bg-gray-200 dark:hover:bg-indigo-600"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
