import { useEffect } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className="flex-1 flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To: </span>
            <span className="font-bold text-white">
              {selectedConversation.fullName}
            </span>
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
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center text-gray-200 flex flex-col items-center gap-3">
        <p className="text-2xl font-semibold">
          Welcome 👋 John Doe ❄
        </p>

        <p className="text-lg">
          Select a chat to start messaging
        </p>

        <TiMessages className="text-7xl text-sky-500" />
      </div>
    </div>
  );
};