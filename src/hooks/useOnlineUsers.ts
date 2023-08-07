import { useEffect } from "react";
import socket from "socket";

export default function useOnlineUsers(stateSetter: StateSetter<TUsers>): void {
  const handleUserJoin = (info: TUsers) => {
    stateSetter((pre: TUsers) => {
      return { ...pre, ...info };
    });
  };

  const handleUserExit = (socketid: string) => {
    stateSetter((pre: TUsers) => {
      delete pre[socketid];
      return { ...pre };
    });
  };

  const handleActiveUsers = (info: TUsers) => {
    stateSetter(info);
  };

  useEffect(() => {
    socket.on("active-users", handleActiveUsers);
    socket.on("user-join", handleUserJoin);
    socket.on("user-exit", handleUserExit);
    return () => {
      socket.off("active-users", handleActiveUsers);
      socket.off("user-join", handleUserJoin);
      socket.off("user-exit", handleUserExit);
    };
  }, []);
}
