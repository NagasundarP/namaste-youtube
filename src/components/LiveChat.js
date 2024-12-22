import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();

  const messageRes = useSelector((state) => state.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: "John Doe",
          message: "Hello World",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full h-[600px] bg-gray-500 text-white rounded-md border border-gray-700 overflow-y-scroll flex-col-reverse">
      {messageRes &&
        messageRes.map((message, index) => (
          <ChatMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
    </div>
  );
};

export default LiveChat;
