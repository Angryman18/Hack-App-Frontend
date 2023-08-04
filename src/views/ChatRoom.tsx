import { useEffect, useState } from "react";
import ChatPage from "@/components/Chatpage";
import { socket } from "socket";
import peer from "peer";
import useOnlineUsers from "@/hooks/useOnlineUsers";

function ChatRoom() {
  const [users, setUsers] = useState<TUsers>({});
  useOnlineUsers(setUsers);

  useEffect(() => {
    if (socket.id) {
      socket.emit("user-landed", socket.id);
    }
  }, [socket]);

  useEffect(() => {
    peer.on("open", (id: string) => {
      socket.emit("peer-user", id);
    });
    return () => {
      peer.off("open");
    };
  }, []);

  console.log("ACTIVE USERS ARE ", users);

  return (
    <div>
      <ChatPage users={users} />
    </div>
  );
}

export default ChatRoom;
