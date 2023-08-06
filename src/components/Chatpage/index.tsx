import { useState } from "react";
import "./ChatPage.scss";
import useCounter from "@/hooks/useCounter";
import useUsers from "@/hooks/useUsers";
import { socket } from "socket";
import CallScreen from "../CallScreen/CallScreen";
import useAnswerCall from "@/hooks/useAnswerCall";
import Popup from "../Popup/Popup";
import useAudio from "@/hooks/useAudio";
import useNotification from "@/hooks/useNotification";
import Users from "../Users/Users";

const ChatPage = (props: Component.ChatPageProps) => {
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [isCall, setIsCall] = useState<boolean>(false);
  const { getUsers } = useUsers();
  const [calleeid, setCalleeId] = useState("");
  const [isIncomingCall, setIsIncomingCall] = useState<boolean>(false);
  const [answerObject, setAnswerObject] = useState<Hooks.Connection | null>(null);
  const [callObject, setCallObject] = useState<Hooks.Connection | null>(null);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const { countOnlineUsers } = useCounter();
  const currentlyActiveUsers = countOnlineUsers(props.users);
  useAnswerCall(setAnswerObject, setIsIncomingCall);
  useAudio(isIncomingCall);
  useNotification(isIncomingCall);
  const activeUsers = getUsers(props.users, socket.id);

  const chatHistory = [
    { sender: "User 1", message: "Hello there!" },
    { sender: "User 2", message: "Hey! How are you?" },
    { sender: "User 2", message: "Hey! How are you?" },
    { sender: "User 2", message: "Hey! How are you?" },
    { sender: "User 2", message: "Hey! How are you?" },
    { sender: "User 2", message: "Hey! How are you?" },
    { sender: "User 2", message: "Hey! How are you?" },
    { sender: "User 2", message: "Hey! How are you?" },
    { sender: "User 2", message: "Hey! How are you?" },
    { sender: "User 200", message: "Hey! How are you?" },
    // Add more chat messages here if needed
  ];

  const handleUserSelect = (user: any) => {
    setSelectedUser(user);
  };

  const handleVideoClick = (peerid: string) => {
    setCalleeId(peerid);
    setIsCall(!isCall);
  };

  const handleCallScreenToggle = () => {
    setIsCall(!isCall);
  };

  const handleAnswerCall = () => {
    setIsCall(true);
    setIsIncomingCall(false);
  };

  return (
    <>
      {isIncomingCall && <Popup handleAnswerCall={handleAnswerCall} />}
      <CallScreen
        remoteStream={remoteStream}
        setRemoteStream={setRemoteStream}
        localStream={localStream}
        setLocalStream={setLocalStream}
        callObject={callObject}
        setCallObject={setCallObject}
        calleeid={calleeid}
        visible={isCall}
        toggle={handleCallScreenToggle}
        answerObject={answerObject}
        setAnswerObject={setAnswerObject}
      />
      <div className='chat-page'>
        <div className='active-users'>
          <h2 className='text-lg font-bold mb-4'>
            Active Users
            <span> ({currentlyActiveUsers})</span>
          </h2>
          <ul className='active-users-list border'>
            <Users
              activeUsers={activeUsers}
              handleUserSelect={handleUserSelect}
              handleVideoClick={handleVideoClick}
              selectedUser='xyz'
            />
          </ul>
        </div>
        <div className='chat-history relative'>
          <h2 className='text-lg font-bold mb-4'>Chat History</h2>
          <ul className='chat-history-list'>
            {chatHistory.map((message, index) => (
              <li
                key={index + Math.random() * 1000}
                className={`p-2 rounded-lg mb-2 ${
                  message.sender === selectedUser?.name ? "bg-blue-100 font-bold" : ""
                }`}
              >
                <strong>{message.sender}: </strong>
                {message.message}
              </li>
            ))}
          </ul>
          <div className='absolute left-0 right-0 bottom-8 w-full'>
            <div className='flex items-center'>
              <input
                type='text'
                className='flex-1 border border-gray-300 rounded-lg px-4 py-2 mr-2 focus:outline-none'
                placeholder='Type your message...'
                // value={message}
                // onChange={handleInputChange}
              />
              <button
                className='bg-blue-500 text-white px-4 py-2 rounded-lg'
                // onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ChatPage.defaultProps = {
  users: new Object() as TUsers,
};

export default ChatPage;
