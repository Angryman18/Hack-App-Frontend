import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import MicOffIcon from "@mui/icons-material/MicOff";

function Mute({ isMute, onClick }: Component.Mute) {
  return isMute ? (
    <div
      onClick={onClick}
      className='p-4 border-2 rounded-full cursor-pointer bg-red-500 shadow-md'
    >
      <MicOffIcon fontSize='large' sx={{ color: "white" }} />
    </div>
  ) : (
    <div
      onClick={onClick}
      className='p-4 border-2 rounded-full cursor-pointer border-indigo-400 shadow-md'
    >
      <MicNoneOutlinedIcon fontSize='large' color='primary' sx={{ color: "gray-500" }} />
    </div>
  );
}

export default Mute;
