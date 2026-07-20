import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();

	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);

	const chatClassName = fromMe ? "chat-end" : "chat-start";

	const profilePic = fromMe
		? authUser.profilePic
		: selectedConversation?.profilePic;

	const bubbleBgColor = fromMe
		? "bg-green-500/80 backdrop-blur-md border border-green-300/30"
		: "bg-white/10 backdrop-blur-md border border-white/20";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full ring ring-green-400 ring-offset-2 ring-offset-transparent">
					<img
						src={profilePic}
						alt="Profile"
						className="rounded-full object-cover"
					/>
				</div>
			</div>

			<div
				className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2 shadow-lg`}
			>
				{message.message}
			</div>

			<div className="chat-footer text-xs text-gray-300 mt-1">
				{formattedTime}
			</div>
		</div>
	);
};

export default Message;