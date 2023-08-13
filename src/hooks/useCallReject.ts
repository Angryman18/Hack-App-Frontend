import EVENTS from "@/const/events";
import socket from "@/service/socketService";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function useCallReject() {
  useEffect(() => {
    socket.on(EVENTS.CALL_REJECTED, () => {
      toast("Call Rejected. user is busy");
    });
  }, []);
}
