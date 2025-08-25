"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://product-server-khaki.vercel.app/display/bags");
      setProducts(res.data.data.slice(0, 6)); // only first 6
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
      <p className="text-center flex justify-center items-center min-h-screen text-lg"><span class="loading loading-ring loading-xl"></span>.</p>
    );

  if (products.length === 0)
    return (
      <p className="text-center mt-8 text-gray-500 dark:text-gray-400">
        No products found.
      </p>
    );

  return (
    <div className="max-w-7xl p-6 py-16 mx-auto">
      <h2 className="text-3xl font-bold mb-6  text-center ">
        Products
      </h2>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.map((product) => (
    <div
      key={product._id}
      className="bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
    >
      {/* Product Image */}
      <figure className="relative h-56 overflow-hidden group">
        {product.image ? (
          <img
            src={product.image}
            alt={product.productName}
            className="object-cover h-full w-full transform group-hover:scale-110 transition duration-500"
          />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
            No Image
          </div>
        )}
        {/* Overlay badge */}
        <span className="absolute top-3 left-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full shadow">
          New
        </span>
      </figure>

      {/* Price, Size, Details */}
      <div className="card-body flex flex-col justify-between p-5 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {product.productName}
        </h2>

        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>
            <strong>Size:</strong> {product.size || "10"}
          </span>
          <span>
            <strong>Price:</strong>{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
              ${product.price || "2400"}
            </span>
          </span>
        </div>

        <Link
          href={`/products/${product._id}`}
          className="btn btn-sm rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 hover:opacity-90 transition"
        >
          Details
        </Link>
      </div>
    </div>
  ))}
</div>





    </div>
  );
}


