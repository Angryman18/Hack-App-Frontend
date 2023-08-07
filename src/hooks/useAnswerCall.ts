import { useEffect } from "react";
import peer from "@/service/peerService";

export default function useAnswerCall(
  setAnswerObject: StateSetter<Hooks.Connection | null>,
  setIsIncomingCall: StateSetter<boolean>
): void {
  useEffect((): void => {
    peer.on("call", (call: Hooks.Connection) => {
      setIsIncomingCall(true);
      setAnswerObject(call);
    });
  }, []);
}
