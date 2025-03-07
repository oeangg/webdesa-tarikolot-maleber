import { Counter } from "./counter";
import imgFamily from "../../assets/images/family.png";
import imgMan from "../../assets/images/man.png";
import imgWoman from "../../assets/images/woman.png";
import imgWarga from "../../assets/images/warga.png";
import { NavLink } from "react-router";

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
};

export const CardStatistikPenduduk = (props: PropsType) => {
  const { image, jenis, jumlah } = props;

  return (
    <div className="flex flex-row  bg-hoverColor p-10 shadow-md   items-center justify-between gap-2 px-8 text-center duration-300 rounded-xl hover:shadow-primaryColor hover:border-2 hover:border-highlightColor">
      {image === "warga" && <img src={imgWarga} alt="warga" />}
      {image === "man" && <img src={imgMan} alt="lakilaki" />}
      {image === "woman" && <img src={imgWoman} alt="perempuan" />}
      {image === "family" && <img src={imgFamily} alt="keluarga" />}
      <div className="flex flex-col justify-start  text-left  gap-2">
        <Counter number={jumlah} />
        <p className="text-base md:text-lg">{jenis}</p>
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
      to={slug}
      className="group w-40 h-52 shadow-md duration-300 overflow-hidden rounded-xl hover:shadow-highlightColor"
    >
      <div className="h-36  relative overflow-hidden   bg-slate-200 mb-2  ">
        <img
          src={photo}
          alt="image kadus"
          style={{ objectFit: "fill" }}
          className="duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col p-1 -space-y-0.5 justify-center items-center text-sm font-light">
        <h3>{nama}</h3>
        <p className="font-medium">{jabatan}</p>
      </div>
    </NavLink>
  );
};
