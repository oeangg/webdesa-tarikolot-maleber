import { cn } from "../../lib/utils";

type PropsType = {
  index: number;
  categoryActive: boolean;
  onClick: () => void;
  category: string;
};

export const SearchCategory = ({
  index,
  onClick,
  categoryActive,
  category,
}: PropsType) => {
  return (
    <p
      key={index}
      onClick={onClick}
      className={cn(
        " text-xs font-medium px-3 py-1 rounded-md tracking-tight cursor-pointer hover:text-backgroundColor hover:bg-primaryColor/90 ",
        categoryActive
          ? "bg-primaryColor text-backgroundColor   "
          : "bg-backgroundSecondary text-primaryColor/50 border border-secondaryColor "
      )}
    >
      {category}
    </p>
  );
};
