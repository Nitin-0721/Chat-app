// import { useEffect } from "react";
// import useConversation from "../../zustand/useConversation";
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";
// import { TiMessages } from "react-icons/ti";
// import { useAuthContext } from "../../context/AuthContext";

// const MessageContainer = () => {
//   const { selectedConversation, setSelectedConversation } = useConversation();

//   useEffect(() => {
//     return () => setSelectedConversation(null);
//   }, [setSelectedConversation]);

//   return (
//     <div className="w-1/2 flex flex-col">
//       {" "}
//       {!selectedConversation ? (
//         <NoChatSelected />
//       ) : (
//         <>
//           {/* Header */}
//           <div className="bg-green-500/20 backdrop-blur-xl border-b border-green-300/30 px-4 py-2">
//             <span className="label-text text-green-100">To: </span>
//             <span className="text-white font-bold">
//               {selectedConversation.fullName}
//             </span>
//           </div>

//           <Messages />
//           <MessageInput />
//         </>
//       )}
//     </div>
//   );
// };

// export default MessageContainer;

// const NoChatSelected = () => {
//   const { authUser } = useAuthContext();

//   return (
//     <div className="flex items-center justify-center w-full h-full">
//       <div className="px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2">
//         <p>Welcome 👋 {authUser.fullName} ❄</p>
//         <p className="text-green-100">Select a chat to start messaging</p>
//         <TiMessages className="text-3xl md:text-6xl text-green-300" />
//       </div>
//     </div>
//   );
// };
import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className="w-full h-full min-w-0 flex flex-col">
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					<div className="shrink-0 bg-green-500/20 backdrop-blur-xl border-b border-green-300/30 px-4 py-3 flex items-center">
						<button
							className="md:hidden mr-3 text-white text-xl"
							onClick={() => setSelectedConversation(null)}
						>
							←
						</button>

						<div>
							<span className="label-text text-green-100">
								To:{" "}
							</span>
							<span className="text-white font-bold">
								{selectedConversation.fullName}
							</span>
						</div>
					</div>

					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();

	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="px-4 text-center text-white font-semibold flex flex-col items-center gap-2">
				<p className="text-base sm:text-lg md:text-xl">
					Welcome 👋 {authUser.fullName} ❄
				</p>

				<p className="text-green-100 text-sm sm:text-base">
					Select a chat to start messaging
				</p>

				<TiMessages className="text-3xl md:text-6xl text-green-300" />
			</div>
		</div>
	);
};