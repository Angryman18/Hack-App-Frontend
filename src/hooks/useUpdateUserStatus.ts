import EVENTS from "@/const/events";
import socket from "@/service/socketService";
import { useEffect } from "react";

export default function useUpdateUserStatus(users: TUsers, setUsers: StateSetter<TUsers>, setCallid: StateSetter<string>) {
  useEffect(() => {
    socket.on(EVENTS.UPDATE_USER_STATUS, (statusObject: TstatusObject) => {
      const socketIds = statusObject.socketIds;
      setCallid(statusObject.callId)
      console.log(statusObject)
      const usersList = structuredClone(users);
      socketIds.forEach((id: string) => {
        if (usersList[id]) {
          usersList[id] = { ...usersList[id], status: statusObject.status };
        }
      });
      setUsers(usersList);
    });
    return () => {
      socket.off(EVENTS.UPDATE_USER_STATUS);
    };
  }, [users]);
}
