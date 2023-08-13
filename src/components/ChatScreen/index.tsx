import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function ChatScreen() {
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
  return (
    <div className='chat-history relative'>
      <h2 className='text-lg font-bold mb-4'>Chat History</h2>
      <ul className='chat-history-list'>
        {chatHistory.map((message, index) => (
          <li key={index + Math.random() * 1000} className={`p-2 rounded-lg mb-2`}>
            <strong>{message.sender}: </strong>
            {message.message}
          </li>
        ))}
      </ul>
      <div className='absolute left-0 right-0 bottom-0 blur-[1px] w-full'>
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
      <div className='absolute left-0 right-0 bottom-0 w-full h-12 z-10'>
        <div className='h-full flex justify-center text-gray-600 items-center space-x-2'>
          <LockOutlinedIcon fontSize='small' />
          <p>will be avilable soon</p>
        </div>
      </div>
    </div>
  );
}
