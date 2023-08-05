import { useEffect } from "react";

export default function useAnswerRedirect({
  isIncomingCall,
  isMediaLoading,
  localStream,
  setRemoteStream,
}: TuseAnswerRedirect): void {
  useEffect((): void => {
    if (isIncomingCall && !isMediaLoading) {
      isIncomingCall.answer(localStream!);
      isIncomingCall.on("stream", setRemoteStream);
    }
  }, [isIncomingCall, isMediaLoading]);
}
