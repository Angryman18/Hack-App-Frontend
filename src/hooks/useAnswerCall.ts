import { useEffect } from "react";
import peer from "@/service/peerService";
import audioService from "@/service/audioService";

export default function useAnswerCall(
  setAnswerObject: StateSetter<Hooks.Connection | null>,
  setIsIncomingCall: StateSetter<boolean>
): void {
  useEffect((): void => {
    peer.on("call", async (call: Hooks.Connection) => {
      setIsIncomingCall(true);
      setAnswerObject(call);
      await audioService.Loop.playIncomingCall();
    });
  }, []);
}
