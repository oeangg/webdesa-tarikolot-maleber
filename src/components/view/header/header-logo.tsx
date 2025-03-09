import imgHeader from "../../../assets/images/home2.png";
import { NavLink } from "react-router";

export const HeaderLogo = () => {
  return (
    <NavLink
      to="/"
      className="flex flex-row items-center gap-2 text-primaryColor group "
    >
      {/* <RiHomeSmileFill size={46} /> */}
      <img
        src={imgHeader}
        alt="icon header"
        style={{ height: "50px", width: "auto" }}
      />
      <div className="flex flex-col -space-y-1 text-sm font-light text-foregroundSecondary ">
        <span className=" tracking-tight text-xs uppercase">
          Dusun VI Tarikolot
        </span>
        <span className="font-light text-highlightColor tracking-widest uppercase">
          Desa Maleber
        </span>
        <span className="text-xs tracking-wide"> Kuningan Jawa Barat</span>
      </div>
    </NavLink>
  );
};
