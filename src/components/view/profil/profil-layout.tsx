import { Outlet } from "react-router";
import imgHeader from "/cover/headerpage.jpg";
import { ProfilSideBarLayout } from "./profil-sidebar";

export const ProfilLayout = () => {
  return (
    <div className="w-full">
      <div className="relative h-[280px] w-full">
        <img
          src={imgHeader}
          alt="image header"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
        <div className="absolute inset-0 h-[280px] bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:grid-cols-4 md:px-0">
        <div className="col-span-3 py-10">
          <Outlet />
        </div>
        <ProfilSideBarLayout />
      </div>
    </div>
  );
};
