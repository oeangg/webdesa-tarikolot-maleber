import React from "react";
import { NavLink } from "react-router";
import { cn } from "../../tools/cn";

interface IProps {
  href: string;
  children: React.ReactNode;
  theme: "bg" | "border";
}

export const LinkButton = (props: IProps) => {
  const { href, children, theme } = props;

  const handleClicktoTopElement = () => {};

  return (
    <NavLink
      to={href}
      onClick={handleClicktoTopElement}
      className={cn(
        "group px-5 flex duration-300 w-fit text-base font-normal flex-row items-center gap-2 py-3   rounded-lg",
        theme === "bg"
          ? "bg-primaryColor text-backgroundColor hover:bg-highlightColor "
          : "border-2 border-primaryColor text-primaryColor hover:bg-hoverColor"
      )}
    >
      {children}
    </NavLink>
  );
};
