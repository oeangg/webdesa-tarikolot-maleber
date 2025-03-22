import { NavLink } from "react-router";
import { listNavbarLink } from "../../../data/list-navbarLink";
import { useLocation } from "react-router";
import { cn } from "../../../lib/utils";

export const HptmSideBarLayout = () => {
  const hptmMenu = listNavbarLink.find((n) => n.text === "HPTM");
  const location = useLocation();

  if (hptmMenu && hptmMenu.submenu && hptmMenu.submenu.length > 0) {
    return (
      <div className="hidden w-full py-28 md:flex md:flex-col">
        <h2 className="mb-8">Tentang HPTM :</h2>
        <ul className="flex w-full flex-col gap-2 text-sm font-normal">
          {hptmMenu.submenu.map((hptm) => (
            <li
              key={hptm.href}
              className={cn(
                "group hover:border-b hover:border-highlightColor",
                location.pathname === hptm.href &&
                  "border-b border-primaryColor",
              )}
            >
              <NavLink
                to={hptm.href}
                className="group-hover:text-highlightColor"
              >
                {hptm.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
