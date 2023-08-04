export default function useCounter(): Hooks.TUseCounter {
  const countOnlineUsers = (users: TUsers): number => {
    return Object.keys(users).length;
  };

  return { countOnlineUsers };
}
