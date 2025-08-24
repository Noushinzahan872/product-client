"use client";

import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


export default function AddShoe() {
  const [imageUrl, setImageURL] = useState()
  const [uploading, setUploading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("http://localhost:5000/shoes", {
        ...data,
        image: imageUrl,
      });

      toast.success("bag added successfully!");
      reset();
      setImageURL('')
      console.log(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to add bag!");
    }
    reset();
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      setUploading(true);
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // important
          },
        }
      );
      setImageURL(res.data.data.url);
      console.log(imageUrl)
      toast.success('Image Uploaded')
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className="max-w-3xl mx-auto p-6 mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Add New Bag
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="label">
            <span className="label-text font-medium text-gray-700 dark:text-gray-300">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter product name"
            {...register("productName", { required: true })}
            className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          />
          {errors.productName && <p className="text-red-500">Product name is required</p>}
        </div>

        {/* Size */}
        <div>
          <label className="label">
            <span className="label-text font-medium text-gray-700 dark:text-gray-300">Size</span>
          </label>
          <input
            type="number"
            placeholder="Enter size"
            {...register("size", { required: true, min: 1 })}
            className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          />
          {errors.size && <p className="text-red-500">Size is required</p>}
        </div>

        {/* Quality */}
        <div>
          <label className="label">
            <span className="label-text font-medium text-gray-700 dark:text-gray-300">Quality</span>
          </label>
          <select
            {...register("quality", { required: true })}
            className="select select-bordered w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          >
            <option value="">Select Quality</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
            <option value="Luxury">Luxury</option>
          </select>
          {errors.quality && <p className="text-red-500">Please select quality</p>}
        </div>

        {/* Price */}
        <div>
          <label className="label">
            <span className="label-text font-medium text-gray-700 dark:text-gray-300">Price ($)</span>
          </label>
          <input
            type="number"
            placeholder="Enter price"
            {...register("price", { required: true, min: 1 })}
            className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          />
          {errors.price && <p className="text-red-500">Price is required</p>}
        </div>

        {/* Availability */}
        <div>
          <label className="label">
            <span className="label-text font-medium text-gray-700 dark:text-gray-300">Availability</span>
          </label>
          <select
            {...register("availability", { required: true })}
            className="select select-bordered w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          >
            <option value="">Select Availability</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
          {errors.availability && <p className="text-red-500">Select availability</p>}
        </div>

        {/* Color */}
        <div>
          <label className="label">
            <span className="label-text font-medium text-gray-700 dark:text-gray-300">Color</span>
          </label>
          <input
            type="text"
            placeholder="Enter color"
            {...register("color")}
            className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          />
        </div>

        
        {/* Material */}
        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-300">Material</label>
          <input
            type="text"
            placeholder="Leather"
            {...register("material")}
            className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-300">Brand</label>
          <input
            type="text"
            placeholder="Black-Yellow"
            {...register("brand")}
            className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-300">Image</label>
          <input
            type="file"
            accept="image/*"
            {...register("image")}
            onChange={handleImageUpload}
            className="input p-2 w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          />
        </div>
        {
          imageUrl && <div className="flex justify-center">
          <img className="border rounded-2xl border-gray-400 h-60 object-cover" src={imageUrl} alt="" />
        </div>
        }
        {/* Submit Button */}
        <div className="text-center mt-4">
          <button
            type="submit"
            className="btn btn-outline rounded-2xl btn-block text-white hover:bg-blue-600 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
          >
           Add Bag
          </button>
        </div>
      </form>
    </div>
  );
}


