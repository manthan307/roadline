"use client";

import { useState } from "react";

export default function Pricing() {
  const [Weight, setWeight] = useState("");
  const [Height, setHeight] = useState("");
  const [Breadth, setBreadth] = useState("");
  const [Width, setWidth] = useState("");
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");

  return (
    <div
      className="min-h-screen bg-gray-50 flex justify-center items-center px-4"
      id="pricing"
    >
      <div className="rounded-3xl bg-white p-8 shadow-2xl w-full max-w-5xl">
        <form className="flex flex-col gap-8">
          {/* Title */}
          <h1 className="text-4xl font-extrabold text-center text-accent">
            Pricing Calculator
          </h1>
          <p className="text-center text-gray-600">
            Enter the details below to calculate the estimated cost of your
            shipment.
          </p>

          {/* Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium" htmlFor="weight">
                Weight (in kg)
              </label>
              <input
                type="number"
                id="weight"
                value={Weight}
                min={0}
                onChange={(e) => setWeight(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter weight"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium" htmlFor="height">
                Height (in cm)
              </label>
              <input
                type="number"
                id="height"
                value={Height}
                min={0}
                onChange={(e) => setHeight(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter height"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium" htmlFor="width">
                Width (in cm)
              </label>
              <input
                type="number"
                id="width"
                value={Width}
                min={0}
                onChange={(e) => setWidth(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter width"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium" htmlFor="breadth">
                Breadth (in cm)
              </label>
              <input
                type="number"
                id="breadth"
                value={Breadth}
                min={0}
                onChange={(e) => setBreadth(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter breadth"
              />
            </div>
          </div>

          {/* Location Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium" htmlFor="from">
                From
              </label>
              <input
                type="text"
                id="from"
                value={From}
                onChange={(e) => setFrom(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter location"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium" htmlFor="to">
                To
              </label>
              <input
                type="text"
                id="to"
                value={To}
                onChange={(e) => setTo(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter location"
              />
            </div>
          </div>

          {/* Estimated Cost */}
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              Estimated Cost (in INR):{" "}
              <span className="text-accent font-bold">--</span>
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="w-full bg-accent text-white py-3 rounded-lg hover:bg-white hover:text-accent hover:border hover:border-accent transition duration-200"
            >
              Calculate
            </button>
            <a
              href="#contact"
              className="w-full text-center bg-white text-accent border border-accent py-3 rounded-lg hover:bg-accent hover:text-white transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
