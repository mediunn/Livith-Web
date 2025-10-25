type SignupButtonProps = {
  isActive: boolean;
  title: string;
  onClick: () => void;
};

function SignupButton({ isActive, onClick, title }: SignupButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={!isActive}
      className={`w-full py-15 rounded-6 text-Body2-sm font-semibold font-NotoSansKR ${isActive ? "cursor-pointer text-grayScaleBlack100 bg-mainYellow30" : " text-grayScaleBlack30 bg-grayScaleBlack50"}`}
    >
      {title}
    </button>
  );
}

export default SignupButton;
