import { NavLink, useLocation } from "react-router";
import { cn } from "../../../lib/utils";
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
        "relative flex h-16 w-full items-center justify-end border-b border-borderPrimary bg-backgroundColor pr-8 text-primaryColor md:justify-center md:pr-0",
        header && "h-14 shadow-md",
      )}
    >
      <ul
        className={cn(
          "mx-auto hidden w-full max-w-6xl flex-row items-center justify-evenly text-sm font-medium uppercase tracking-wide md:flex",
          isMobile
            ? "absolute left-0 top-14 z-50 block gap-4 space-y-3 bg-backgroundColor px-10 py-10 text-primaryColor shadow-md"
            : "hidden",
        )}
      >
        {listNavbarLink.map((link) => (
          <li
            key={link.id}
            onClick={() => isMobile && onClick()}
            className={cn(
              "flex px-5 duration-300 hover:text-highlightColor md:py-5",

              location.pathname === link.href && "text-highlightColor",
            )}
          >
            {link.submenu.length > 0 ? (
              <span className="flex flex-row gap-3">
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
                  "z-[999] border-b-2 border-highlightColor bg-backgroundSecondary text-primaryColor shadow-md",
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
    </nav>
  );
};

// import { NavLink, useLocation } from "react-router";
// import { cn } from "../../../lib/utils";
// import { HamburgerMenu } from "./hamburger-menu";
// import { listNavbarLink } from "../../../data/list-navbarLink";
// import { TiArrowSortedDown } from "react-icons/ti";
// import { useState } from "react";

// type PropsType = {
//   onClick: () => void;
//   header: boolean;
//   isMobile: boolean;
// };

// export const Navbar = ({ onClick, isMobile, header }: PropsType) => {
//   const location = useLocation();
//   const [openSubMenu, setOpenSubMenu] = useState<{
//     [key: number]: boolean;
//   }>({});

//   const handleSubMenu = (id: number) => {
//     setOpenSubMenu((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   return (
//     <nav
//       className={cn(
//         "relative flex h-16 w-full items-center justify-end bg-primaryColor py-4 pr-8 text-backgroundColor transition-all duration-300 ease-in-out md:justify-center md:pr-0",
//         header && "h-14 shadow-md",
//       )}
//     >
//       <ul
//         className={cn(
//           "mx-auto hidden w-full max-w-6xl flex-row items-center justify-evenly text-base font-normal tracking-wide transition-all duration-300 ease-in-out md:flex",
//           isMobile
//             ? "absolute left-0 top-14 z-30 flex flex-col gap-4 bg-secondaryColor py-10 text-primaryColor shadow-xl"
//             : "hidden",
//         )}
//       >
//         {listNavbarLink.map((link) => (
//           <li
//             key={link.id}
//             className={cn(
//               "flex gap-5 duration-300 hover:text-highlightColor",

//               location.pathname === link.href && "text-hoverColor",
//             )}
//           >
//             {link.submenu.length > 0 ? (
//               <span className="flex flex-row gap-3">
//                 {link.text}
//                 <TiArrowSortedDown
//                   size={22}
//                   className="cursor-pointer"
//                   onClick={() => handleSubMenu(link.id)}
//                 />
//               </span>
//             ) : (
//               <NavLink
//                 to={link.href}
//                 className="flex flex-row items-center gap-2"
//               >
//                 {link.text}
//               </NavLink>
//             )}
//             {openSubMenu[link.id] && (
//               <ul
//                 onMouseLeave={() =>
//                   setOpenSubMenu((prev) => ({ ...prev, [link.id]: false }))
//                 }
//                 className={cn(
//                   "z-[999] border-b-2 border-highlightColor bg-backgroundSecondary text-primaryColor shadow-md",
//                   isMobile
//                     ? "relative"
//                     : header
//                       ? "absolute top-14 flex flex-col"
//                       : "absolute top-16 flex flex-col",
//                 )}
//               >
//                 {link.submenu.map((sb, index) => (
//                   <li
//                     key={index}
//                     className="w-full px-6 py-2 hover:bg-highlightColor hover:text-backgroundColor"
//                   >
//                     <NavLink
//                       onClick={() =>
//                         setOpenSubMenu((prev) => ({
//                           ...prev,
//                           [link.id]: false,
//                         }))
//                       }
//                       to={sb.href}
//                     >
//                       {sb.text}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//       <HamburgerMenu onClick={onClick} isMobile={isMobile} />
//     </nav>
//   );
// };
