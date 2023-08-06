export default function PicGenerator({ currentUser, ID }: { currentUser: boolean; ID: string }) {
  const r = (): number => Math.ceil(Math.random() * 255);
  return (
    <div
      style={{
        backgroundColor: `rgb(${r()}, ${r()}, ${r()})`,
      }}
      className='mr-2 font-semibold w-[50px] h-[50px] shadow-md text-2xl font-sans text-white rounded-full flex items-center justify-center uppercase'
    >
      {currentUser ? "Y" : ID?.charAt(0)}
    </div>
  );
}
