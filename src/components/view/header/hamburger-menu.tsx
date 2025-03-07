type PropsType = {
  onClick: () => void;
  isMobile: boolean;
};

export const HamburgerMenu = ({ onClick, isMobile }: PropsType) => {
  return (
    <button
      onClick={onClick}
      className="flex h-8 w-8 flex-col items-center justify-center gap-[6px] rounded-md border-2 border-secondaryColor p-1 font-semibold text-backgroundColor md:hidden"
    >
      <span
        className={`h-[1.8px] w-5 rounded-sm bg-secondaryColor transition-all duration-300 ease-out ${
          isMobile ? `translate-y-[7px] rotate-45` : `-translate-y-0`
        }`}
      ></span>
      <span
        className={`h-[1.8px] w-5 rounded-sm bg-secondaryColor transition-all duration-300 ease-out ${
          isMobile ? `opacity-0` : `opacity-100`
        } `}
      ></span>
      <span
        className={`h-[1.8px] w-5 rounded-sm bg-secondaryColor transition-all duration-300 ease-out ${
          isMobile ? `-translate-y-2 -rotate-45` : `-translate-y-0`
        }`}
      ></span>
    </button>
  );
};
