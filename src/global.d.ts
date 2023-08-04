declare global {
  type TPeerInfo = { peerid: string; [key: string]: string };
  type TUser = [string, TPeerInfo];
  type TUsers = { [key: string]: peerInfo };
  interface TActiveUsers extends TUsers, TPeerInfo {
    socketid: string;
    currentUser?: boolean;
  }

  namespace Hooks {
    declare type TCountOnlineUsers = (user: TUsers) => number;
    declare type TUseCounter = {
      countOnlineUsers: TCountOnlineUsers;
    };
  }

  namespace Component {
    type ChatPageProps = {
      users: TUsers;
    };
  }
}

export {};
