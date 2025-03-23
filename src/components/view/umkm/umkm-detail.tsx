import { NavLink, useParams } from "react-router";
import { listUMKM } from "../../../data/umkm";
import { IoTimeOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebook, FaTiktok, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

export const UmkmDetail = () => {
  const { slug } = useParams();

  const findUmkm = listUMKM.find((item) => item.slug === slug);
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-28 md:px-0">
      {findUmkm && (
        <div className="space-y-8">
          {/* header */}
          <div className="flex flex-row items-center gap-5">
            <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-borderPrimary">
              <img
                src={findUmkm.logo}
                alt={findUmkm.nama}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="space-y-1">
              <h1 className="text-xl font-bold uppercase tracking-wide text-red-500/80 md:text-2xl lg:text-3xl">
                {findUmkm.nama}
              </h1>
              <h3 className="w-fit rounded-full bg-red-500/80 px-4 py-1 text-base font-semibold text-backgroundColor">
                {findUmkm.deskripsi}
              </h3>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 rounded-lg border border-borderPrimary bg-backgroundSecondary p-4 text-sm font-semibold tracking-tight text-primaryColor/70 md:flex-row md:gap-10 md:p-5">
            <div className="flex flex-row items-center justify-start gap-1">
              <FaRegUser size={16} className="text-red-400" />
              <p className="border-r border-borderPrimary">
                {findUmkm.pemilik}
              </p>
            </div>
            <div className="flex flex-row items-center justify-start gap-1">
              <FiPhone size={16} className="text-red-400" />
              <p className="border-borderPrimary">
                {findUmkm.noTelp.join(" / ")}
              </p>
            </div>
            <div className="flex flex-row items-center justify-start gap-1">
              <IoTimeOutline size={18} className="text-red-400" />
              <p className="border-borderPrimary">{findUmkm.jambuka}</p>
            </div>
            <div className="flex flex-row items-center justify-start gap-1">
              <SlLocationPin size={16} className="text-red-400" />
              <p className="border-borderPrimary text-sm">{findUmkm.alamat}</p>
            </div>
          </div>
          {/* deskripsi */}
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="flex-1 space-y-4">
              {findUmkm.profil.map((x) => (
                <p>{x}</p>
              ))}
              <div className="w-full overflow-hidden rounded-xl">
                <img
                  src={findUmkm.banner}
                  alt={findUmkm.nama}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
              <NavLink
                to="/umkm"
                className="flex flex-row gap-2 text-xs font-light text-primaryColor/90"
              >
                <MdKeyboardDoubleArrowLeft size={16} /> Kembali ke halaman UMKM
              </NavLink>
            </div>
            <div className="basis-1/5">
              <h2>Bagikan </h2>
              <div className="mb-4 w-full border-b border-borderPrimary"></div>
              <div className="flex flex-row gap-2 text-primaryColor/80">
                <NavLink
                  to="https://www.facebook.com/"
                  className="flex items-center justify-center rounded-full border border-primaryColor p-2 transition-all duration-300 ease-in-out"
                >
                  <FaFacebook size={20} />
                </NavLink>
                <NavLink
                  to="https://www.whatshapp.com/"
                  className="flex items-center justify-center rounded-full border border-primaryColor p-2 transition-all duration-300 ease-in-out"
                >
                  <FaWhatsapp size={20} />
                </NavLink>
                <NavLink
                  to="https://www.tiktok.com/"
                  className="flex items-center justify-center rounded-full border border-primaryColor p-2 transition-all duration-300 ease-in-out"
                >
                  <FaTiktok size={20} />
                </NavLink>
                <NavLink
                  to="https://www.twitter.com/"
                  className="flex items-center justify-center rounded-full border border-primaryColor p-2 transition-all duration-300 ease-in-out"
                >
                  <FaXTwitter size={20} />
                </NavLink>
              </div>
            </div>
          </div>
          {/* menu */}
        </div>
      )}
    </div>
  );
};
