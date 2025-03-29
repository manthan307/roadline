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
      className="min-h-screen bg flex justify-center items-center"
      id="pricing"
    >
      <div className="rounded-2xl bg-white p-5">
        <form className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-center">Pricing</h1>
          <div className="flex gap-5 flex-wrap">
            <div className="flex flex-col w-full md:w-auto">
              <label className="text-gray-700" htmlFor="weight">
                Enter weight (in kg):
              </label>
              <input
                type="number"
                id="weight"
                value={Weight}
                min={0}
                onChange={(e) => setWeight(e.target.value)}
                className="border w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter weight"
              />
            </div>
            <div className="flex flex-col w-full md:w-auto">
              <label className="text-gray-700" htmlFor="height">
                Height (in cm):
              </label>
              <input
                type="number"
                id="height"
                value={Height}
                min={0}
                onChange={(e) => setHeight(e.target.value)}
                className="border w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter Height"
              />
            </div>
            <div className="flex-col flex w-full md:w-auto">
              <label className="text-gray-700" htmlFor="width">
                Width (in cm):
              </label>
              <input
                type="number"
                id="width"
                value={Width}
                min={0}
                onChange={(e) => setWidth(e.target.value)}
                className="border w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter Width"
              />
            </div>
            <div className="flex-col flex w-full md:w-auto">
              <label className="text-gray-700" htmlFor="Breadth">
                Breadth (in cm):
              </label>
              <input
                type="number"
                id="Breadth"
                value={Breadth}
                min={0}
                onChange={(e) => setBreadth(e.target.value)}
                className="border w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter Breadth"
              />
            </div>
          </div>
          <div className="flex gap-5 flex-wrap">
            <div className="flex-col flex w-full md:w-auto">
              <label className="text-gray-700" htmlFor="from">
                From
              </label>
              <input
                type="text"
                id="from"
                value={From}
                min={0}
                onChange={(e) => setFrom(e.target.value)}
                className="border w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter Location"
              />
            </div>
            <div className="flex-col flex w-full md:w-auto">
              <label className="text-gray-700" htmlFor="To">
                To
              </label>
              <input
                type="text"
                id="To"
                value={To}
                min={0}
                onChange={(e) => setTo(e.target.value)}
                className="border w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter Location"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-3">
            <h2 className="text-xl">
              Estimated Cost (in INR): <span className="font-bold">--</span>
            </h2>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-2 mt-3">
            <button className="mt-4 w-full bg-accent text-background py-2 rounded-lg transition duration-200">
              Calculate
            </button>
            <button className="mt-4 w-full bg-white text-accent border py-2 rounded-lg transition duration-200">
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
