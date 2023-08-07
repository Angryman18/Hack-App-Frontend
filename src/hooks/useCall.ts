import peer from "@/service/peerService";

export default function useCall(
  setRemoteStream: StateSetter<MediaStream | null>,
  setCallObject: StateSetter<Hooks.Connection | null>
): { callTheUser: callTheUser } {
  const callTheUser = (peerid: string, localStream: MediaStream) => {
    const call: Hooks.Connection = peer.call(peerid, localStream);
    call.on("stream", (remoteStream: MediaStream) => {
      setRemoteStream(remoteStream);
    });

    setCallObject(call);

    call.on("close", () => {
      console.log("THE CALL IS CLOSED");
    });
  };

  return { callTheUser };
}
