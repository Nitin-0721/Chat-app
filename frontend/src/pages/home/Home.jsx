import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useConversation from "../../zustand/useConversation";

const Home = () => {
	const { selectedConversation } = useConversation();

	return (
		<div className="min-h-screen w-full flex items-center justify-center p-0 sm:p-4">
			<div
				className="
					flex
					w-full
					h-dvh
					sm:h-[90vh]
					sm:w-[95vw]
					md:w-[90vw]
					lg:w-[80vw]
					xl:w-[70vw]
					max-w-6xl
					overflow-hidden
					sm:rounded-3xl
					bg-green-500/1
					backdrop-blur-xl
					border-0
					sm:border
					border-green-300/30
					shadow-2xl
				"
			>
				{/* Sidebar */}
				<div
					className={`
						w-full
						md:w-1/2
						${selectedConversation ? "hidden md:flex" : "flex"}
					`}
				>
					<Sidebar />
				</div>

				{/* Message Container */}
				<div
					className={`
						w-full
						md:w-1/2
						min-w-0
						${selectedConversation ? "flex" : "hidden md:flex"}
					`}
				>
					<MessageContainer />
				</div>
			</div>
		</div>
	);
};

export default Home;