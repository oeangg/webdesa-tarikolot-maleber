import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { TbMessage2Plus } from "react-icons/tb";
import { NavLink } from "react-router";
import { cn } from "../../../lib/utils";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const CtaSide_index = () => {
  const [openCto, setOpenCto] = useState(true);
  const [openToolTips, setOpenToolTips] = useState(false);

  const handleOpenCto = () => {
    setOpenCto(false);
    setOpenToolTips(false);
  };

  return (
    <div className="fixed bottom-24 right-0 z-[100]">
      <BiMessageSquareDetail
        size={38}
        onClick={handleOpenCto}
        onMouseEnter={() => setOpenToolTips(true)}
        onMouseLeave={() => setOpenToolTips(false)}
        className={cn(
          "absolute right-2 top-1/2 z-[99] -translate-y-1/2 transform cursor-pointer rounded-full bg-highlightColor p-2 text-hoverColor transition-opacity duration-300",
          openCto === false && "hidden opacity-0",
        )}
      />
      {/* tooltips */}
      {openToolTips && (
        <div className="absolute -top-12 right-14 transform rounded-md bg-hoverColor p-3 text-sm font-medium text-highlightColor shadow-md">
          Kirim Aspirasi
        </div>
      )}

      <div
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 transform flex-col gap-2 rounded-l-3xl border-y-[3px] border-l-[3px] border-highlightColor/80 bg-hoverColor py-3 pl-3 pr-2 text-highlightColor/70 shadow-md transition-transform duration-300",
          openCto === false ? "flex translate-x-0" : "hidden translate-x-full",
        )}
      >
        <MdKeyboardDoubleArrowRight
          size={22}
          onClick={() => setOpenCto(true)}
          className={cn(
            "absolute bottom-0 right-10 z-[99] transform cursor-pointer rounded-full bg-highlightColor p-1 text-backgroundColor",
            openCto === true && "hidden",
          )}
        />
        <NavLink to="/aspirasi" className="hover:text-highlightColor">
          <TbMessage2Plus size={28} />
        </NavLink>
        <NavLink
          to="https://www.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-highlightColor"
        >
          <FaWhatsapp size={28} />
        </NavLink>
      </div>
    </div>
  );
};
