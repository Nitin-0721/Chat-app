import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	console.log("Conversation Component Rendered");
console.log("Profile Pic:", conversation.profilePic);
console.log("Conversation:", conversation);

	return (
		
		<>
			<div
				className={`flex gap-2 items-center hover:bg-green-500/20 hover:backdrop-blur-xl rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-green-500/20 backdrop-blur-xl border border-green-300/30" : ""}
			`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className="w-12 rounded-full">
						<img src={conversation.profilePic} alt="user avatar" />
					</div>
				</div>

				<div className="flex flex-col flex-1">
					<div className="flex gap-3 justify-between">
						<p className="font-bold text-white">{conversation.fullName}</p>
						<span className="text-xl">{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className="divider my-0 py-0 h-1 before:bg-green-300/30 after:bg-green-300/30" />}
		</>
		
	);
};

export default Conversation;