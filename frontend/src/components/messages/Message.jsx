const Message = () => {
  // Dummy data for UI
  const fromMe = true;

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="user"
          />
        </div>
      </div>

      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
        Hello! This is a sample message.
      </div>

      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:30 PM
      </div>
    </div>
  );
};

export default Message;