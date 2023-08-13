import { ShimmerCategoryItem } from "react-shimmer-effects";

export default function UserList({ loading }: { loading: boolean }) {
  if (!loading) return <></>;
  return (
    <div className='overflow-hidden'>
      {new Array(5).fill("").map((item: string, idx: number) => {
        return (
          <div key={idx + item} className='p-2'>
            <ShimmerCategoryItem
              hasImage
              imageType='circular'
              imageWidth={60}
              imageHeight={60}
              text
            />
          </div>
        );
      })}
    </div>
  );
}
