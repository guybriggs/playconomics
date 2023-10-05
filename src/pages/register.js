import React from "react"
import BackToHome from "../components/BackToHome"

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <BackToHome />
      <div className="max-w-md w-full p-6 bg-white rounded">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Register</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
