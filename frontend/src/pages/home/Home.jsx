// import MessageContainer from "../../components/messages/MessageContainer";
// import Sidebar from "../../components/sidebar/Sidebar";

// const Home = () => {
// 	return (
// 		<div className="min-h-screen flex items-center justify-center p-4">
// 			<div className="flex h-[85vh] w-[60vw] max-w-6xl rounded-3xl overflow-hidden bg-green-500/1 backdrop-blur-xl border border-green-300/30 shadow-2xl">
// 				<Sidebar />
// 				<MessageContainer />
// 			</div>
// 		</div>
// 	);
// };

// export default Home;


import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className="min-h-screen w-full flex items-center justify-center p-0 sm:p-4">
			<div
				className="
					flex
					w-full
					h-screen
					sm:h-[90vh]
					sm:w-[95vw]
					md:w-[85vw]
					lg:w-[75vw]
					xl:w-[65vw]
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
				<Sidebar />
				<MessageContainer />
			</div>
		</div>
	);
};

export default Home;