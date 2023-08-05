import ReactPlayer from "react-player";
import { Box } from "@mui/material";

export default function StreamPlayer({
  muted,
  url,
  width,
  height,
}: Component.StreamPlayer): JSX.Element {
  return (
    <Box
      sx={{
        borderRadius: "5px",
        width: width,
        height: height,
        overflow: "hidden",
      }}
    >
      <ReactPlayer
        style={{ transform: "scaleX(-1)" }}
        playing={true}
        muted={muted}
        url={url}
        width={width}
        height={height}
      />
    </Box>
  );
}

StreamPlayer.defaultProps = {
  muted: false,
};
