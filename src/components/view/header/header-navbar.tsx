import { NavLink, useLocation } from "react-router";
import { cn } from "../../../lib/utils";
import { HamburgerMenu } from "./hamburger-menu";
import { listNavbarLink } from "../../../data/list-navbarLink";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react";
import { HeaderLogo } from "./header-logo";

type PropsType = {
  onClick: () => void;
  // header: boolean;
  isMobile: boolean;
};

export const Navbar = ({ onClick, isMobile }: PropsType) => {
  const location = useLocation();
  const [openSubMenu, setOpenSubMenu] = useState<{
    [key: number]: boolean;
  }>({});

  const handleSubMenu = (id: number) => {
    setOpenSubMenu((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <nav className="relative flex h-full w-full transform items-center justify-end bg-primaryColor px-4 font-Inter text-backgroundColor/90 md:justify-center md:px-0">
      <div className="mx-auto flex w-full max-w-6xl flex-row items-center justify-between">
        <div className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
          <HeaderLogo />
        </div>
        {/* ul menu desktop */}
        <ul className="relative hidden w-full text-sm font-medium tracking-tight md:flex md:flex-1 md:flex-row md:items-center md:justify-end">
          {/* ambil link menu dari data */}
          {listNavbarLink.map((link) => (
            <li
              key={link.id}
              // onClick={() => isMobile && onClick()}
              className={cn(
                "flex items-center px-2 duration-300 hover:text-hoverColor md:py-5 lg:px-5",

                location.pathname === link.href &&
                  "border-b-2 border-hoverColor",
              )}
            >
              {/* jika ada submenu tampilkan arrow  */}
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
                // jika tidak ada submenu tampilkan text saja
                <NavLink
                  to={link.href}
                  className="flex flex-row items-center gap-2"
                >
                  {link.text}
                </NavLink>
              )}

              {/* tampilkan submenu */}
              {openSubMenu[link.id] && (
                <div
                  onMouseLeave={() =>
                    setOpenSubMenu((prev) => ({ ...prev, [link.id]: false }))
                  }
                  className="absolute top-[67px] flex flex-col border-b-2 border-red-500 bg-backgroundSecondary text-primaryColor shadow-md"
                >
                  {link.submenu.map((sb, index) => (
                    <NavLink
                      key={index}
                      onClick={() =>
                        setOpenSubMenu((prev) => ({
                          ...prev,
                          [link.id]: false,
                        }))
                      }
                      to={sb.href}
                      className="w-full px-6 py-2 hover:bg-highlightColor hover:text-backgroundColor"
                    >
                      {sb.text}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <HamburgerMenu onClick={onClick} isMobile={isMobile} />
      </div>

      {/* ul menu mobile */}
      <ul
        className={cn(
          "fixed left-0 top-[70px] z-50 block h-screen w-3/4 transform bg-secondaryColor px-6 pt-10 text-sm font-medium tracking-tight text-primaryColor/80 transition-transform duration-300 ease-in-out",
          isMobile ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {listNavbarLink.map((link) => (
          <li
            key={link.id}
            // onClick={() => onClick()}
            className="flex flex-col rounded-md px-2 py-2 duration-300 hover:bg-backgroundColor"
          >
            {/* jika ada submenu tampilkan arrow  */}
            {link.submenu.length > 0 ? (
              <span className="flex flex-row gap-1">
                {link.text}
                <TiArrowSortedDown
                  size={22}
                  className="cursor-pointer"
                  onClick={() => handleSubMenu(link.id)}
                />
              </span>
            ) : (
              // jika tidak ada submenu tampilkan text saja
              <NavLink
                to={link.href}
                className="flex flex-row items-center gap-2"
                onClick={() => onClick()}
              >
                {link.text}
              </NavLink>
            )}

            {/* tampilkan submenu */}
            {openSubMenu[link.id] && (
              <div
                onMouseLeave={() =>
                  setOpenSubMenu((prev) => ({ ...prev, [link.id]: false }))
                }
                className="top-0 flex flex-col bg-backgroundColor text-primaryColor"
              >
                {link.submenu.map((sb, index) => (
                  <NavLink
                    key={index}
                    onClick={() =>
                      setOpenSubMenu((prev) => ({
                        ...prev,
                        [link.id]: false,
                      }))
                    }
                    to={sb.href}
                    className="w-full px-6 py-2 hover:bg-highlightColor hover:text-backgroundColor"
                  >
                    {sb.text}
                  </NavLink>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
