import useGetMediaStream from "@/hooks/useGetMediaStream";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";
import StreamPlayer from "../Streambox/StreamPlayer";
import Mute from "../StreamElements/Mute";
import { Stack } from "@mui/material";
import Video from "../StreamElements/Video";
import { default as MyButton } from "../Button/ButtonA";
import useCall from "@/hooks/useCall";
import CircularProgress from "@mui/material/CircularProgress";
import useAnswerRedirect from "@/hooks/useAnswerRedirect";

export default function CallScreen({
  visible,
  toggle,
  calleeid,
  localStream,
  remoteStream,
  setLocalStream,
  setRemoteStream,
  isIncomingCall,
}: Component.CallScreen) {
  const [error, setError] = useState<Error | null>(null);
  const [videoEnabled, setVideoEnabled] = useState<boolean>(true);
  const [isMute, setIsMute] = useState<boolean>(false);
  const [isMediaLoading, setIsMediaLoading] = useState<boolean>(true);

  useAnswerRedirect({ isIncomingCall, isMediaLoading, localStream, setRemoteStream });
  const { callTheUser } = useCall(setRemoteStream);
  const { handleVideoTracks } = useGetMediaStream(
    setLocalStream,
    setError,
    setIsMediaLoading,
    visible
  );

  const onClose = () => {
    localStream?.getTracks().forEach((track: MediaStreamTrack) => {
      track.stop();
    });
    setLocalStream(null);
    toggle();
  };

  const handleMuteClick = () => setIsMute(!isMute);
  const handleVideoClick = (): void => {
    const isVideoEnabled = localStream!.getVideoTracks()[0].enabled;
    localStream!.getVideoTracks()[0].enabled = !isVideoEnabled;
    setVideoEnabled(!videoEnabled);
  };

  const handleClickCall = () => {
    if (localStream) {
      callTheUser(calleeid!, localStream);
    }
  };

  return (
    <Modal open={visible} toggle={toggle} onClose={onClose}>
      <Stack direction='row' justifyContent='space-around' gap={4}>
        {!isMediaLoading && (
          <StreamPlayer playing width={528} height={297} url={localStream!} muted />
        )}
        {(isIncomingCall || remoteStream) && (
          <StreamPlayer playing width={528} height={297} url={remoteStream!} />
        )}
      </Stack>
      {isMediaLoading && <CircularProgress />}
      <Stack justifyContent='center' direction='row' gap={3} alignItems='center'>
        <Mute isMute={isMute} onClick={handleMuteClick} />
        <Video videoEnabled={videoEnabled} onClick={handleVideoClick} />
      </Stack>
      <Stack justifyContent='center' direction='row' gap={3} alignItems='center'>
        <MyButton onClick={handleClickCall} />
      </Stack>
    </Modal>
  );
}
