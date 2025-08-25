"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import MainLayout from "../components/MainLayout";


export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://product-server-khaki.vercel.app/display/bags");
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
    <MainLayout>
           <p className="text-center flex justify-center items-center min-h-screen text-lg"><span class="loading loading-ring loading-xl"></span>.</p>
         </MainLayout>
    );

  if (products.length === 0)
    return (
      <MainLayout>
        <p className="text-center mt-8 text-gray-500 dark:text-gray-400">
          No products found.
        </p>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto min-h-screen px-6 py-18">
        {/* Page Title & Subtitle */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold ">
            Our Products
          </h1>
          <p className=" mt-2">
            Explore our curated collection of premium bags
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="card shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              {/* Product Image */}
              <figure className="h-48 flex items-center justify-center">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="object-cover h-full w-full"
                  />
                ) : (
                  <span className="text-gray-400 dark:text-gray-500">No Image</span>
                )}
              </figure>

              {/* Card Body */}
              <div className="card-body">
                <h3 className="card-title text-lg font-bold ">
                  {product.productName || "Nightinger"}
                </h3>

                <div className="flex justify-between mt-2 ">
                  <span><strong>Size:</strong> {product.size || "10"}</span>
                  <span><strong>Price:</strong> ${product.price || "2400"}</span>
                </div>

                <div className="mt-4 text-center">
                  <Link
                    href={`/products/${product._id}`}
                    className="btn btn-sm btn-outline rounded-lg"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

