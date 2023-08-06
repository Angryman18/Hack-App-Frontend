import { useEffect, useState } from "react";
import sound from "../assets/player.mp3";

const useAudio = (playing: boolean) => {
  const [audio] = useState(new Audio(sound));
  useEffect(() => {
    audio.loop = true;
    if (playing) audio.play();
    else audio.pause();
  }, [playing]);
};

export default useAudio;
