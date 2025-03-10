import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { NavLink } from "react-router";
export const FooterBottom = () => {
  return (
    <div className="bg-primaryColor flex flex-row justify-between items-center gap-5 px-5 md:px-20 py-5  ">
      <p className="text-backgroundColor/70 font-light text-xs">
        Copyright &#169; {new Date().getFullYear()} Tarikolot Maleber Digital,
        All Right Reserved
      </p>
      <div className="flex flex-row gap-3 text-backgroundColor/70">
        <NavLink
          to="https://www.facebook.com/"
          className="w-9 h-9 border border-backgroundColor flex justify-center items-center transition-all duration-300 ease-in-out p-1 rounded-full hover:text-hoverColor hover:rotate-12 hover:border-hoverColor "
        >
          <FaFacebook size={20} />
        </NavLink>
        <NavLink
          to="https://www.instagram.com/"
          className="w-9 h-9 border border-backgroundColor flex justify-center items-center transition-all duration-300 ease-in-out p-1 rounded-full hover:text-hoverColor hover:rotate-12 hover:border-hoverColor"
        >
          <FaInstagram size={20} />
        </NavLink>
        <NavLink
          to="https://www.tiktok.com/"
          className="w-9 h-9 border border-backgroundColor flex justify-center items-center transition-all duration-300 ease-in-out p-1 rounded-full hover:text-hoverColor hover:rotate-12 hover:border-hoverColor"
        >
          <FaTiktok size={20} />
        </NavLink>
        <NavLink
          to="https://www.youtube.com/"
          className="w-9 h-9 border border-backgroundColor flex justify-center items-center transition-all duration-300 ease-in-out p-1 rounded-full hover:text-hoverColor hover:rotate-12 hover:border-hoverColor"
        >
          <FaYoutube size={20} />
        </NavLink>
      </div>
    </div>
  );
};
