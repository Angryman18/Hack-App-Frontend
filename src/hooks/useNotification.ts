import { useEffect } from "react";

export default function useNotification(isIncomingCall: boolean) {
  useEffect(() => {
    if (isIncomingCall) {
      Notification.requestPermission()
        .then(() => {
          new Notification("You have an incoming call");
        })
        .catch(() => {
          alert("You have denied the call notfication");
        });
    }
  }, [isIncomingCall]);
}
