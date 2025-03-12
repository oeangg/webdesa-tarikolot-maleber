import { Counter } from "./counter";
import imgFamily from "/statistik/family.png";
import imgMan from "/statistik/man.png";
import imgWoman from "/statistik/woman.png";
import imgWarga from "/statistik/warga.png";
import { NavLink } from "react-router";
import { LinkButton } from "./link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

type PropsType = {
  jumlah: number;
  jenis: string;
  image: string;
};

type PropsTypePengurus = {
  photo: string;
  nama: string;
  slug: string;
  jabatan: string;
  katakata?: string;
};

type PropsTypeTulisan = {
  date: string;
  title: string;
  slug: string;
  cover: string;
  content_p1: string;
  content_p2: string;
  content_p3: string;
  author: string;
  category: string;
};

export const CardStatistikPenduduk = (props: PropsType) => {
  const { image, jenis, jumlah } = props;

  return (
    <div
      className="flex flex-row border-[3px] border-secondaryColor/80  bg-hoverColor p-10 shadow-lg shadow-secondaryColor/40 items-center justify-between gap-2 px-8 text-center duration-300 rounded-xl  hover:border-highlightColor/60 hover:shadow-xl  hover:shadow-hoverColor/30
    "
    >
      {image === "warga" && <img src={imgWarga} alt="warga" />}
      {image === "man" && <img src={imgMan} alt="lakilaki" />}
      {image === "woman" && <img src={imgWoman} alt="perempuan" />}
      {image === "family" && <img src={imgFamily} alt="keluarga" />}
      <div className="flex flex-col justify-start text-primaryColor/90  text-left  gap-2">
        <Counter number={jumlah} />
        <p className="text-base md:text-lg font-medium tracking-tight">
          {jenis}
        </p>
      </div>
    </div>
  );
};

export const CardProfilPengurus = ({
  jabatan,
  nama,
  photo,
  slug,
}: PropsTypePengurus) => {
  return (
    <NavLink
      to={`/profil/perangkatdusun/${slug}`}
      className="group w-40 h-52 border p-2 border-borderPrimary duration-300 overflow-hidden  hover:shadow-md"
    >
      <div className="h-36  relative overflow-hidden   bg-slate-200 mb-2   ">
        <img
          src={photo}
          alt="image kadus"
          style={{ objectFit: "fill" }}
          className="duration-300 group-hover:scale-110 "
        />
      </div>
      <div className="flex flex-col p-1 -space-y-0.5 justify-center  items-center text-sm font-light">
        <h3 className=" tracking-tighter">{nama}</h3>
        <p className="font-medium tracking-tight">{jabatan}</p>
      </div>
    </NavLink>
  );
};

export const CardProfilPengurusDetail = ({
  jabatan,
  nama,
  photo,
  katakata,
}: PropsTypePengurus) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="flex justify-center items-center ">
        <img
          src={photo}
          alt={`photo ${jabatan}`}
          style={{ objectFit: "cover" }}
          className="border border-borderPrimary p-2"
        />
      </div>
      <div className="col-span-2 space-y-3">
        <div>
          <h2>{nama}</h2>
          <p>{jabatan}</p>
        </div>
        <p>{katakata}</p>
      </div>
    </div>
  );
};

export const CardTulisan = ({
  author,
  content_p1,
  category,
  cover,
  date,
  slug,
  title,
}: PropsTypeTulisan) => {
  return (
    <div className="group grid-cols-1  grid  rounded-md md:grid-cols-2 p-6 gap-5 hover:border hover:border-highlightColor/50 hover:shadow-lg hover:shadow-hoverColor/40">
      <div className="space-y-5">
        <div className="space-y-1">
          <p className="text-foregroundSecondary tracking-tight text-base font-normal">
            {date}
          </p>
          <div className="flex flex-row gap-2">
            <p className="px-2 py-1 text-center w-fit font-light border border-secondaryColor text-xs bg-backgroundSecondary rounded-md ">
              {author}
            </p>
            <p className="px-2 py-1 text-center w-fit font-light text-xs border border-secondaryColor bg-hoverColor rounded-md ">
              {category}
            </p>
          </div>
        </div>
        <h1 className="text-base md:text-lg lg:text-xl text-primaryColor/90 font-medium line-clamp-2 tracking-wide ">
          {title}
        </h1>
        <p className="line-clamp-3 leading-4 text-base font-light">
          {content_p1}
        </p>
        <div className="space-y-2 w-full">
          <LinkButton href={`/tulisan/${slug}`} theme="border" size="sm">
            Selengkapnya
            <MdKeyboardDoubleArrowRight size={18} className="translate-ico" />
          </LinkButton>
        </div>
      </div>
      <div className="w-full h-64 overflow-hidden ">
        <img
          src={cover}
          alt="image cover"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          className="duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export const CardBerita = ({
  author,
  content_p1,
  category,
  cover,
  date,
  slug,
  title,
}: PropsTypeTulisan) => {
  return (
    <div className="group grid-cols-1 grid  rounded-md md:grid-cols-2 p-6 gap-5 hover:border hover:border-highlightColor/50 hover:shadow-lg hover:shadow-hoverColor/40 ">
      <div className="w-full h-64 overflow-hidden ">
        <img
          src={cover}
          alt="image cover"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          className="duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-5">
        <div className="space-y-1">
          <p className="text-foregroundSecondary tracking-tight text-base font-normal">
            {date}
          </p>
          <div className="flex flex-row gap-2">
            <p className="px-2 py-1 text-center w-fit font-light text-xs bg-backgroundSecondary border border-secondaryColor rounded-md ">
              {author}
            </p>
            <p className="px-2 py-1 text-center w-fit font-light text-xs border border-secondaryColor rounded-md ">
              {category}
            </p>
          </div>
        </div>
        <h1 className="text-base md:text-lg lg:text-xl font-medium text-primaryColor/90  line-clamp-2 tracking-wide ">
          {title}
        </h1>
        <p className="line-clamp-3 leading-4 text-base font-light">
          {content_p1}
        </p>
        <div className="space-y-2 w-full">
          <LinkButton href={`/berita/${slug}`} theme="border" size="sm">
            Selengkapnya
            <MdKeyboardDoubleArrowRight size={18} className="translate-ico" />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
