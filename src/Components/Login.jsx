import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="w-[400px] p-10 shadow-lg rounded-2xl bg-white">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">
          Welcome, Log into your account
        </h2>
        <p className="text-sm text-gray-500 mb-8 text-center">
          Enter your credentials to access your account
        </p>

        <input
          type="text"
          placeholder="Enter your Login"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Enter your Password"
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-blue-600 text-white p-3 rounded-lg text-base font-medium hover:bg-blue-700 transition"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="w-full mt-4 text-blue-600 hover:underline text-sm text-center"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
