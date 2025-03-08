import { NavLink, useParams } from "react-router";
import { listPerangkatDusun } from "../data/list-perangkat-dusun";
import { CardProfilPengurusDetail } from "../components/ui/card";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function PerangkatProfilPage() {
  const { slug } = useParams();

  const profilPerangkat = listPerangkatDusun.find((p) => p.slug === slug);

  return (
    <div className="py-10 max-w-5xl mx-auto">
      <h2 className="mb-10">Profil Perangkat Dusun </h2>
      {profilPerangkat && <CardProfilPengurusDetail {...profilPerangkat} />}
      <NavLink
        to="/perangkatdusun"
        className="text-xs font-extralight underline flex flex-row "
      >
        <MdKeyboardDoubleArrowRight size={16} /> Back to Profil
      </NavLink>
    </div>
  );
}
