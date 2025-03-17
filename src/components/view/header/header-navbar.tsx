import { NavLink, useLocation } from "react-router";
import { cn } from "../../../lib/utils";
import { HamburgerMenu } from "./hamburger-menu";
import { listNavbarLink } from "../../../data/list-navbarLink";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react";
import { HeaderLogo } from "./header-logo";

type PropsType = {
  onClick: () => void;
  header: boolean;
  isMobile: boolean;
};

export const Navbar = ({ onClick, isMobile, header }: PropsType) => {
  const location = useLocation();
  const [openSubMenu, setOpenSubMenu] = useState<{
    [key: number]: boolean;
  }>({});

  const handleSubMenu = (id: number) => {
    setOpenSubMenu((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <nav
      className={cn(
        "relative flex h-16 w-full items-center justify-end border-b border-borderPrimary bg-backgroundColor px-4 font-Inter text-primaryColor md:justify-center md:px-0",
        header && "h-14 shadow-md",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-row items-center justify-between">
        <div className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
          <HeaderLogo />
        </div>
        {/* ul menu */}
        <ul
          className={cn(
            "w-full flex-1 text-sm font-medium tracking-tight md:flex md:flex-row md:items-center md:justify-end",
            isMobile
              ? "absolute left-0 top-14 z-50 block gap-4 space-y-3 bg-backgroundColor px-10 py-10 text-primaryColor shadow-md"
              : "hidden",
          )}
        >
          {/* ambil link menu dari data */}
          {listNavbarLink.map((link) => (
            <li
              key={link.id}
              onClick={() => isMobile && onClick()}
              className={cn(
                "flex items-center px-2 duration-300 hover:text-highlightColor md:py-5 lg:px-5",

                location.pathname === link.href &&
                  "border-b-2 border-primaryColor",
              )}
            >
              {link.submenu.length > 0 ? (
                <span className="flex flex-row items-center justify-center gap-1">
                  {link.text}
                  <TiArrowSortedDown
                    size={22}
                    className="cursor-pointer"
                    onClick={() => handleSubMenu(link.id)}
                  />
                </span>
              ) : (
                <NavLink
                  to={link.href}
                  className="flex flex-row items-center gap-2"
                >
                  {link.text}
                </NavLink>
              )}

              {openSubMenu[link.id] && (
                <ul
                  onMouseLeave={() =>
                    setOpenSubMenu((prev) => ({ ...prev, [link.id]: false }))
                  }
                  className={cn(
                    "z-[99] border-b-2 border-highlightColor bg-backgroundSecondary text-primaryColor shadow-md",
                    isMobile
                      ? "relative"
                      : header
                        ? "absolute top-14 flex flex-col"
                        : "absolute top-16 flex flex-col",
                  )}
                >
                  {link.submenu.map((sb, index) => (
                    <li
                      key={index}
                      className="w-full px-6 py-2 hover:bg-highlightColor hover:text-backgroundColor"
                    >
                      <NavLink
                        onClick={() =>
                          setOpenSubMenu((prev) => ({
                            ...prev,
                            [link.id]: false,
                          }))
                        }
                        to={sb.href}
                      >
                        {sb.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <HamburgerMenu onClick={onClick} isMobile={isMobile} />
      </div>
    </nav>
  );
};
