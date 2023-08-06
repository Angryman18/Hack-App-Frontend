import { useCallback, useEffect } from "react";

const CONSTRAINTS = { audio: true, video: true };

export default function useGetMediaStream(
  setMediaStream: setMediaStream,
  setErrorMedia: setErrorMedia,
  setIsMediaLoading: setIsMediaLoading,
  visible?: boolean
): { handleVideoTracks: () => void } {
  const handleVideoTracks = useCallback(async () => {
    try {
      setIsMediaLoading(true);
      const stream: MediaStream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS);
      setMediaStream(stream);
    } catch (err) {
      setErrorMedia(err as Error);
    } finally {
      setIsMediaLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!visible) {
      setMediaStream(null);
      setErrorMedia(null);
      return;
    }
    handleVideoTracks();
  }, [visible]);

  return { handleVideoTracks };
}
