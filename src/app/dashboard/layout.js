"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiMenu,
  FiX,
  FiUser,
  FiPlusSquare,
  FiHome,
  FiBell,
  FiSettings,
  FiPackage,
} from "react-icons/fi";
import ThemeToggle from "../components/ThemeToggle";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0  h-screen w-48 bg-white dark:bg-gray-800 shadow-md transform transition-transform duration-300 z-50 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Logo */}
        <Link href="/">
          <div className="p-5 text-2xl font-extrabold text-blue-600 dark:text-blue-400 border-b dark:border-gray-700">
           <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Bagify Dashboard
          </span>
          </div>
        </Link>

        {/* Nav links */}
        <nav className="p-4 space-y-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <FiHome size={20} /> <span>Home</span>
          </Link>
          <Link
            href="/dashboard/addproduct"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <FiPlusSquare size={20} /> <span>Add Product</span>
          </Link>
          <Link
            href="/dashboard/products"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <FiPackage size={20} /> <span>Products</span>
          </Link>
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <FiUser size={20} /> <span>Profile</span>
          </Link>
        </nav>
      </aside>

      {/* Overlay for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white dark:bg-gray-900 shadow px-4 py-3">
          {/* Left: Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 lg:hidden"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Title */}
          <h1 className="text-xl font-semibold">Dashboard</h1>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            {/* Theme toggle button */}
            <ThemeToggle />
            <button className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <FiBell size={22} />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <Link
              href="/dashboard/profile"
              className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <FiUser size={22} />
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 transition-colors">
          <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-6 transition-colors">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}


