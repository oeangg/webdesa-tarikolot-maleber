import React from "react";
import { NavLink } from "react-router";
import { cn } from "../../tools/cn";

interface IProps {
  href: string;
  children: React.ReactNode;
  theme: "bg" | "border";
  size: "sm" | "md";
}

export const LinkButton = (props: IProps) => {
  const { href, children, theme, size } = props;

  const handleClicktoTopElement = () => {};

  return (
    <NavLink
      to={href}
      onClick={handleClicktoTopElement}
      className={cn(
        "group flex duration-300 w-fit  flex-row items-center gap-2   rounded-lg",
        theme === "bg"
          ? "bg-primaryColor text-backgroundColor hover:bg-highlightColor "
          : "border-2 border-primaryColor text-primaryColor hover:bg-hoverColor",
        size === "md"
          ? "px-5 py-3 text-base font-normal"
          : "py-1 px-5 text-sm font-light"
      )}
    >
      {children}
    </NavLink>
  );
};
