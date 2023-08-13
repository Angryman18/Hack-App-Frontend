import { useCallback } from "react";
export default function useTrackStop() {
  const stopTrack = useCallback((track: MediaStream | null) => {
    track?.getTracks().forEach((track: MediaStreamTrack) => {
      track.stop();
    });
  }, []);
  return stopTrack;
}
