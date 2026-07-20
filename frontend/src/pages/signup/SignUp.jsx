import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
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
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div
				className="
					w-full
					max-w-md
					p-8
					rounded-3xl
					backdrop-blur-xl
					bg-green-500/20
					border
					border-green-300/30
					shadow-2xl
				"
			>
				<h1 className="text-3xl font-bold text-center text-white mb-6">
					Sign Up <span className="text-green-300">ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label className="label">
							<span className="label-text text-white">Full Name</span>
						</label>

						<input
							type="text"
							placeholder="John Doe"
							className="input input-bordered w-full bg-black/20 border-green-300/30 text-white placeholder:text-gray-300"
							value={inputs.fullName}
							onChange={(e) =>
								setInputs({ ...inputs, fullName: e.target.value })
							}
						/>
					</div>

					<div className="mb-3">
						<label className="label">
							<span className="label-text text-white">Username</span>
						</label>

						<input
							type="text"
							placeholder="johndoe"
							className="input input-bordered w-full bg-black/20 border-green-300/30 text-white placeholder:text-gray-300"
							value={inputs.username}
							onChange={(e) =>
								setInputs({ ...inputs, username: e.target.value })
							}
						/>
					</div>

					<div className="mb-3">
						<label className="label">
							<span className="label-text text-white">Password</span>
						</label>

						<input
							type="password"
							placeholder="Enter Password"
							className="input input-bordered w-full bg-black/20 border-green-300/30 text-white placeholder:text-gray-300"
							value={inputs.password}
							onChange={(e) =>
								setInputs({ ...inputs, password: e.target.value })
							}
						/>
					</div>

					<div className="mb-3">
						<label className="label">
							<span className="label-text text-white">
								Confirm Password
							</span>
						</label>

						<input
							type="password"
							placeholder="Confirm Password"
							className="input input-bordered w-full bg-black/20 border-green-300/30 text-white placeholder:text-gray-300"
							value={inputs.confirmPassword}
							onChange={(e) =>
								setInputs({
									...inputs,
									confirmPassword: e.target.value,
								})
							}
						/>
					</div>

					<div className="my-4">
						<GenderCheckbox
							onCheckboxChange={handleCheckboxChange}
							selectedGender={inputs.gender}
						/>
					</div>

					<Link
						to="/login"
						className="text-sm text-green-100 hover:text-green-300 hover:underline"
					>
						Already have an account?
					</Link>

					<button
						className="btn btn-success btn-block mt-5"
						disabled={loading}
					>
						{loading ? (
							<span className="loading loading-spinner"></span>
						) : (
							"Sign Up"
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignUp;