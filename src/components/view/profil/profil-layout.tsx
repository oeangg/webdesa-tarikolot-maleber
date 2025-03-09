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
      <div className="grid max-w-6xl px-4 md:px-0 mx-auto w-full md:grid-cols-3 gap-10 ">
        <div className="col-span-2 py-10">
          <Outlet />
        </div>
        <ProfilSideBarLayout />
      </div>
    </div>
  );
};
