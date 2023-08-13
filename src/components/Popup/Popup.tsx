import Lottie from "react-lottie-player";
import call from "@/json/Call.json";

export default function Popup({ handleAnswerCall, handleRejectCall, caller }: Component.Popup) {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white p-4 rounded-lg shadow-lg w-[400px]'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-xl font-semibold'>
            Incoming Call from <b>{caller?.caller}</b>
          </h3>
        </div>
        <div className='flex justify-center items-center mb-6'>
          <Lottie loop animationData={call} play style={{ width: 150, height: 150 }} />
        </div>
        <div className='flex justify-between items-center'>
          <button
            onClick={handleRejectCall}
            className='ml-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md'
          >
            Decline
          </button>
          <button
            onClick={handleAnswerCall}
            className='px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md'
          >
            Answer
          </button>
        </div>
      </div>
    </div>
  );
}
