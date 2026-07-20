import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
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
					Login <span className="text-green-300">ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="label">
							<span className="label-text text-white">Username</span>
						</label>

						<input
							type="text"
							placeholder="Enter username"
							className="
								input
								input-bordered
								w-full
								bg-black/20
								border-green-300/30
								text-white
								placeholder:text-gray-300
							"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div className="mb-2">
						<label className="label">
							<span className="label-text text-white">Password</span>
						</label>

						<input
							type="password"
							placeholder="Enter Password"
							className="
								input
								input-bordered
								w-full
								bg-black/20
								border-green-300/30
								text-white
								placeholder:text-gray-300
							"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link
						to="/signup"
						className="text-sm text-green-100 hover:text-green-300 hover:underline mt-2 inline-block"
					>
						Don't have an account?
					</Link>

					<button
						className="btn btn-success btn-block mt-5"
						disabled={loading}
					>
						{loading ? (
							<span className="loading loading-spinner"></span>
						) : (
							"Login"
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;