import { LinkButton } from "../../ui/link";
import { FaPhone } from "react-icons/fa6";
import { cn } from "../../../tools/cn";
import { HeaderLogo } from "./header-logo";

type PropsType = {
  header: boolean;
};

export const HeaderInfo = ({ header }: PropsType) => {
  return (
    <div className={cn("px-4 lg:px-0  w-full", header ? "py-1" : "py-6")}>
      <div className="max-w-6xl w-full flex flex-row gap-4 mx-auto justify-between  items-center">
        <HeaderLogo />

        <div className="w-1/3  text-xs font-light  text-primaryColor text-right md:font-semibold md:text-center md:text-sm ">
          <p className="leading-4 md:px-10  lg:leading-5 lg:tracking-wide md:uppercase">
            Selamat Menunaikan Ibadah Puasa Ramadhan 1446 H
          </p>
        </div>

        <div className="hidden md:flex">
          <LinkButton
            href="/contact"
            theme="border"
            size={header ? "sm" : "md"}
          >
            <FaPhone size={16} /> Hubungi Kami
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
