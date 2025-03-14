import imgHeader from "/icon/home.png";
import { NavLink } from "react-router";

export const HeaderLogo = () => {
  return (
    <NavLink
      to="/"
      className="group flex flex-row items-center gap-3 text-primaryColor"
    >
      {/* <RiHomeSmileFill size={46} /> */}
      <img
        src={imgHeader}
        alt="icon header"
        style={{ height: "45px", width: "auto" }}
      />
      <div className="md: flex flex-col -space-y-1 font-Inter text-sm font-bold text-backgroundColor/80 sm:text-base md:-space-y-2 md:text-lg">
        <span className="tracking-normal">Dusun VI Tarikolot</span>
        <span className="uppercase tracking-widest text-hoverColor/80">
          Desa Maleber
        </span>
      </div>
    </NavLink>
  );
};
