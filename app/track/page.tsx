"use client";

import { useState } from "react";

export default function Track() {
  const [trackingId, setTrackingId] = useState("");
  const [trackingStatus, setTrackingStatus] = useState({
    id: "",
    status: "",
    estimatedDelivery: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);

  const handleTrack = async () => {
    if (!trackingId) {
      alert("Please enter a tracking ID.");
      return;
    }

    setLoading(true);

    // Simulate an API call to fetch tracking status
    setTimeout(() => {
      setTrackingStatus({
        id: trackingId,
        status: "In Transit",
        estimatedDelivery: "April 5, 2025",
        location: "Ahmedabad, Gujarat",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Track Your Delivery
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <label
            htmlFor="trackingId"
            className="block text-gray-700 font-medium mb-2"
          >
            Enter Tracking ID
          </label>
          <input
            type="text"
            id="trackingId"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="e.g., ABC123456789"
          />
          <button
            onClick={handleTrack}
            className="w-full bg-accent text-white font-medium py-2 rounded-lg hover:bg-accent/90 transition duration-200"
          >
            {loading ? "Tracking..." : "Track"}
          </button>
        </div>

        {trackingStatus.id !== "" && (
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mt-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
              Tracking Details
            </h2>
            <p className="text-gray-700 text-sm sm:text-base">
              <span className="font-medium">Tracking ID:</span>{" "}
              {trackingStatus.id}
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              <span className="font-medium">Status:</span>{" "}
              {trackingStatus.status}
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              <span className="font-medium">Estimated Delivery:</span>{" "}
              {trackingStatus.estimatedDelivery}
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              <span className="font-medium">Current Location:</span>{" "}
              {trackingStatus.location}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
