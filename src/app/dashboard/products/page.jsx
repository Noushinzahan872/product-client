"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/display/shoes");
      setProducts(res.data.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading)
    return (
      <p className="text-center flex justify-center items-center min-h-screen text-lg"><span class="loading loading-ring loading-xl"></span></p>
    );

  return (
    <div className="max-w-7xl min-h-screen mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Products
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No products found.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
            <thead className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Name</th>
                <th className="p-3">Price ($)</th>
                <th className="p-3">Size</th>
                <th className="p-3">Quality</th>
                <th className="p-3">Image</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product._id}
                  className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <td className="border border-gray-200 dark:border-gray-600 p-3 text-center font-medium">
                    {index + 1}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-600 p-3">
                    {product.productName}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-600 p-3">
                    ${product.price}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-600 p-3 text-center">
                    {product.size}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-600 p-3 text-center">
                    {product.quality}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-600 p-3 text-center">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.productName}
                        className="w-16 h-16 object-cover rounded-md mx-auto"
                      />
                    ) : (
                      <span className="text-gray-400 dark:text-gray-300">
                        No Image
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}



