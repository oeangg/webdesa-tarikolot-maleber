import imgHeader from "/icon/home.png";
import { NavLink } from "react-router";

export const HeaderLogo = () => {
  return (
    <NavLink
      to="/"
      className="flex flex-row items-center gap-2 text-primaryColor"
    >
      {/* <RiHomeSmileFill size={46} /> */}
      <img
        src={imgHeader}
        alt="icon header"
        style={{ height: "28px", width: "auto" }}
      />
      <div className="flex flex-col -space-y-1.5 font-Inter text-sm font-bold text-primaryColor/70">
        <span className="tracking-normal">Dusun VI Tarikolot</span>
        <span className="uppercase tracking-widest">Desa Maleber</span>
      </div>
    </NavLink>
  );
};
