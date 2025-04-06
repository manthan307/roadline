"use client";

import { createClient } from "@/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const supabase = createClient(); // initialize Supabase client

  // Check if the user is already logged in
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        // Redirect to the dashboard if a session exists
        router.push("/admin");
      }
    };

    checkSession();
  }, [router, supabase.auth]);
  // Handle Logout
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
      alert("Failed to log out. Please try again.");
      return;
    }

    // Redirect to the login page after logout
    router.push("/admin");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
      <p className="text-gray-600 mb-6">Welcome to the admin dashboard!</p>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Dashboard Content
        </h2>
        <p className="text-gray-600">Here you can manage your application.</p>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-red-600 transition duration-200"
      >
        Logout
      </button>
    </div>
  );
}
