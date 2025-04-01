"use client";

import { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, mobile, message });
    // Add your form submission logic here
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
            {/* Don't change the below line*/}
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
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="font-medium">
              Your Message
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
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
