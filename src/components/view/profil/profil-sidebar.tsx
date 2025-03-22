import { NavLink } from "react-router";
import { listNavbarLink } from "../../../data/list-navbarLink";
import { useLocation } from "react-router";
import { cn } from "../../../lib/utils";

export const ProfilSideBarLayout = () => {
  const profilMenu = listNavbarLink.find((n) => n.text === "Profil");
  const location = useLocation();

  if (profilMenu && profilMenu.submenu && profilMenu.submenu.length > 0) {
    return (
      <div className="hidden w-full py-28 md:flex md:flex-col">
        <h2 className="mb-8">Tentang Kampung :</h2>
        <ul className="flex w-full flex-col gap-2 text-sm font-normal">
          {profilMenu.submenu.map((submenuItem) => (
            <li
              key={submenuItem.href}
              className={cn(
                "group hover:border-b hover:border-highlightColor",
                location.pathname === submenuItem.href &&
                  "border-b border-primaryColor",
              )}
            >
              <NavLink
                to={submenuItem.href}
                className="group-hover:text-highlightColor"
              >
                {submenuItem.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
