import { useEffect } from "react";
import peer from "@/service/peerService";

export default function useAnswerCall(
  setAnswerObject: setCallObject,
  setIsIncomingCall: setIsIncomingCall
): void {
  useEffect((): void => {
    peer.on("call", (call: Hooks.Connection) => {
      setIsIncomingCall(true);
      setAnswerObject(call);
    });
  }, []);
}
