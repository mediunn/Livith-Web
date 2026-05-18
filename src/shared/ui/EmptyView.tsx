import EmptyIcon from "../assets/EmptyIcon.svg";

type EmptyViewProps = {
  text: string;
};

export function EmptyView({ text }: EmptyViewProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={EmptyIcon} className="object-cover ml-5 rounded-6" />
      <p className="mt-16 text-grayScaleBlack80 text-Body2-md font-medium font-NotoSansKR text-center whitespace-pre-line">
        {text}
      </p>
    </div>
  );
}
