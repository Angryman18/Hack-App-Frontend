import audioService from "@/service/audioService";
import { useEffect } from "react";

export default function useDisconnectionSound(
  callObject: Hooks.Connection | null,
  answerObject: Hooks.Connection | null
) {
  useEffect(() => {
    callObject?.on("close", () => audioService.NonLoop.playDisconnect());
    answerObject?.on("close", () => audioService.NonLoop.playDisconnect());
    return () => {
      callObject?.off("close");
      answerObject?.off("close");
    };
  }, [callObject, answerObject]);
}
