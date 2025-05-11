import BackArrow from "../../widgets/BackArrow";

function ListHeader({ title }: { title: string }) {
  return (
    <div className="flex pt-20 pl-16 pb-2 pr-16">
      <div className="flex items-center">
        <BackArrow />
        <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-6.5 mb-6.5 mr-80 ml-4">
          {title}
        </p>
      </div>
    </div>
  );
}

export default ListHeader;
