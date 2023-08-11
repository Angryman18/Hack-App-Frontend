import player from "./player.mp3";
import disconnect from "./disconnect.mp3";

const media = {
  INCOMING: player,
  DISCONNECT: disconnect,
} as const;

export default media;
