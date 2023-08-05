import peer from "peer";

export default function useCall(setRemoteStream: setMediaStream): { callTheUser: callTheUser } {
  const callTheUser = (peerid: string, localStream: MediaStream) => {
    const call: Hooks.Connection = peer.call(peerid, localStream);
    call.on("stream", (remoteStream: MediaStream) => {
      console.log("INCOMING STREAM ", remoteStream);
      setRemoteStream(remoteStream);
    });
  };

  return { callTheUser };
}
