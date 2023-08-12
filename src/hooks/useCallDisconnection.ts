import EVENTS from "@/const/events";
import audioService from "@/service/audioService";
import socket from "@/service/socketService";
import { useCallback, useEffect } from "react";

export default function useCallDisconnection(
  callObject: Hooks.Connection | null,
  answerObject: Hooks.Connection | null,
  callId: string,
  setCallid: StateSetter<string>
) {
  const handleCallDisconnection = useCallback(async () => {
    socket.emit(EVENTS.CALL_DISCONNECT, { socketId: socket.id, callId });
    await audioService.NonLoop.playDisconnect();
    setCallid("");
  }, [callId]);

  useEffect(() => {
    callObject?.on("close", handleCallDisconnection);
    answerObject?.on("close", handleCallDisconnection);
    return () => {
      callObject?.off("close");
      answerObject?.off("close");
    };
  }, [callObject, answerObject, handleCallDisconnection]);
}
