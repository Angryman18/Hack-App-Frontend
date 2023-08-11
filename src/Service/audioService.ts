import media from "../assets";

const audioPlay = (loop: boolean, playable: HTMLAudioElement): Promise<void> => {
  if (loop) playable.loop = true;
  return playable.play();
};

class Loop {
  incomingAudio: HTMLAudioElement;
  disconnect: HTMLAudioElement;
  constructor() {
    this.incomingAudio = new Audio(media.INCOMING);
    this.disconnect = new Audio(media.DISCONNECT);
  }

  playIncomingCall(): Promise<void> {
    this.incomingAudio.pause();
    this.incomingAudio.currentTime = 0;
    return audioPlay.call(null, true, this.incomingAudio);
  }

  stopAudio() {
    Object.values(this).forEach((item: (typeof this)[keyof typeof this]) => {
      const AudioElement = item as HTMLAudioElement;
      if (AudioElement.pause) {
        AudioElement.pause();
        AudioElement.currentTime = 0;
      }
    });
  }
}

class NonLoop extends Loop {
  constructor() {
    super();
  }

  playIncomingCall(): Promise<void> {
    return audioPlay.call(null, false, this.incomingAudio);
  }

  playDisconnect(): Promise<void> {
    return audioPlay.call(null, false, this.disconnect);
  }
}

export default { Loop: new Loop(), NonLoop: new NonLoop() };
