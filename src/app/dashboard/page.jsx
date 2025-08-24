"use client"
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Page() {
  // Dummy data for graph
  const data = [
    { name: "Jan", sales: 500, stock: 220 },
    { name: "Feb", sales: 350, stock: 220 },
    { name: "Mar", sales: 300, stock: 258 },
    { name: "Apr", sales: 275, stock: 188 },
    { name: "May", sales: 189, stock: 233 },
    { name: "Jun", sales: 239, stock: 345 },
  ];

  return (
    <div className="flex justify-center px-4 sm:px-6">
      <div className=" w-full max-w-6xl space-y-6">
        {/* Dashboard Title */}
        <h1 className="text-2xl font-bold text-center">Dashboard Home</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          <div className="p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold">Total Bags</h2>
            <p className="text-3xl font-bold mt-2">1,245</p>
          </div>
          <div className="p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold">Exports</h2>
            <p className="text-3xl font-bold mt-2">534</p>
          </div>
          <div className="p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-3xl font-bold mt-2">$32,400</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className=" rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">
            Monthly Sales vs Stock
          </h2>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#fda4af" /> 
                <Bar dataKey="stock" fill="#fde68a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

       
      </div>
    </div>
  );
}

