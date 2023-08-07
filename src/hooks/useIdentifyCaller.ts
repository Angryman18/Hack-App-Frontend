import EVENTS from "@/const/events";
import socket from "@/service/socketService";
import { useEffect } from "react";

export default function useIdentifyCaller(setter: StateSetter<Caller>): void {
  useEffect(() => {
    socket.on(EVENTS.INCOMING_CALL, (callerObject: Caller) => {
      setter(callerObject);
    });
  }, []);
}
