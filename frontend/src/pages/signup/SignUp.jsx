import { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({
      ...inputs,
      gender,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

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
          Sign Up <span className="text-green-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text text-white">Full Name</span>
            </label>

            <input
              type="text"
              placeholder="ABC XYZ"
              className="input input-bordered w-full"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  fullName: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-white">Username</span>
            </label>

            <input
              type="text"
              placeholder="ABC"
              className="input input-bordered w-full"
              value={inputs.username}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  username: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full"
              value={inputs.password}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  password: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-white">Confirm Password</span>
            </label>

            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm text-gray-300 hover:text-green-400 hover:underline"
          >
            Already have an account?
          </Link>

          <button type="submit" className="btn btn-success btn-block mt-4"
          disabled = {loading}>
            {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
