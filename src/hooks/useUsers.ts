export default function useUsers() {
  const getUsers = (users: TUsers, id: string) => {
    const data: TActiveUsers[] = Object.entries(users).reduce(
      (acc: TActiveUsers[], user: TUser): TActiveUsers[] => {
        const [socketid, Details]: TUser = user;
        if (socketid === id) {
          acc.unshift({ socketid, ...Details, currentUser: true });
        } else {
          acc.push({ socketid, ...Details });
        }
        return acc;
      },
      []
    );

    return data;
  };

  return { getUsers };
}
