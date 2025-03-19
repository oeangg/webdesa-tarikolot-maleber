import React from "react";
import { NavLink } from "react-router";
import { cn } from "../../lib/utils";

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
        "group flex w-fit flex-row items-center gap-2 rounded-lg font-Inter tracking-tight duration-500",
        theme === "bg"
          ? "bg-primaryColor text-backgroundColor/90 hover:bg-highlightColor hover:text-backgroundColor hover:shadow-xl hover:shadow-highlightColor/40"
          : "border border-primaryColor/80 text-primaryColor/80 hover:border-highlightColor/70 hover:bg-highlightColor hover:text-backgroundColor hover:shadow-xl hover:shadow-highlightColor/40",
        size === "md"
          ? "px-5 py-3 text-base font-normal"
          : "px-3 py-1 text-sm font-light",
      )}
    >
      {children}
    </NavLink>
  );
};
