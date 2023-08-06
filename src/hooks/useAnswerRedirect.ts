import { useEffect } from "react";

export default function useAnswerRedirect({
  answerObject,
  isMediaLoading,
  localStream,
  setRemoteStream,
}: TuseAnswerRedirect): void {
  useEffect((): void => {
    if (answerObject && !isMediaLoading && localStream) {
      answerObject.answer(localStream);
      answerObject.on("stream", setRemoteStream);
    }
  }, [answerObject, isMediaLoading, localStream]);
}
