import { FaPhone } from "react-icons/fa6";
import { HeaderLogo } from "./header-logo";
import { GetTime } from "../../../tools/time";
import { cn } from "../../../lib/utils";
import { NavLink } from "react-router";

type PropsType = {
  header: boolean;
};

export const HeaderInfo = ({ header }: PropsType) => {
  return (
    <div className={cn("w-full px-4 lg:px-0", header ? "py-2" : "py-6")}>
      <div className="mx-auto flex w-full max-w-6xl flex-row items-center justify-between gap-4">
        <HeaderLogo />

        <div className="hidden w-1/3 text-right text-xs font-light text-secondaryColor md:flex md:justify-center md:text-center md:text-sm md:font-semibold">
          <p className="leading-4 md:px-10 md:uppercase lg:leading-5 lg:tracking-wide">
            {/* Selamat Menunaikan Ibadah Puasa Ramadhan 1446 H */}
            {GetTime()}
          </p>
        </div>

        <div className="">
          <NavLink
            to="/contact"
            className="group flex items-center justify-center gap-1 rounded-full border border-primaryColor bg-hoverColor px-4 py-[6px] text-xs font-medium text-primaryColor duration-300 hover:border-hoverColor hover:bg-primaryColor hover:text-hoverColor md:text-sm"
          >
            <FaPhone
              size={22}
              className="h-8 w-8 rounded-full border-2 border-primaryColor/90 p-1 text-primaryColor group-hover:border-hoverColor group-hover:text-hoverColor"
            />{" "}
            Layanan 25 Jam
          </NavLink>
        </div>
      </div>
    </div>
  );
};
