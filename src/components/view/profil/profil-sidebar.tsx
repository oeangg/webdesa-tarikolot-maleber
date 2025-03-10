import { NavLink } from "react-router";
import { listNavbarLink } from "../../../data/list-navbarLink";
import { useLocation } from "react-router";
import { cn } from "../../../tools/cn";

export const ProfilSideBarLayout = () => {
  const profilMenu = listNavbarLink.find((n) => n.text === "Profil");
  const location = useLocation();

  if (profilMenu && profilMenu.submenu && profilMenu.submenu.length > 0) {
    return (
      <div className="hidden w-full md:flex md:flex-col py-20">
        <h2 className="mb-8">Tentang Kampung :</h2>
        <ul
          className="flex flex-col gap-2 font-normal text-sm w-full
        "
        >
          {profilMenu.submenu.map((submenuItem) => (
            <li
              key={submenuItem.href}
              className={cn(
                "group hover:border-b hover:border-highlightColor",
                location.pathname === submenuItem.href &&
                  "border-b border-primaryColor"
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
