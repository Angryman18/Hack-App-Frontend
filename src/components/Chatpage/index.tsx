import { useCallback, useMemo, useState } from "react";
import "./ChatPage.scss";
import useCounter from "@/hooks/useCounter";
import useUsers from "@/hooks/useUsers";
import socket from "socket";
import CallScreen from "../CallScreen/CallScreen";
import useAnswerCall from "@/hooks/useAnswerCall";
import Popup from "../Popup/Popup";
// import useAudio from "@/hooks/useAudio";
import useNotification from "@/hooks/useNotification";
import Users from "../Users/Users";
import useIdentifyCaller from "@/hooks/useIdentifyCaller";
import EVENTS from "@/const/events";
import audioService from "@/service/audioService";
import useCallDisconnection from "@/hooks/useCallDisconnection";
import useUpdateUserStatus from "@/hooks/useUpdateUserStatus";
import useNotifyCallDisconnect from "@/hooks/useNotifyCallDisconnect";
import useTrackStop from "@/hooks/useTrackStop";
import ChatScreen from "../ChatScreen";
import useCallReject from "@/hooks/useCallReject";

const ChatPage = (props: Component.ChatPageProps) => {
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [isCall, setIsCall] = useState<boolean>(false);
  const [callie, setCallie] = useState<TActiveUsers>();
  const [caller, setCaller] = useState<Caller | null>(null);
  const [isIncomingCall, setIsIncomingCall] = useState<boolean>(false);
  const [answerObject, setAnswerObject] = useState<Hooks.Connection | null>(null);
  const [callObject, setCallObject] = useState<Hooks.Connection | null>(null);
  const [callId, setCallid] = useState<string>("");

  // useAudio(isIncomingCall);
  const { countOnlineUsers } = useCounter();
  const currentlyActiveUsers = countOnlineUsers(props.users);
  const { getUsers } = useUsers();
  useAnswerCall(
    setAnswerObject,
    setIsIncomingCall,
    setIsCall,
    localStream,
    setLocalStream,
    setRemoteStream,
    setCallObject,
    answerObject,
    callObject
  );
  const stopTrack = useTrackStop();
  useCallDisconnection(callObject, answerObject, callId, setCallid);
  useNotifyCallDisconnect(setRemoteStream, setAnswerObject);
  useNotification(isIncomingCall);
  useIdentifyCaller(setCaller);
  useUpdateUserStatus(props.users, props.setUsers, setCallid);
  useCallReject()
  const activeUsers = useMemo(() => getUsers(props.users, socket.id), [props.users, socket.id]);

  const handleVideoClick = useCallback((user: TActiveUsers) => {
    setCallie(user);
    setIsCall(!isCall);
  }, []);

  const handleAudioClick = useCallback((user: TActiveUsers) => {
    setCallie(user);
    setIsCall(!isCall);
  }, []);

  const handleCallScreenToggle = () => {
    setIsCall(!isCall);
  };

  const handleAnswerCall = () => {
    setIsCall(true);
    setIsIncomingCall(false);
    audioService.Loop.stopAudio();
    socket.emit(EVENTS.CALL_ANSWERED, caller);
    // socket.emit('call-connected', {caller: })
  };

  const handleRejectCall = () => {
    stopTrack(localStream!);
    setIsIncomingCall(false);
    answerObject?.close();
    setAnswerObject(null);
    setLocalStream(null);
    setRemoteStream(null);
    audioService.Loop.stopAudio();
    socket.emit(EVENTS.CALL_REJECTED, caller?.caller);
  };

  return (
    <>
      {isIncomingCall && !!caller && (
        <Popup
          caller={caller}
          handleAnswerCall={handleAnswerCall}
          handleRejectCall={handleRejectCall}
        />
      )}
      <CallScreen
        remoteStream={remoteStream}
        setRemoteStream={setRemoteStream}
        localStream={localStream}
        setLocalStream={setLocalStream}
        callObject={callObject}
        setCallObject={setCallObject}
        callie={callie}
        visible={isCall}
        toggle={handleCallScreenToggle}
        answerObject={answerObject}
        setAnswerObject={setAnswerObject}
      />
      <div className='chat-page'>
        <div className='active-users'>
          <h2 className='text-lg font-bold mb-4'>
            Active Users
            <span> ({currentlyActiveUsers})</span>
          </h2>
          <ul className='active-users-list border'>
            <Users
              activeUsers={activeUsers}
              handleVideoClick={handleVideoClick}
              handleAudioClick={handleAudioClick}
              selectedUser='xyz'
            />
          </ul>
        </div>
        <ChatScreen />
      </div>
    </>
  );
};

ChatPage.defaultProps = {
  users: new Object() as TUsers,
};

export default ChatPage;
