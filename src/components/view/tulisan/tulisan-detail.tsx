import { NavLink, useParams } from "react-router";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { listTulisan } from "../../../data/tulisan";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa6";

export const TulisanDetail = () => {
  const { slug } = useParams();
  const findSlugInTulisan = listTulisan.find((x) => x.slug === slug);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-20 md:px-0">
      {findSlugInTulisan && (
        <div className="flex flex-col gap-10">
          <div className="w-full">
            <img
              src={findSlugInTulisan.cover}
              alt="cover"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="flex-1 space-y-10">
              <div className="space-y-2">
                <h1 className="text-xl font-semibold text-foregroundSecondary/80 md:text-2xl">
                  {findSlugInTulisan.title}
                </h1>
                <div className="flex flex-row gap-5">
                  <p className="w-fit rounded-md border border-secondaryColor bg-hoverColor/70 px-2 py-1 text-center text-sm font-light">
                    {findSlugInTulisan.date}
                  </p>
                  <p className="w-fit rounded-md border border-secondaryColor bg-backgroundSecondary px-2 py-1 text-center text-sm font-light">
                    {findSlugInTulisan.author}
                  </p>
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
              <p className="w-fit rounded-md bg-primaryColor px-2 py-1 text-center text-xs font-light text-backgroundColor">
                {findSlugInTulisan.category}
              </p>
              <div>
                <h2>Share </h2>
                <div className="mb-4 w-full border-b border-borderPrimary"></div>
                <div className="flex flex-row gap-3 text-primaryColor/90">
                  <NavLink
                    to="https://www.facebook.com/"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-backgroundColor p-1 transition-all duration-300 ease-in-out"
                  >
                    <FaFacebook size={20} />
                  </NavLink>
                  <NavLink
                    to="https://www.instagram.com/"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-backgroundColor p-1 transition-all duration-300 ease-in-out"
                  >
                    <FaInstagram size={20} />
                  </NavLink>
                  <NavLink
                    to="https://www.tiktok.com/"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-backgroundColor p-1 transition-all duration-300 ease-in-out"
                  >
                    <FaTiktok size={20} />
                  </NavLink>
                  <NavLink
                    to="https://www.twitter.com/"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-backgroundColor p-1 transition-all duration-300 ease-in-out"
                  >
                    <FaTwitter size={20} />
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
