interface PreferenceItem {
  id: string | number;
  name: string;
}

interface PreferenceSectionProps {
  title: string;
  items: PreferenceItem[];
  emptyDescription: React.ReactNode;
  onClickSetting?: () => void;
}

function PreferenceSection({
  title,
  items,
  emptyDescription,
  onClickSetting,
}: PreferenceSectionProps) {
  const isEmpty = items.length === 0;

  return (
    <div className="mt-20 mx-16">
      <div className="flex justify-between items-center">
        <p className="text-grayScaleBlack30 text-Body2-sm font-semibold font-NotoSansKR">
          {title}
        </p>

        <button
          onClick={onClickSetting}
          className="m-8 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR cursor-pointer"
        >
          {isEmpty ? "설정하기" : "변경하기"}
        </button>
      </div>

      <div className="mt-10">
        {isEmpty ? (
          <p className="text-center text-grayScaleBlack80 text-Body2-md font-medium font-NotoSansKR">
            {emptyDescription}
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-10">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-grayScaleBlack80 rounded-6 flex items-center justify-center aspect-square"
              >
                <p className="text-center text-grayScaleWhite text-Body2-sm font-semibold font-NotoSansKR px-4 break-words">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PreferenceSection;
