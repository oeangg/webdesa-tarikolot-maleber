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
        "group flex duration-500 w-fit  flex-row items-center gap-2 rounded-lg  ",
        theme === "bg"
          ? "bg-primaryColor text-backgroundColor/90 hover:bg-highlightColor hover:shadow-xl hover:shadow-highlightColor/40 hover:text-backgroundColor "
          : "border-2 border-primaryColor/50 text-primaryColor/80 hover:bg-hoverColor hover:shadow-xl hover:shadow-hoverColor/40 hover:border-primaryColor/70 hover:text-primaryColor ",
        size === "md"
          ? "px-5 py-3 text-base font-normal"
          : "py-2 px-5 text-sm font-light "
      )}
    >
      {children}
    </NavLink>
  );
};
