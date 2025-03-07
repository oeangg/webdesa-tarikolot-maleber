import { Outlet } from "react-router";
import imgHeader from "../../../assets/images/headerpage.jpg";
import { ProfilSideBarLayout } from "./profil-sidebar";

export const ProfilLayout = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <img
          src={imgHeader}
          alt="image header"
          style={{ height: 220, width: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="grid max-w-5xl mx-auto w-full grid-cols-3 gap-10 ">
        <div className="col-span-2">
          <Outlet />
        </div>
        <ProfilSideBarLayout />
      </div>
    </div>
  );
};
