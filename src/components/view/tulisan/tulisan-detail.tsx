import { NavLink, useParams } from "react-router";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { listTulisan } from "../../../data/tulisan";

export const TulisanDetail = () => {
  const { slug } = useParams();
  const findSlugInTulisan = listTulisan.find((x) => x.slug === slug);

  return (
    <div className="max-w-6xl px-4 md:px-0 mx-auto w-full py-20">
      {findSlugInTulisan && (
        <div className="flex flex-col gap-10">
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-semibold text-foregroundSecondary/80">
              {findSlugInTulisan.title}
            </h1>
            <div className="flex flex-row gap-2">
              <p className="px-2 py-1 text-center w-fit font-light text-xs bg-backgroundSecondary border border-secondaryColor rounded-md ">
                {findSlugInTulisan.date}
              </p>
              <p className="px-2 py-1 text-center w-fit font-light text-xs bg-hoverColor/70 border border-secondaryColor rounded-md ">
                {findSlugInTulisan.author}
              </p>
              <p className="px-2 py-1 text-center w-fit font-light text-xs border border-secondaryColor rounded-md ">
                {findSlugInTulisan.category}
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4 border border-borderPrimary ">
            <img
              src={findSlugInTulisan.cover}
              alt="cover"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="space-y-4 text-foregroundPrimary ">
            <p>{findSlugInTulisan.content_p1}</p>
            <p>{findSlugInTulisan.content_p2}</p>
            <p>{findSlugInTulisan.content_p3}</p>
          </div>
          <NavLink
            to="/tulisan"
            className="text-xs text-primaryColor/90 font-light  flex flex-row gap-2 "
          >
            <MdKeyboardDoubleArrowLeft size={16} /> Kembali ke halaman Tulisan
          </NavLink>
        </div>
      )}
    </div>
  );
};
