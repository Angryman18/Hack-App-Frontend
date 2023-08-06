import { useEffect } from "react";
import { socket } from "socket";

type Setter = (Users: TUsers) => void;

export default function useOnlineUsers(stateSetter: Setter): void {
  useEffect(() => {
    socket.on("active-users", stateSetter);
    return () => {
      socket.off("active-users", stateSetter);
    };
  }, []);
}
