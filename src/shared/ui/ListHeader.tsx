import BackArrow from "./BackArrow";

interface ListHeaderProps {
  title?: string;
  rightElement?: React.ReactNode;
}

function ListHeader({ title, rightElement }: ListHeaderProps) {
  return (
    <div className="sticky top-0 z-50 bg-grayScaleBlack100 max-w-md w-full flex pt-20 pl-16 pb-8 pr-16">
      <div className="flex items-center w-full">
        <BackArrow />
        <p className="flex-1 text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR line-clamp-1">
          {title}
        </p>
        {rightElement}
      </div>
    </div>
  );
}

export default ListHeader;
