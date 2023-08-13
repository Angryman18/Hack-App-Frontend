import EVENTS from "@/const/events";
import socket from "@/service/socketService";
import { useEffect } from "react";

export default function useNotifyCallDisconnect(
  setRemoteStream: StateSetter<MediaStream | null>,
  setAnswerObject: StateSetter<Hooks.Connection | null>
) {
  useEffect(() => {
    socket.on(EVENTS.USER_LEFT, () => {
      setRemoteStream(null);
      setAnswerObject(null);
    });
    return () => {
      socket.off(EVENTS.USER_LEFT);
    };
  }, []);
}
