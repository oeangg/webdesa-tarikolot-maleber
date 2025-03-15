import { FaWhatsapp } from "react-icons/fa6";
import { TbMessage2Plus } from "react-icons/tb";
import { NavLink } from "react-router";

export const CtaSide_index = () => {
  return (
    <div className="fixed bottom-20 right-0 z-[100] flex flex-col gap-3 rounded-l-2xl border-y-4 border-l-4 border-highlightColor bg-hoverColor p-4 text-highlightColor shadow-md">
      <NavLink to="/aspirasi">
        <TbMessage2Plus size={28} />
      </NavLink>
      <NavLink to="https://www.whatsapp.com/">
        <FaWhatsapp size={28} />
      </NavLink>
    </div>
  );
};
