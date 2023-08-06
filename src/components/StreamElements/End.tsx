import CallEndIcon from "@mui/icons-material/CallEnd";

function End({ onClick }: { onClick: () => void | any }) {
  return (
    <div
      onClick={onClick}
      className='p-4 border-2 rounded-full cursor-pointer bg-red-500 shadow-md'
    >
      <CallEndIcon fontSize='large' sx={{ color: "white" }} />
    </div>
  );
}

export default End;
