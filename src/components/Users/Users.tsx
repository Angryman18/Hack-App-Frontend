import PicGenerator from "../PicGenerator/PicGenerator";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import WifiCallingOutlinedIcon from "@mui/icons-material/WifiCallingOutlined";
import { memo } from "react";
import colors from "@/const/colors";

function Users({
  activeUsers,
  handleUserSelect,
  selectedUser,
  handleVideoClick,
}: Component.Users): JSX.Element {
  return (
    <>
      {activeUsers.map((user: TActiveUsers, idx: number) => (
        <li
          key={user.peerid}
          className={`flex items-center p-2 rounded-lg mb-2 cursor-pointer ${
            selectedUser === user.socketid
              ? "bg-blue-500 text-white font-bold"
              : "hover:bg-gray-200"
          }`}
          onClick={() => handleUserSelect(user)}
        >
          <PicGenerator
            colorID={idx > colors.length ? colors[idx % colors.length] : colors[idx]}
            currentUser={user.currentUser!}
            ID={user.socketid}
          />
          <span className='mr-2'>{user.currentUser ? "You - " + (user.socketid) : user.socketid}</span>
          {!user.currentUser && (
            <div className='flex items-center ml-auto'>
              <VideocamOutlinedIcon
                onClick={handleVideoClick.bind(null, user)}
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
          <div className='text-[10px] ml-auto font-semibold border border-green-200 text-green-700 bg-green-50 rounded-full px-2 py-0.5'>
            {user?.status}
          </div>
        </li>
      ))}
    </>
  );
}

export default memo(Users);
