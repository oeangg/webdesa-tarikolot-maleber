import { NavLink, useLocation } from "react-router";
import { cn } from "../../../tools/cn";
import { HamburgerMenu } from "./hamburger-menu";
import { listNavbarLink } from "../../../data/list-navbarLink";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react";

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
        "relative py-4 h-16 pr-8 md:pr-0 w-full  bg-primaryColor text-backgroundColor flex items-center transition-all duration-300 ease-in-out justify-end md:justify-center",
        header && "shadow-md h-14"
      )}
    >
      <ul
        className={cn(
          "hidden font-normal tracking-wide text-base duration-300 transition-all ease-in-out  md:flex flex-row justify-evenly items-center max-w-6xl w-full mx-auto ",
          isMobile
            ? "absolute flex flex-col gap-4 bg-secondaryColor shadow-xl text-primaryColor py-10 z-30  left-0 top-14"
            : "hidden"
        )}
      >
        {listNavbarLink.map((link) => (
          <li
            key={link.id}
            className={cn(
              "flex gap-5 hover:text-highlightColor duration-300 ",

              location.pathname === link.href && "text-hoverColor"
            )}
          >
            {link.submenu.length > 0 ? (
              <span className="flex flex-row gap-3">
                {link.text}
                <TiArrowSortedDown
                  size={22}
                  className=" cursor-pointer"
                  onClick={() => handleSubMenu(link.id)}
                />
              </span>
            ) : (
              <NavLink
                to={link.href}
                className="flex flex-row gap-2 items-center "
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
                  " z-[999] shadow-md bg-backgroundSecondary border-b-2 border-highlightColor  text-primaryColor",
                  isMobile
                    ? "relative"
                    : header
                    ? " absolute top-14 flex flex-col"
                    : "absolute top-16 flex flex-col"
                )}
              >
                {link.submenu.map((sb, index) => (
                  <li
                    key={index}
                    className="px-6 py-2 hover:bg-highlightColor hover:text-backgroundColor"
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
    </nav>
  );
};
