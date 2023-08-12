import useGetMediaStream from "@/hooks/useGetMediaStream";
import Modal from "../Modal/Modal";
import { useState, useLayoutEffect } from "react";
import StreamPlayer from "../Streambox/StreamPlayer";
import Mute from "../StreamElements/Mute";
import { Stack, Typography } from "@mui/material";
import Video from "../StreamElements/Video";
import { default as MyButton } from "../Button/ButtonA";
import useCall from "@/hooks/useCall";
import CircularProgress from "@mui/material/CircularProgress";
import useAnswerRedirect from "@/hooks/useAnswerRedirect";
import useResetActions from "@/hooks/useResetActions";
import End from "../StreamElements/End";
import socket from "@/service/socketService";
import EVENTS from "@/const/events";
// import audioService from "@/service/audioService";

export default function CallScreen({
  visible,
  toggle,
  callie,
  localStream,
  remoteStream,
  setLocalStream,
  setRemoteStream,
  answerObject,
  callObject,
  setCallObject,
  setAnswerObject,
}: Component.CallScreen) {
  const [, setError] = useState<Error | null>(null);
  const [videoEnabled, setVideoEnabled] = useState<boolean>(true);
  const [isMute, setIsMute] = useState<boolean>(false);
  const [isMediaLoading, setIsMediaLoading] = useState<boolean>(true);

  useLayoutEffect(() => {
    setIsMute(false);
    setVideoEnabled(true);
    setError(null);
  }, []);

  useAnswerRedirect({ answerObject, isMediaLoading, localStream, setRemoteStream });
  useGetMediaStream(setLocalStream, setError, setIsMediaLoading, visible);
  useResetActions(visible, setVideoEnabled, setIsMute);
  const { callTheUser } = useCall(setRemoteStream, setCallObject);

  const onClose = () => {
    localStream?.getTracks().forEach((track: MediaStreamTrack) => {
      track.stop();
    });
    answerObject?.close();
    callObject?.close();
    setCallObject(null);
    setAnswerObject(null);
    setRemoteStream(null);
    setLocalStream(null);
    toggle();
  };

  const handleMuteClick = () => {
    setIsMute(!isMute);
    const isAudioEnabled = localStream!.getAudioTracks()?.[0]?.enabled;
    localStream!.getAudioTracks()[0].enabled = !isAudioEnabled;
  };
  const handleVideoClick = (): void => {
    const isVideoEnabled = localStream!.getVideoTracks()?.[0]?.enabled;
    localStream!.getVideoTracks()[0].enabled = !isVideoEnabled;
    setVideoEnabled(!videoEnabled);
  };

  const handleClickCall = () => {
    if (localStream && callie?.peerid) {
      socket.emit(EVENTS.CALLING_USER, { caller: socket.id, ...callie });
      callTheUser(callie.peerid, localStream);
    }
  };

  return (
    <Modal open={visible} toggle={toggle} onClose={onClose}>
      <Typography sx={{ margin: "auto", marginBottom: 2 }} variant='h4'>
        Are you ready?
      </Typography>
      <Stack direction='row' justifyContent='space-around' gap={4}>
        {!isMediaLoading && (
          <StreamPlayer playing width={720} height={405} url={localStream!} muted />
        )}
        {(answerObject || remoteStream) && (
          <StreamPlayer playing width={720} height={405} url={remoteStream!} />
        )}
      </Stack>
      {isMediaLoading && <CircularProgress />}
      <Stack
        sx={{ marginTop: 4 }}
        justifyContent='center'
        direction='row'
        gap={3}
        alignItems='center'
      >
        <Mute isMute={isMute} onClick={handleMuteClick} />
        <Video videoEnabled={videoEnabled} onClick={handleVideoClick} />
        <End onClick={onClose} />
      </Stack>
      <Stack
        sx={{ marginTop: 4 }}
        justifyContent='center'
        direction='row'
        gap={3}
        alignItems='center'
      >
        <MyButton onClick={handleClickCall} />
      </Stack>
    </Modal>
  );
}
