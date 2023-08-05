import { AccountCircle } from "@mui/icons-material";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import WifiCallingOutlinedIcon from "@mui/icons-material/WifiCallingOutlined";
import { useState } from "react";
import "./ChatPage.scss";
import useCounter from "@/hooks/useCounter";
import useUsers from "@/hooks/useUsers";
import { socket } from "socket";
import CallScreen from "../CallScreen/CallScreen";
import useAnswerCall from "@/hooks/useAnswerCall";
import Popup from "../Popup/Popup";

const ChatPage = (props: Component.ChatPageProps) => {
  const { countOnlineUsers } = useCounter();
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [isCall, setIsCall] = useState<boolean>(false);
  const { getUsers } = useUsers();
  const currentlyActiveUsers = countOnlineUsers(props.users);
  const [calleeid, setCalleeId] = useState("");
  const [isIncomingCall, setIsIncomingCall] = useState<boolean>(false);
  const [callObject, setCallObject] = useState<Hooks.Connection | undefined>(undefined);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const activeUsers = getUsers(props.users, socket.id);

  useAnswerCall(setCallObject, setIsIncomingCall);

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
        calleeid={calleeid}
        visible={isCall}
        toggle={handleCallScreenToggle}
        isIncomingCall={callObject}
      />
      <div className='chat-page'>
        <div className='active-users'>
          <h2 className='text-lg font-bold mb-4'>
            Active Users
            <span> ({currentlyActiveUsers})</span>
          </h2>
          <ul className='active-users-list border'>
            {activeUsers.map((user: TActiveUsers) => (
              <li
                key={user.peerid}
                className={`flex items-center p-2 rounded-lg mb-2 cursor-pointer ${
                  selectedUser === user ? "bg-blue-500 text-white font-bold" : "hover:bg-gray-200"
                }`}
                onClick={() => handleUserSelect(user)}
              >
                <AccountCircle className='profile-pic mr-2 text-blue-500' />
                <span className='mr-2'>{user.currentUser ? "You" : user.socketid}</span>
                {/* {user.status === "idle" && (
                <FiberManualRecord className='status-indicator text-yellow-500' />
                )}
                {user.status === "in-call" && (
                  <FiberManualRecord className='status-indicator text-green-500' />
                  )}
                  {user.status === "offline" && (
                    <FiberManualRecord className='status-indicator text-red-500' />
                  )} */}
                <div className='flex items-center ml-auto'>
                  <VideocamOutlinedIcon
                    onClick={handleVideoClick.bind(null, user.peerid)}
                    className={`icon text-blue-500 ${selectedUser === user ? "text-white" : ""}`}
                  />
                  <WifiCallingOutlinedIcon
                    className={`icon text-blue-500 ${selectedUser === user ? "text-white" : ""}`}
                  />
                </div>
              </li>
            ))}
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
