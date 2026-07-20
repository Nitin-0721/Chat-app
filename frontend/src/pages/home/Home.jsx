import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className="min-h-screen flex items-center justify-center p-4">
			<div className="flex h-[85vh] w-[60vw] max-w-6xl rounded-3xl overflow-hidden bg-green-500/1 backdrop-blur-xl border border-green-300/30 shadow-2xl">
				<Sidebar />
				<MessageContainer />
			</div>
		</div>
	);
};

export default Home;