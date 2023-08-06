import { useEffect } from "react";
import peer from "@/service/peerService";
import socket from "socket";

export default function useInit(): void {
  useEffect(() => {
    peer.on("open", (id: string) => {
      socket.emit("peer-user", id);
    });
    return () => {
      peer.off("open");
    };
  }, []);
}
