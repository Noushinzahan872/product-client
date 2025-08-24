"use client";

import React from "react";
import MainLayout from "../components/MainLayout"; // adjust path if needed
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <MainLayout>
      <div className="min-h-screen py-24 px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-lg mt-3 text-gray-600 max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have a question, feedback, or partnership idea,
            our team is here to help.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="rounded-2xl shadow-lg p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-primary text-2xl" />
                  <span className="text-gray-500">support@bagify.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-primary text-2xl" />
                  <span className="text-gray-500">+1 (234) 565-890</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-primary text-2xl" />
                  <span className="text-gray-500">123 Sneaker St, New York, USA</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex gap-6 text-2xl text-gray-400">
              <a href="#" className="hover:text-primary transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-primary transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-primary transition">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl shadow-lg p-8 space-y-6"
          >
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>

            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="input input-bordered w-full rounded-lg"
              />
              {errors.name && <p className="text-red-500 mt-1">Name is required</p>}
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
                className="input input-bordered w-full rounded-lg"
              />
              {errors.email && <p className="text-red-500 mt-1">Email is required</p>}
            </div>

            {/* Subject */}
            <div>
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                {...register("subject", { required: true })}
                className="input input-bordered w-full rounded-lg"
              />
              {errors.subject && <p className="text-red-500 mt-1">Subject is required</p>}
            </div>

            {/* Message */}
            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                placeholder="Your message..."
                {...register("message", { required: true })}
                className="textarea textarea-bordered w-full rounded-lg"
                rows={5}
              />
              {errors.message && <p className="text-red-500 mt-1">Message is required</p>}
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button type="submit" className="btn btn-primary rounded-lg px-8">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

