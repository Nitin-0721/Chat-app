import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;

	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	// Use saved profile picture if available.
	// Otherwise, generate a DiceBear avatar using the user's ID.
	const profilePic =
		conversation.profilePic ||
		`https://api.dicebear.com/10.x/lorelei/svg?seed=${conversation._id}`;

	return (
		<>
			<div
				className={`
					flex gap-2 items-center
					hover:bg-green-500/20
					hover:backdrop-blur-xl
					rounded p-2 py-1
					cursor-pointer
					${isSelected
						? "bg-green-500/20 backdrop-blur-xl border border-green-300/30"
						: ""}
				`}
				onClick={() => setSelectedConversation(conversation)}
			>
				{/* Profile Picture */}
				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className="w-12 h-12 rounded-full overflow-hidden">
						<img
							src={profilePic}
							alt={`${conversation.fullName} avatar`}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>

				{/* User Information */}
				<div className="flex flex-col flex-1 min-w-0">
					<div className="flex gap-3 justify-between items-center">
						<p className="font-bold text-white truncate">
							{conversation.fullName}
						</p>

						<span className="text-xl shrink-0">
							{emoji}
						</span>
					</div>
				</div>
			</div>

			{!lastIdx && (
				<div className="divider my-0 py-0 h-1 before:bg-green-300/30 after:bg-green-300/30" />
			)}
		</>
	);
};

export default Conversation;