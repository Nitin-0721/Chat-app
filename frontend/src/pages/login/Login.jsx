import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
      <div
        className="
        w-96 p-6 rounded-2xl
        bg-white/10
        backdrop-blur-lg
        border border-white/20
        shadow-xl
      "
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-green-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a href="#" className="text-sm hover:underline hover:text-green-600 mt-2 inline-block p-2">
          {"Don't"} have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">Login

            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
