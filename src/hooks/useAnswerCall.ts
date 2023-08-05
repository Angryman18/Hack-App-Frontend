import { useEffect } from "react";
import peer from "peer";

export default function useAnswerCall(
  setRemoteStream: setCallObject,
  setIsIncomingCall: setIsIncomingCall
): void {
  useEffect((): void => {
    peer.on("call", (call: Hooks.Connection) => {
      setIsIncomingCall(true);
      setRemoteStream(call);
    });
  }, []);
}
