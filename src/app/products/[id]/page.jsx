"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import MainLayout from "@/app/components/MainLayout";
 

export default function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://product-server-khaki.vercel.app/display/bags/${id}`);
        setProduct(res.data.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading)
    return (
      <MainLayout>
        <p className="text-center flex justify-center items-center min-h-screen text-lg"><span class="loading loading-ring loading-xl"></span></p>
      </MainLayout>
    );

  if (!product)
    return (
      <MainLayout>
        <p className="text-center mt-8 text-lg">Product not found.</p>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div className="max-w-4xl min-h-screen mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
        {product.image ? (
          <img
            src={product.image}
            alt={product.productName}
            className="w-full h-120 object-cover rounded-lg mb-4"
          />
        ) : (
          <div className="w-full h-80 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg mb-4">
            No Image
          </div>
        )}
        <div className=" space-y-2">
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Size:</strong> {product.size}</p>
          <p><strong>Quality:</strong> {product.quality}</p>
          <p><strong>Availability:</strong> {product.availability}</p>
          <p><strong>Color:</strong> {product.color}</p>
          <p><strong>Material:</strong> {product.material}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
        </div>
      </div>
    </MainLayout>
  );
}

