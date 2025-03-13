import { NavLink, useParams } from "react-router";
import { listPerangkatDusun } from "../data/list-perangkat-dusun";
import { CardProfilPengurusDetail } from "../components/ui/card";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export function PerangkatProfilPage() {
  const { slug } = useParams();

  const profilPerangkat = listPerangkatDusun.find((p) => p.slug === slug);

  return (
    <div className="py-10 max-w-6xl mx-auto">
      <h2 className="mb-10">Profil Perangkat Dusun </h2>
      <div className="space-y-10">
        {profilPerangkat && <CardProfilPengurusDetail {...profilPerangkat} />}
        <NavLink
          to="/perangkatdusun"
          className="text-xs text-primaryColor/90 font-light  flex flex-row gap-2 "
        >
          <MdKeyboardDoubleArrowLeft size={16} /> Kembali ke halaman Profil
        </NavLink>
      </div>
    </div>
  );
}
