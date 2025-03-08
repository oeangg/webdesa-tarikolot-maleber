import { RiHomeSmileFill } from "react-icons/ri";
import { LinkButton } from "../../ui/link";
import { FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router";
import { cn } from "../../../tools/cn";

type PropsType = {
  header: boolean;
};

export const HeaderInfo = ({ header }: PropsType) => {
  return (
    <div className={cn("px-4 lg:px-0  w-full", header ? "py-1" : "py-6")}>
      <div className="max-w-5xl w-full flex flex-row gap-4 mx-auto justify-between  items-center">
        <NavLink
          to="/"
          className="flex flex-row items-center gap-1 text-primaryColor "
        >
          <RiHomeSmileFill size={46} />
          <div className="flex flex-col -space-y-1 text-sm font-light ">
            <span className=" tracking-tighter text-xs uppercase">
              Dusun VI Tarikolot
            </span>
            <span className="font-normal text-highlightColor tracking-wider uppercase">
              Desa Maleber
            </span>
            <span className="text-xs tracking-normal">
              {" "}
              Kuningan Jawa Barat
            </span>
          </div>
        </NavLink>

        <div className="w-1/3  text-xs font-light text-right md:font-medium md:text-center md:text-sm lg:text-base">
          <p className="leading-4">
            Selamat Menunaikan Ibadah Puasa Ramadhan 1446 H
          </p>
        </div>

        <div className="hidden md:flex">
          <LinkButton href="/contact" theme="border" size="md">
            <FaPhone size={16} /> Hubungi Kami
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
