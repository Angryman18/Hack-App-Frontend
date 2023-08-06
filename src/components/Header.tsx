// import React from "react"
import Button from "@/components/Button/Index";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-10 bg-transparent p-4'>
        <div className='flex items-center justify-between'>
          {/* Left side content */}
          <h1 onClick={() => navigate("/")} className='text-lg font-medium text-black-400'>
            Simple Chat
          </h1>

          {/* Right side content */}
          <Button text='Login' size='small' onClick={() => {}} />
        </div>
      </nav>
    </>
  );
}

export default Header;
