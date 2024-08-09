import React from "react";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center bg-gray-600 h-screen">
      <div className="bg-white p-3 rounded w-25">
        <h1>Register</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              autoComplete="off"
              name="email"
              className="p-2 border-gray-300 rounded-none bg-white text-gray-900"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="p-2 border-gray-300 rounded-none bg-white text-gray-900"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 x-4 rounded-none w-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Register
          </button>
          <p>Already have an account</p>
          <button className="border border-gray-300 bg-gray-200 text-gray-900 rounded-none w-full py-2 px-4 no-underline hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
