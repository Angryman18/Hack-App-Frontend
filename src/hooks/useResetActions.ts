import { useEffect } from "react";

export default function useResetActions(
  visible: boolean,
  setVideoEnabled: setVideoEnabled,
  setIsMute: setIsMute
): void {
  useEffect(() => {
    setVideoEnabled(true);
    setIsMute(false);
  }, [visible]);
}
