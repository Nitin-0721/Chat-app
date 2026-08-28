import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className="w-full h-full border-r border-green-300/30 p-4 flex flex-col bg-green-500/10 backdrop-blur-xl">
			<SearchInput />

			<div className="divider px-3 before:bg-green-300/30 after:bg-green-300/30"></div>

			<Conversations />

			<LogoutButton />
		</div>
	);
};

export default Sidebar;