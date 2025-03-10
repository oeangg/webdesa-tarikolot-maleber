import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router";
export const FooterRight = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-14 basis-1/2 ">
      <div className="flex flex-col gap-6 text-lg font-medium basis-2/5">
        <h3 className="text-primaryColor/90 font-semibold text-xl">Tautan :</h3>
        <div className="flex flex-col gap-3 text-sm text-primaryColor/70 font-normal">
          <NavLink to="/profil" className="flex flex-row gap-1 hover:underline">
            <MdKeyboardArrowRight size={20} />
            Profil
          </NavLink>
          <NavLink to="/umkm" className="flex flex-row gap-1 hover:underline">
            <MdKeyboardArrowRight size={20} />
            Kegiatan UMKM
          </NavLink>
          <NavLink to="/hptm" className="flex flex-row gap-1 hover:underline">
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
      <div className="w-full space-y-4">
        <h3 className="text-primaryColor/90 font-semibold text-xl">
          Peta Wilayah :
        </h3>
        <div className="w-full rounded-xl overflow-hidden border-2 border-backgroundColor opacity-70">
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
  );
};
