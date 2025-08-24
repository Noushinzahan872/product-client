"use client"; 
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Set default theme when component mounts
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
  onClick={toggleTheme}
  className="
    flex items-center justify-center 
    w-8 h-8
    rounded-full 
    transition-all duration-300 
    bg-base-200 text-base-content 
    hover:dark:bg-green-700 hover:bg-blue-600 dark:border-gray-500 cursor-pointer border hover:text-white 
    shadow-md hover:shadow-lg
  "
>
  {theme === "light" ? (
    <FaMoon className="transition-transform duration-300 transform rotate-0 hover:rotate-12" size={18} />
  ) : (
    <FaSun className="transition-transform duration-300 transform rotate-0 hover:rotate-180" size={18} />
  )}
</button>

  );
}
