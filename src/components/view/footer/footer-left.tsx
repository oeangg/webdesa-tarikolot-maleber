import { NavLink } from "react-router";
import imgFooter from "/icon/home.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";

export const FooterLeft = () => {
  return (
    <div className="basis-1/2 space-y-5 border-b border-backgroundColor/40 p-5 md:border-b-0 md:border-r">
      {/* <RiHomeSmileFill size={72} className="text-highlightColor" /> */}
      <img src={imgFooter} alt="icon home" style={{ height: 52 }} />
      <div className="space-y-2">
        <p className="font-Inter text-lg font-bold tracking-tight text-backgroundSecondary/80 md:text-xl">
          Ti Lembur Balik Deui ka Lembur
        </p>
        <div className="-space-y-1 pb-5 text-backgroundSecondary/60">
          <p className="text-base font-light leading-5 md:w-2/3">
            Semoga website ini menjadi sarana informasi, aspirasi dan promosi
            warga Dusun VI Tarikolot, Desa Maleber, Kecamatan Maleber, Kuningan,
            Jawa barat
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-2 md:gap-3">
        <NavLink
          to="https://www.facebook.com/"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-secondaryColor p-1 text-foregroundSecondary transition-all duration-300 ease-in-out hover:bg-hoverColor"
        >
          <FaFacebookF size={20} />
        </NavLink>
        <NavLink
          to="https://www.instagram.com/"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-secondaryColor p-1 text-foregroundSecondary transition-all duration-300 ease-in-out hover:bg-hoverColor"
        >
          <FaInstagram size={20} />
        </NavLink>
        <NavLink
          to="https://www.tiktok.com/"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-secondaryColor p-1 text-foregroundSecondary transition-all duration-300 ease-in-out hover:bg-hoverColor"
        >
          <AiOutlineTikTok size={20} />
        </NavLink>
        <NavLink
          to="https://www.youtube.com/"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-secondaryColor p-1 text-foregroundSecondary transition-all duration-300 ease-in-out hover:bg-hoverColor"
        >
          <FaYoutube size={20} />
        </NavLink>
      </div>
    </div>
  );
};
