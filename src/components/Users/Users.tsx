import PicGenerator from "../PicGenerator/PicGenerator";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import WifiCallingOutlinedIcon from "@mui/icons-material/WifiCallingOutlined";

function Users({
  activeUsers,
  handleUserSelect,
  selectedUser,
  handleVideoClick,
}: Component.Users): JSX.Element {
  return (
    <>
      {activeUsers.map((user: TActiveUsers) => (
        <li
          key={user.peerid}
          className={`flex items-center p-2 rounded-lg mb-2 cursor-pointer ${
            selectedUser === user.socketid
              ? "bg-blue-500 text-white font-bold"
              : "hover:bg-gray-200"
          }`}
          onClick={() => handleUserSelect(user)}
        >
          <PicGenerator currentUser={user.currentUser!} ID={user.socketid} />
          <span className='mr-2'>{user.currentUser ? "You" : user.socketid}</span>
          {!user.currentUser && (
            <div className='flex items-center ml-auto'>
              <VideocamOutlinedIcon
                onClick={handleVideoClick.bind(null, user.peerid)}
                className={`icon text-blue-500 ${
                  selectedUser === user.socketid ? "text-white" : ""
                }`}
              />
              <WifiCallingOutlinedIcon
                className={`icon text-blue-500 ${
                  selectedUser === user.socketid ? "text-white" : ""
                }`}
              />
            </div>
          )}
          <div className='text-[10px] font-semibold border border-green-200 text-green-700 bg-green-50 rounded-full px-2 py-0.5'>
            in call
          </div>
        </li>
      ))}
    </>
  );
}

export default Users;