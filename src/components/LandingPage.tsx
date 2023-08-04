// import React from "react";
import Header from "./Header";
import GradientText from "./GradientText/GradientText";
import Button from "./Button/Index";

const LandingPage = () => {
  return (
    <div>
      {/* <Header /> */}
      
      <div className='flex h-screen justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
        <div className='text-center'>
          <GradientText text='Simple Chat' />
          <Button size='large' text='Go to chatroom' onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
