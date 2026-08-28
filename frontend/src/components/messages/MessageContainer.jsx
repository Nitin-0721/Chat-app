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
					{/* Header */}
					<div className="shrink-0 bg-green-500/20 backdrop-blur-xl border-b border-green-300/30 px-4 py-3 flex items-center">
						{/* Back button - Mobile only */}
						<button
							onClick={() => setSelectedConversation(null)}
							className="md:hidden mr-3 text-white text-2xl"
							aria-label="Back to conversations"
						>
							←
						</button>

						<div className="min-w-0">
							<span className="label-text text-green-100">
								To:{" "}
							</span>

							<span className="text-white font-bold truncate">
								{selectedConversation.fullName}
							</span>
						</div>
					</div>

					{/* Messages */}
					<Messages />

					{/* Message Input */}
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
		<div className="flex items-center justify-center w-full h-full px-4">
			<div className="text-center text-white font-semibold flex flex-col items-center gap-2">
				<p className="text-base sm:text-lg md:text-xl">
					Welcome 👋 {authUser.fullName} ❄
				</p>

				<p className="text-sm sm:text-base text-green-100">
					Select a chat to start messaging
				</p>

				<TiMessages className="text-4xl md:text-6xl text-green-300" />
			</div>
		</div>
	);
};