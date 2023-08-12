import EVENTS from "@/const/events";
import socket from "@/service/socketService";
import { useEffect } from "react";

export default function useNotifyCallDisconnect(setRemoteStream: StateSetter<MediaStream | null>) {
  useEffect(() => {
    socket.on(EVENTS.USER_LEFT, () => {
      console.log("EVENT FIRED");
      setRemoteStream(null);
    });
    return () => {
      socket.off(EVENTS.USER_LEFT);
    };
  }, []);
}
