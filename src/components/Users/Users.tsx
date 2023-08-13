import PicGenerator from "../PicGenerator/PicGenerator";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
// import WifiCallingOutlinedIcon from "@mui/icons-material/WifiCallingOutlined";
import { memo } from "react";
import colors from "@/const/colors";
import UserList from "../Shimmer/UserList";

function Users({ activeUsers, selectedUser, handleVideoClick }: Component.Users): JSX.Element {
  return (
    <>
      <UserList loading={!activeUsers.length} />
      {activeUsers.map((user: TActiveUsers, idx: number) => (
        <li
          key={user.peerid}
          className={`flex items-center p-2 rounded-lg mb-2 cursor-pointer ${
            selectedUser === user.socketid
              ? "bg-blue-500 text-white font-bold"
              : "hover:bg-gray-200"
          }`}
        >
          <PicGenerator
            colorID={idx > colors.length ? colors[idx % colors.length] : colors[idx]}
            currentUser={user.currentUser!}
            ID={user.socketid}
          />
          <span className='mr-2'>
            {user.currentUser ? "You - " + user.socketid : user.socketid}
          </span>
          <div className='ml-auto flex space-x-3'>
            {!user.currentUser && user.status !== "in call" && (
              <div className='flex ml-auto'>
                <VideocamOutlinedIcon
                  onClick={handleVideoClick.bind(null, user)}
                  className='text-blue-500 icon duration-200'
                />
                {/* <WifiCallingOutlinedIcon
              onClick={handleAudioClick.bind(null, user)}
                className={`icon text-blue-500 ${
                  selectedUser === user.socketid ? "text-white" : ""
                }`}
              /> */}
              </div>
            )}

            <div className='text-[10px] font-semibold border border-green-200 text-green-700 bg-green-50 rounded-full px-2 py-0.5'>
              {user?.status}
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default memo(Users);
