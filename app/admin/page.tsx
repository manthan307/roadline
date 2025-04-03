"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/supabase";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Check if the user is already logged in
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        // Redirect to the dashboard if a session exists
        router.push("/admin/dashboard");
      }
    };

    checkSession();
  }, [router]);

  // Handle Email Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate email and password
    if (!email || !password) {
      setError("Email and password are required.");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Login error:", error.message);
        setError("Invalid email or password. Please try again.");
        return;
      }

      console.log("User signed in:", data);

      const { data: profiles, error: profilesError } = await supabase
        .from("profiles")
        .select()
        .eq("user_id", data.user.id);

      if (profilesError) {
        console.error("Error fetching profiles:", profilesError.message);
        setError("Failed to fetch user profile. Please try again.");
        return;
      }

      const is_admin = profiles?.[0]?.is_admin;
      console.log(profiles);

      if (is_admin) {
        // Redirect to the admin dashboard
        router.push("/admin/dashboard");
      } else {
        await supabase.auth.signOut();
        setError("You do not have admin access.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen">
      <div className="hidden md:block w-1/2 h-full relative circle_bg" />

      {/* Centered Content */}
      <div className="h-full w-full md:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="text-center w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Admin Login
          </h1>
          <p className="text-gray-600 mb-6">
            Enter your email and password to access the admin dashboard.
          </p>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium text-left">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col">
              <label htmlFor="password" className="font-medium text-left">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-accent text-white font-medium py-3 rounded-lg hover:bg-accent/90 transition duration-200"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
