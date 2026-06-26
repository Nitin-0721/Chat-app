import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div
        className="
          w-full
          max-w-md
          p-8
          rounded-2xl
          bg-white/10
          backdrop-blur-lg
          border
          border-white/20
          shadow-2xl
        "
      >
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          Login
          <span className="text-green-500"> ChatApp</span>
        </h1>

        <form>
          {/* Username */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text text-white">Username</span>
            </label>

            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full"
            />
          </div>

          {/* Signup Link */}
          <Link
            to="/signup"
            className="text-sm text-gray-300 hover:text-green-400 hover:underline"
          >
            Don't have an account?
          </Link>

          {/* Button */}
          <button className="btn btn-success btn-block mt-5">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;