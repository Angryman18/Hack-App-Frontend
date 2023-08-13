import { useEffect, useState } from "react";
import ChatPage from "@/components/Chatpage";
import socket from "socket";
import useOnlineUsers from "@/hooks/useOnlineUsers";
import useInit from "@/hooks/useInit";
// import Notification from "@/components/Notifications";
import { Toaster } from "react-hot-toast";

function ChatRoom() {
  const [users, setUsers] = useState<TUsers>({});
  useOnlineUsers(setUsers);
  useInit();

  useEffect(() => {
    if (socket.id) {
      socket.emit("user-landed", socket.id);
    }

    // return () => {
    //   socket.disconnect();
    // };
  }, [socket]);

  return (
    <div>
      <ChatPage users={users} setUsers={setUsers} />
      <Toaster position='bottom-left' />
    </div>
  );
}

export default ChatRoom;
