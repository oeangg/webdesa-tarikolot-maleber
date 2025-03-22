type PropsType = {
  onClick: () => void;
  isMobile: boolean;
};

export const HamburgerMenu = ({ onClick, isMobile }: PropsType) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-[6px] rounded-sm border border-backgroundColor/80 p-[6px] font-semibold text-backgroundColor md:hidden"
    >
      <span
        className={`h-[1.8px] w-5 rounded-sm bg-backgroundColor/80 transition-all duration-300 ease-out ${
          isMobile ? `translate-y-[7px] rotate-45` : `-translate-y-0`
        }`}
      ></span>
      <span
        className={`h-[1.8px] w-5 rounded-sm bg-backgroundColor/80 transition-all duration-300 ease-out ${
          isMobile ? `opacity-0` : `opacity-100`
        } `}
      ></span>
      <span
        className={`h-[1.8px] w-5 rounded-sm bg-backgroundColor/80 transition-all duration-300 ease-out ${
          isMobile ? `-translate-y-2 -rotate-45` : `-translate-y-0`
        }`}
      ></span>
    </button>
  );
};
