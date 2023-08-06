import { useEffect, useState } from "react";
import ChatPage from "@/components/Chatpage";
import socket from "socket";
import useOnlineUsers from "@/hooks/useOnlineUsers";
import useInit from "@/hooks/useInit";

function ChatRoom() {
  // HOOKS DECLARATION
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
      <ChatPage users={users} />
    </div>
  );
}

export default ChatRoom;
