"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router=useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageURL] = useState("");

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
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setImageURL(res.data.data.url);
      toast.success("Image Uploaded Successfully ✅");
    } catch (error) {
      toast.error("Image Upload Failed ❌");
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  // ✅ Handle Form Submission
  const onSubmit = async (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      image: imageUrl,
    };

    console.log("User Data:", userData);

    try {
      const res = await axios.post("https://product-server-khaki.vercel.app/users", userData);
      if (res.status === 201) {
        toast.success("Account created successfully 🎉");
        
      }
    } catch (error) {
      toast.error("Signup failed ❌");
    }
    reset()
    setImageURL('')
    router.push('/login')
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex justify-center">
      
      <div className="flex w-full md:w-1/2 justify-center items-center p-6 md:p-10">
        <div className="card w-full max-w-lg border border-gray-400 rounded-2xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center mb-6">
              Create Your Account
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div className="form-control">
                <label className="label font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    Name is required
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label font-medium">Email</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  {...register("email", { required: true })}
                  className="input input-bordered w-full"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    Email is required
                  </span>
                )}
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label font-medium">Password</label>
                <input
                  type="password"
                  placeholder="******"
                  {...register("password", { required: true, minLength: 6 })}
                  className="input input-bordered w-full"
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    Password must be at least 6 characters
                  </span>
                )}
              </div>

              {/* Image Upload */}
              <div className="form-control">
                <label className="label font-medium">Profile Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="file-input file-input-bordered w-full"
                />
                {uploading && (
                  <p className="text-blue-500 text-sm">Uploading image...</p>
                )}
                {imageUrl && (
                  <div className="mt-2 flex justify-center">
                    <img
                      src={imageUrl}
                      alt="Uploaded"
                      className="w-20 h-20 rounded-full border shadow"
                    />
                  </div>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={uploading}
              >
                {uploading ? "Please wait..." : "Sign Up"}
              </button>
            </form>

            {/* Login Redirect */}
            <p className="text-center text-sm mt-6">
              Already have an account?{" "}
              <a href="/login" className="link link-primary font-medium">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

