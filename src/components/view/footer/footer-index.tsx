import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiHomeSmileFill } from "react-icons/ri";
import { NavLink } from "react-router";

export const FooterPage = () => {
  return (
    <div className="flex flex-col bg-secondaryColor ">
      <div className="px-5 md:px-20 py-20 flex flex-col md:flex-row gap-5 justify-between ">
        <div className="basis-1/2 space-y-5 border-b border-backgroundColor md:border-b-0 md:border-r">
          <RiHomeSmileFill size={72} className="text-highlightColor" />
          <div className="space-y-2">
            <p className="text-base md:text-xl tracking-normal font-extrabold ">
              Ti Lembur Balik Deui ka Lembur
            </p>
            <div className="-space-y-1 pb-5">
              <p className="text-base font-light">
                Websitena urang tarikolot Maleber
              </p>
              <p className="text-base font-light">
                Desa Maleber, Kecamatan Maleber
              </p>
              <p className="text-base font-light">Kuningan, Jawa barat</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-14 basis-1/2 ">
          <div className="flex flex-col gap-6 text-lg font-medium basis-2/5">
            <h2>Tautan :</h2>
            <div className="flex flex-col gap-2 text-sm font-normal">
              <NavLink
                to="/profil"
                className="flex flex-row gap-1 hover:underline"
              >
                <MdKeyboardArrowRight size={20} />
                Profil
              </NavLink>
              <NavLink
                to="/umkm"
                className="flex flex-row gap-1 hover:underline"
              >
                <MdKeyboardArrowRight size={20} />
                Kegiatan UMKM
              </NavLink>
              <NavLink
                to="/hptm"
                className="flex flex-row gap-1 hover:underline"
              >
                <MdKeyboardArrowRight size={20} />
                Kegiatan Kepemudaan
              </NavLink>
              <NavLink
                to="/contact"
                className="flex flex-row gap-1 hover:underline"
              >
                <MdKeyboardArrowRight size={20} />
                Kontak kami
              </NavLink>
            </div>
          </div>
          <div className="w-full rounded-xl overflow-hidden border-2 border-backgroundColor">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.813998305558!2d108.55660807454245!3d-7.031136368884366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f134f79dcdd1d%3A0x6c915cb193217baf!2sTarikolot%20Maleber!5e0!3m2!1sid!2sid!4v1741334399003!5m2!1sid!2sid"
              height="220"
              width="100%"
              style={{ border: 1 }}
              // sandbox="allow-scripts allow-modal"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bg-primaryColor flex flex-row justify-between items-center gap-5 px-5 md:px-20 py-5  ">
        <p className="text-backgroundColor font-light text-xs">
          Copyright &#169; {new Date().getFullYear()} Tarikolot Maleber Dev, All
          Right Reserved
        </p>
        <div className="flex flex-row gap-3 text-backgroundColor">
          <NavLink
            to="https://www.facebook.com/"
            className="w-9 h-9 border border-backgroundColor flex justify-center items-center transition-all duration-300 ease-in-out p-1 rounded-full hover:text-secondaryColor hover:rotate-12 hover:border-secondaryColor"
          >
            <FaFacebook size={20} />
          </NavLink>
          <NavLink
            to="https://www.instagram.com/"
            className="w-9 h-9 border border-backgroundColor flex justify-center items-center transition-all duration-300 ease-in-out p-1 rounded-full hover:text-secondaryColor hover:rotate-12 hover:border-secondaryColor"
          >
            <FaInstagram size={20} />
          </NavLink>
          <NavLink
            to="https://www.tiktok.com/"
            className="w-9 h-9 border border-backgroundColor flex justify-center items-center transition-all duration-300 ease-in-out p-1 rounded-full hover:text-secondaryColor hover:rotate-12 hover:border-secondaryColor"
          >
            <FaTiktok size={20} />
          </NavLink>
          <NavLink
            to="https://www.youtube.com/"
            className="w-9 h-9 border border-backgroundColor flex justify-center items-center transition-all duration-300 ease-in-out p-1 rounded-full hover:text-secondaryColor hover:rotate-12 hover:border-secondaryColor"
          >
            <FaYoutube size={20} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
