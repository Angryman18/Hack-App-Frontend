import Peer, { MediaConnection, PeerConnectOption } from "peerjs";
import React from "react";

declare global {
  declare type KeyPick<Interface, Key> = Key extends keyof Interface ? Interface[Key] : never;
  type TPeerInfo = { peerid: string; status?: string; [key: string]: string };
  type TUser = [string, TPeerInfo];
  type TUsers = { [key: string]: peerInfo };
  interface TActiveUsers extends TUsers, TPeerInfo {
    socketid: string;
    currentUser?: boolean;
  }
  interface Caller extends TActiveUsers {
    caller: string;
  }

  declare type TstatusObject = {socketIds: string[], status: string}

  declare type StateSetter<K> = (data: K) => void | K;

  // declare type setMediaStream = (MediaStream: MediaStream | null) => void | any;
  // declare type setErrorMedia = (Error: Error | null) => void | any;
  // declare type setRemoteStream = (MediaStream: MediaStream | null) => void | any;
  // declare type setIsMediaLoading = (val: boolean) => void | any;
  declare type callTheUser = (socketId: string, localStream: MediaStream) => void | any;
  // declare type setIsIncomingCall = (val: boolean) => void | any;
  // declare type setCallObject = (MediaConnection: MediaConnection | null) => void | any;

  declare type setVideoEnabled = setIsMediaLoading;
  declare type setIsMute = setIsMediaLoading;

  interface SourceProps {
    media?: string;
    src: string;
    type?: string;
  }
  namespace Hooks {
    declare type TCountOnlineUsers = (user: TUsers) => number;
    declare type TUseCounter = {
      countOnlineUsers: TCountOnlineUsers;
    };

    declare type Connection = MediaConnection;
  }

  declare type TuseAnswerRedirect = {
    answerObject: Hooks.Connection | null;
    isMediaLoading: boolean;
    localStream: MediaStream | null;
    setRemoteStream: setMediaStream;
  };

  namespace Component {
    declare type ChatPageProps = {
      users: TUsers;
    };
    declare type ModalProps = {
      open: boolean;
      toggle?: () => void | any;
      children: React.ReactNode;
      onClose: () => void | any;
    };

    declare type StreamPlayer = {
      muted: boolean;
      url: string | MediaStream | string[] | SourceProps[];
      width: number;
      height: number;
      playing: boolean;
    };

    declare type CallScreen = {
      visible: boolean;
      toggle: () => void | any;
      callie?: TActiveUsers;
      remoteStream: MediaStream | null;
      setRemoteStream: setMediaStream;
      localStream: MediaStream | null;
      setLocalStream: setMediaStream;
      answerObject: Hooks.Connection | null;
      callObject: Hooks.Connection | null;
      setCallObject: StateSetter<Hooks.Connection | null>;
      setAnswerObject: StateSetter<Hooks.Connection | null>;
    };

    declare type Mute = {
      isMute: boolean;
      onClick: () => void | any;
    };
    declare type Video = {
      videoEnabled: boolean;
      onClick: () => void | any;
    };

    declare type Users = {
      activeUsers: TActiveUsers[];
      handleUserSelect: (user: TActiveUsers) => void | any;
      selectedUser: string;
      handleVideoClick: (user: TActiveUsers) => void | any;
    };

    declare type Popup = {
      handleAnswerCall: () => void | any;
      handleRejectCall: () => void | any;
      caller: Caller | null;
    };
  }
}

export {};
