export default function PicGenerator({
  currentUser,
  ID,
  colorID,
}: {
  currentUser: boolean;
  ID: string;
  colorID: string;
}) {
  // const r = (): number => Math.ceil(Math.random() * 255);
  return (
    <div
      style={{
        backgroundColor: `${colorID}`,
      }}
      className='mr-2 font-semibold w-[50px] h-[50px] shadow-md text-2xl font-sans text-white rounded-full flex items-center justify-center uppercase'
    >
      {currentUser ? "Y" : ID?.charAt(0)}
    </div>
  );
}
