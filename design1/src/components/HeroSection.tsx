'use client'
import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in with", email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex max-w-7xl w-full bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Left side - Image */}
        <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: "url('https://www.example.com/your-image.jpg')" }}></div>

        {/* Right side - Form */}
        <div className="w-1/2 p-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Login</h2>

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Account</label>
              <input
                type="email"
                id="email"
                placeholder="Email or Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-blue-500 hover:text-blue-700">Forgot password</a>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Login
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 hover:text-blue-700">Register</a>
            </p>
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            <button className="w-full bg-white border border-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-100 focus:outline-none">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Google_2015_logo.svg" alt="Google" className="h-6 inline-block" />
            </button>
            <button className="w-full bg-white border border-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-100 focus:outline-none">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="h-6 inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
