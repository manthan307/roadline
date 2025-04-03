"use client";

import { useState } from "react";
import supabase from "@/supabase"; // Ensure you have the correct path to your Supabase client

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const { data, error } = await supabase.from("contact_us").insert([
        {
          name,
          email,
          mobile,
          message,
        },
      ]);

      if (error) {
        console.error("Error inserting data:", error.message);
        alert("Failed to send your message. Please try again.");
      } else {
        console.log("Data inserted successfully:", data);
        setSuccess(true);
        setName("");
        setEmail("");
        setMobile("");
        setMessage("");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="py-20 bg-gray-50 flex justify-center items-center px-4"
      id="contact"
    >
      <div className="rounded-2xl bg-white p-8 shadow-lg w-full max-w-lg">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <h1 className="text-4xl font-bold text-center text-black">
            Contact Us
          </h1>
          <p className="text-center">
            {
              "We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible."
            }
          </p>

          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              required
              minLength={3}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium">
              Your Email
            </label>
            <input
              type="email"
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Mobile Number Input */}
          <div className="flex flex-col">
            <label htmlFor="mobile" className="font-medium">
              Your Mobile Number
            </label>
            <input
              type="text"
              maxLength={10}
              minLength={10}
              id="mobile"
              required
              value={mobile}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, "");
                setMobile(value);
              }}
              placeholder="Enter your mobile number"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="font-medium">
              Your Message <span className="text-gray-500">(optional)</span>
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-accent text-primary py-3 rounded-lg hover:bg-white hover:text-accent hover:border hover:border-accent transition duration-200"
            disabled={loading}
          >
            {loading ? "Loading..." : "Contact Us"}
          </button>

          {/* Success Message */}
          {success && <p className="text-green-600 text-center mt-4">Done!</p>}
        </form>
      </div>
    </div>
  );
}
