import GradientText from "./GradientText/GradientText";
import Button from "./Button/Index";
import { useEffect } from "react";
import peer from "peer";
import socket from "socket";

const LandingPage = () => {
  useEffect(() => {
    peer.destroy();
    socket.disconnect();
  }, []);
  return (
    <div>
      {/* <Header /> */}

      <div className='flex h-screen justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
        <div className='text-center'>
          <GradientText text='Simple Chat' />
          <Button
            size='large'
            text='Go to chatroom'
            onClick={() => (window.location.href = "/chat")}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
