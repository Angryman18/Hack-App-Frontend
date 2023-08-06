import Peer, { MediaConnection, PeerConnectOption } from "peerjs";
import React from "react";

declare global {
  declare type KeyPick<Interface, Key> = Key extends keyof Interface ? Interface[Key] : never;
  type TPeerInfo = { peerid: string; [key: string]: string };
  type TUser = [string, TPeerInfo];
  type TUsers = { [key: string]: peerInfo };
  interface TActiveUsers extends TUsers, TPeerInfo {
    socketid: string;
    currentUser?: boolean;
  }

  declare type setMediaStream = (MediaStream: MediaStream | null) => void | any;
  declare type setErrorMedia = (Error: Error | null) => void | any;
  // declare type setRemoteStream = (MediaStream: MediaStream | null) => void | any;
  declare type setIsMediaLoading = (val: boolean) => void | any;
  declare type callTheUser = (socketId: string, localStream: MediaStream) => void | any;
  declare type setIsIncomingCall = (val: boolean) => void | any;
  declare type setCallObject = (MediaConnection: MediaConnection | null) => void | any;

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
      calleeid?: string;
      remoteStream: MediaStream | null;
      setRemoteStream: setMediaStream;
      localStream: MediaStream | null;
      setLocalStream: setMediaStream;
      answerObject: Hooks.Connection | null;
      callObject: Hooks.Connection | null;
      setCallObject: setCallObject;
      setAnswerObject: setCallObject;
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
      handleUserSelect: (use: TActiveUsers) => void | any;
      selectedUser: string;
      handleVideoClick: (peerid: KeyPick<TPeerInfo, "peerid">) => void | any;
    };
  }
}

export {};
