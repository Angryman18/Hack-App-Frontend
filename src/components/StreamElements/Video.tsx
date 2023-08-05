import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";

function Video({ videoEnabled, onClick }: Component.Video) {
  return !videoEnabled ? (
    <div
      onClick={onClick}
      className='p-4 border-2 rounded-full cursor-pointer bg-red-500 shadow-md'
    >
      <VideocamOffOutlinedIcon fontSize='large' sx={{ color: "white" }} />
    </div>
  ) : (
    <div
      onClick={onClick}
      className='p-4 border-2 rounded-full cursor-pointer border-indigo-400 shadow-md'
    >
      <VideocamOutlinedIcon fontSize='large' color='primary' sx={{ color: "gray-500" }} />
    </div>
  );
}

export default Video;
