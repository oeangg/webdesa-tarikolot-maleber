import { NavLink, useParams } from "react-router";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { listTulisan } from "../../../data/tulisan";
import {
  FaFacebook,
  FaRegUser,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";

export const TulisanDetail = () => {
  const { slug } = useParams();
  const findSlugInTulisan = listTulisan.find((x) => x.slug === slug);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-20 md:px-0">
      {findSlugInTulisan && (
        <div className="flex flex-col gap-10">
          <div className="relative h-[260px] w-full">
            <img
              src={findSlugInTulisan.cover}
              alt="cover"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="absolute top-0 h-[260px] w-full bg-gradient-to-b from-transparent to-backgroundColor"></div>
          </div>
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="flex-1 space-y-10">
              <div className="space-y-2 border-b-2 border-highlightColor/80">
                <h1 className="text-xl font-bold text-primaryColor/80 md:text-2xl">
                  {findSlugInTulisan.title}
                </h1>

                <div className="flex flex-row gap-5 text-base font-light text-highlightColor/70">
                  <div className="flex flex-row items-center justify-center gap-1">
                    <IoTimeOutline size={16} />
                    <p className="w-fit">{findSlugInTulisan.date}</p>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-1">
                    <FaRegUser size={14} />
                    <p className="w-fit">{findSlugInTulisan.author}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-foregroundPrimary">
                <p>{findSlugInTulisan.content_p1}</p>
                <p>{findSlugInTulisan.content_p2}</p>
                <p>{findSlugInTulisan.content_p3}</p>
              </div>
              <NavLink
                to="/berita"
                className="flex flex-row gap-2 text-xs font-light text-primaryColor/90"
              >
                <MdKeyboardDoubleArrowLeft size={16} /> Kembali ke halaman
                Berita
              </NavLink>
            </div>
            <div className="basis-1/5 space-y-5">
              <h2>Tag </h2>
              <p className="w-fit rounded-md bg-highlightColor px-3 py-1 text-center text-xs font-light tracking-wide text-backgroundColor">
                {findSlugInTulisan.category}
              </p>
              <div>
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
          </div>
        </div>
      )}
    </div>
  );
};
