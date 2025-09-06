// Navbar.jsx
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Ajay Kumar Singh
        </h1>

        <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300 font-medium">
          <li><a href="#about" className="hover:text-indigo-500">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-500">Projects</a></li>
          <li><a href="#skills" className="hover:text-indigo-500">Skills</a></li>
          <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
        </ul>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
