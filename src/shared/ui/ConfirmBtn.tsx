interface ConfirmBtnProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

function ConfirmBtn({
  label,
  onClick,
  disabled = false,
  isLoading = false,
  className = "",
}: ConfirmBtnProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      onClick={() => {
        if (!isDisabled) onClick();
      }}
      disabled={isDisabled}
      className={`
         rounded-10 font-medium text-Body3-md font-NotoSansKR
        
        ${className}
      `}
    >
      {label}
    </button>
  );
}

export default ConfirmBtn;
