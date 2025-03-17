import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
// import { HeaderLogo } from "./header-logo";
import { GetTime } from "../../../tools/time";
import { cn } from "../../../lib/utils";
import { NavLink } from "react-router";
import { AiOutlineTikTok } from "react-icons/ai";

type PropsType = {
  header: boolean;
};

export const HeaderInfo = ({ header }: PropsType) => {
  return (
    <div className={cn("w-full px-4 lg:px-0", header ? "py-2" : "py-4")}>
      <div className="mx-auto flex w-full max-w-6xl flex-row items-center justify-between gap-4">
        <div className="-space-y-1 text-backgroundColor md:-space-y-1.5">
          <p className="text-xs font-light tracking-tight md:text-sm">
            {GetTime().thisDay}
          </p>
          <p className="font-Inter text-sm font-semibold tracking-wide text-hoverColor md:text-lg lg:text-xl">
            {GetTime().thisGretting}
          </p>
        </div>

        <div className="flex flex-row gap-2 text-backgroundSecondary/70 md:gap-3">
          <NavLink
            to="https://www.facebook.com/"
            className="flex h-7 w-7 items-center justify-center rounded-sm border border-backgroundSecondary/20 p-1 transition-all duration-300 ease-in-out hover:border-hoverColor/70 hover:text-hoverColor"
          >
            <FaFacebookF size={18} />
          </NavLink>
          <NavLink
            to="https://www.instagram.com/"
            className="flex h-7 w-7 items-center justify-center rounded-sm border border-backgroundSecondary/20 p-1 transition-all duration-300 ease-in-out hover:border-hoverColor/70 hover:text-hoverColor"
          >
            <FaInstagram size={18} />
          </NavLink>
          <NavLink
            to="https://www.tiktok.com/"
            className="flex h-7 w-7 items-center justify-center rounded-sm border border-backgroundSecondary/20 p-1 transition-all duration-300 ease-in-out hover:border-hoverColor/70 hover:text-hoverColor"
          >
            <AiOutlineTikTok size={18} />
          </NavLink>
          <NavLink
            to="https://www.youtube.com/"
            className="flex h-7 w-7 items-center justify-center rounded-sm border border-backgroundSecondary/20 p-1 transition-all duration-300 ease-in-out hover:border-hoverColor/70 hover:text-hoverColor"
          >
            <FaYoutube size={18} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
