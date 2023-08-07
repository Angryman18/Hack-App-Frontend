export default function Popup({ handleAnswerCall, handleRejectCall, caller }: Component.Popup) {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white p-4 rounded-lg shadow-lg w-80'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-xl font-semibold'>
            Incoming Call from <b>{caller!.caller}</b>
          </h3>
          <button className='text-red-500 hover:text-red-700'>
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className='flex justify-center items-center mb-6'>
          <div className='w-16 h-16 rounded-full bg-gray-200 flex justify-center items-center'>
            <svg
              className='w-8 h-8 text-gray-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 3h18v18H3zM12 8a3 3 0 11-6 0 3 3 0 016 0zM16 16a6 6 0 00-3.2 1h-1.6A6 6 0 008 16a4 4 0 01-4-4c0-1.1.4-2.1 1.1-2.8m2.8-.2A2 2 0 0110 10h4a2 2 0 011.9 1.4L17 12a1 1 0 01-1 1H8a1 1 0 01-1-1v-.5M10 20a1 1 0 01-1-1h2a1 1 0 01-1 1z'
              />
            </svg>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <button
            onClick={handleAnswerCall}
            className='px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md'
          >
            Answer
          </button>
          <button
            onClick={handleRejectCall}
            className='ml-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md'
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
