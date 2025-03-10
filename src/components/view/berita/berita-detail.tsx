import { NavLink, useParams } from "react-router";
import { listBerita } from "../../../data/berita";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const BeritaDetail = () => {
  const { slug } = useParams();
  const findSlugInBerita = listBerita.find((x) => x.slug === slug);

  return (
    <div className="max-w-6xl px-4 md:px-0 mx-auto w-full py-20">
      {findSlugInBerita && (
        <div className="flex flex-col gap-10">
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-semibold text-foregroundSecondary/80">
              {findSlugInBerita.title}
            </h1>
            <div className="flex flex-row gap-2">
              <p className="px-2 py-1 text-center w-fit font-light text-xs bg-backgroundSecondary border border-secondaryColor rounded-md ">
                {findSlugInBerita.date}
              </p>
              <p className="px-2 py-1 text-center w-fit font-light text-xs bg-hoverColor/70 border border-secondaryColor rounded-md ">
                {findSlugInBerita.author}
              </p>
              <p className="px-2 py-1 text-center w-fit font-light text-xs border border-secondaryColor rounded-md ">
                {findSlugInBerita.category}
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4 border border-borderPrimary ">
            <img
              src={findSlugInBerita.cover}
              alt="cover"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="space-y-4 text-foregroundPrimary ">
            <p>{findSlugInBerita.content_p1}</p>
            <p>{findSlugInBerita.content_p2}</p>
            <p>{findSlugInBerita.content_p3}</p>
          </div>
          <NavLink
            to="/berita"
            className="text-xs font-extralight underline flex flex-row justify-end "
          >
            Back to berita <MdKeyboardDoubleArrowRight size={16} />
          </NavLink>
        </div>
      )}
    </div>
  );
};
