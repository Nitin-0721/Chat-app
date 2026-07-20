import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className="mt-auto">
			{!loading ? (
				<BiLogOut
					className="w-6 h-6 text-green-300 hover:text-green-200 cursor-pointer transition-colors"
					onClick={logout}
				/>
			) : (
				<span className="loading loading-spinner text-green-300"></span>
			)}
		</div>
	);
};

export default LogoutButton;