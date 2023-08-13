import { useEffect } from "react";
import peer from "@/service/peerService";
import audioService from "@/service/audioService";
import useTrackStop from "./useTrackStop";

export default function useAnswerCall(
  setAnswerObject: StateSetter<Hooks.Connection | null>,
  setIsIncomingCall: StateSetter<boolean>,
  setIsCall: StateSetter<boolean>,
  localStream: MediaStream | null,
  setLocalStream: StateSetter<MediaStream | null>,
  setRemoteStream: StateSetter<MediaStream | null>,
  setCallObject: StateSetter<Hooks.Connection | null>,
  answerObject: Hooks.Connection | null,
  callObject: Hooks.Connection | null
): void {
  const trackStop = useTrackStop();
  useEffect(() => {
    peer.on("call", async (call: Hooks.Connection) => {
      setIsIncomingCall(true);
      setIsCall(false);
      trackStop(localStream!);
      answerObject?.close();
      callObject?.close();
      setCallObject(null);
      setAnswerObject(null);
      setRemoteStream(null);
      setLocalStream(null);
      setAnswerObject(call);
      await audioService.Loop.playIncomingCall();
    });
    return () => {
      peer.off("call");
    };
  }, [
    localStream,
    answerObject,
    callObject,
    setCallObject,
    setAnswerObject,
    setRemoteStream,
    setLocalStream,
    setAnswerObject,
    trackStop,
  ]);
}
