import { Counter } from "./counter";
import imgFamily from "/statistik/family.png";
import imgMan from "/statistik/man.png";
import imgWoman from "/statistik/woman.png";
import imgWarga from "/statistik/warga.png";
import { NavLink } from "react-router";
import { LinkButton } from "./link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { cn } from "../../lib/utils";

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

interface PropsArticle {
  date: string;
  title: string;
  type: "berita" | "tulisan";
  slug: string;
  cover: string;
  content_p1: string;
  content_p2: string;
  content_p3: string;
  author: string;
  category: string;
  index: number;
}

export const CardStatistikPenduduk = (props: PropsType) => {
  const { image, jenis, jumlah } = props;

  return (
    <div className="flex flex-col items-center justify-between gap-2 rounded-xl bg-gradient-to-t from-secondaryColor to-secondaryColor/20 p-10 text-center shadow-lg shadow-secondaryColor/40 duration-300 hover:border hover:border-highlightColor/60 md:flex-row">
      {image === "warga" && <img src={imgWarga} alt="warga" />}
      {image === "man" && <img src={imgMan} alt="lakilaki" />}
      {image === "woman" && <img src={imgWoman} alt="perempuan" />}
      {image === "family" && <img src={imgFamily} alt="keluarga" />}
      <div className="flex flex-col justify-start text-primaryColor/90 md:gap-2 md:text-left">
        <Counter number={jumlah} />
        <p className="text-base font-medium tracking-tight md:text-lg">
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
      className="group h-56 w-44 overflow-hidden border border-borderPrimary p-2 duration-300 hover:shadow-md"
    >
      <div className="relative mb-1 h-40 overflow-hidden bg-slate-200">
        <img
          src={photo}
          alt="image kadus"
          style={{ objectFit: "fill" }}
          className="duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col items-center justify-center -space-y-0.5 p-1 text-sm font-light">
        <h3 className="tracking-tighter">{nama}</h3>
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
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      <div className="flex max-w-xs items-center justify-center">
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

export const CardArticle = ({
  author,
  content_p1,
  category,
  cover,
  date,
  slug,
  title,
  index,
  type,
}: PropsArticle) => {
  return (
    <div className="group grid grid-cols-1 gap-8 rounded-md border-b border-borderPrimary/80 p-6 md:grid-cols-3">
      <div
        className={cn(
          "h-52 w-full overflow-hidden",
          index % 2 === 0 ? "order-1" : "order-2",
        )}
      >
        <img
          src={cover}
          alt="image cover"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          className="duration-300 group-hover:scale-105"
        />
      </div>
      <div
        className={cn(
          "col-span-2 space-y-4",
          index % 2 === 0 ? "order-2" : "order-1",
        )}
      >
        <div className="space-y-1">
          <p className="text-sm font-normal tracking-tight text-primaryColor/90">
            {date}
          </p>
          <div className="flex flex-row gap-2 text-primaryColor/80">
            <p className="w-fit rounded-md border border-secondaryColor bg-backgroundSecondary px-2 py-1 text-center text-xs font-light">
              {author}
            </p>
            <p className="w-fit rounded-md border border-secondaryColor px-2 py-1 text-center text-xs font-light">
              {category}
            </p>
          </div>
        </div>
        <h1 className="line-clamp-2 text-base font-semibold tracking-tight text-primaryColor/90 md:text-lg">
          {title}
        </h1>
        <p className="line-clamp-3 text-sm font-light leading-4 text-foregroundPrimary/80">
          {content_p1}
        </p>
        <div className="w-full space-y-2">
          <LinkButton
            href={type === "tulisan" ? `/tulisan/${slug}` : `/berita/${slug}`}
            theme="border"
            size="sm"
          >
            Selengkapnya
            <MdKeyboardDoubleArrowRight size={18} className="translate-ico" />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export const CardArticleHome = ({
  cover,
  author,
  title,
  content_p1,
  slug,
  category,
}: PropsArticle) => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Ags",
    "Sep",
    "Oct",
    "Nov",
    "Des",
  ];
  const date = new Date();

  return (
    <NavLink
      to={`/berita/${slug}`}
      className="group relative h-80 min-w-[260px] overflow-hidden rounded-md shadow-md shadow-backgroundSecondary/80 hover:border hover:border-borderPrimary"
    >
      <div className="absolute right-4 top-4 flex h-12 w-12 flex-col items-center justify-center rounded-full bg-red-400 p-3 text-center text-hoverColor">
        <div className="-space-y-1">
          <p className="text-sm font-semibold">
            {String(new Date().getDay()).padStart(2, "0")}
          </p>
          <p className="text-xs font-medium">{month[date.getMonth()]}</p>
        </div>
      </div>

      <div className="h-[150px] w-full min-w-[260px]">
        <img
          src={cover}
          alt="image cover"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="space-y-3 px-4 py-2">
        <p className="line-clamp-2 text-base font-semibold tracking-tight text-primaryColor/90 md:text-lg">
          {title}
        </p>
        <p className="line-clamp-2 text-sm font-light tracking-wide text-foregroundPrimary/80">
          {content_p1}
        </p>
      </div>
      <div className="flex flex-row gap-2 px-4">
        <p className="w-fit rounded-md border border-secondaryColor bg-backgroundSecondary px-2 py-1 text-center text-xs font-light">
          {author}
        </p>
        <p className="w-fit rounded-md border border-secondaryColor px-2 py-1 text-center text-xs font-light">
          {category}
        </p>
      </div>
    </NavLink>
  );
};
