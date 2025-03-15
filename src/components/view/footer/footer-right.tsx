import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router";
export const FooterRight = () => {
  return (
    <div className="flex basis-1/2 flex-col justify-between gap-14 md:flex-row">
      <div className="flex basis-2/5 flex-col gap-6 text-lg font-medium">
        <h3 className="font-Inter text-xl font-bold tracking-wide text-backgroundSecondary/80">
          Menu Profil
        </h3>
        <div className="flex flex-col gap-2 text-sm font-normal text-backgroundColor/60">
          <NavLink to="/profil" className="flex flex-row gap-1 hover:underline">
            <MdKeyboardArrowRight size={20} />
            Profil Singkat
          </NavLink>
          <NavLink
            to="/sejarah"
            className="flex flex-row gap-1 hover:underline"
          >
            <MdKeyboardArrowRight size={20} />
            Sejarah
          </NavLink>
          <NavLink
            to="/visimisi"
            className="flex flex-row gap-1 hover:underline"
          >
            <MdKeyboardArrowRight size={20} />
            Visi misi
          </NavLink>
          <NavLink
            to="/silsilah"
            className="flex flex-row gap-1 hover:underline"
          >
            <MdKeyboardArrowRight size={20} />
            Silsilah Leumbur
          </NavLink>
          <NavLink
            to="/perangkatdusun"
            className="flex flex-row gap-1 hover:underline"
          >
            <MdKeyboardArrowRight size={20} />
            Perangkat dusun
          </NavLink>
        </div>
      </div>
      <div className="w-full space-y-4">
        <h3 className="font-Inter text-xl font-bold tracking-wide text-backgroundSecondary/80">
          Tautan Menu
        </h3>
        <div className="flex flex-col gap-2 text-sm font-normal text-backgroundColor/60">
          <NavLink to="/profil" className="flex flex-row gap-1 hover:underline">
            <MdKeyboardArrowRight size={20} />
            Profil Singkat
          </NavLink>
          <NavLink to="/berita" className="flex flex-row gap-1 hover:underline">
            <MdKeyboardArrowRight size={20} />
            Berita
          </NavLink>
          <NavLink
            to="/tulisan"
            className="flex flex-row gap-1 hover:underline"
          >
            <MdKeyboardArrowRight size={20} />
            Tulisan
          </NavLink>
          <NavLink
            to="/keuangan"
            className="flex flex-row gap-1 hover:underline"
          >
            <MdKeyboardArrowRight size={20} />
            Laporan keuangan
          </NavLink>
          <NavLink
            to="/pelayanan"
            className="flex flex-row gap-1 hover:underline"
          >
            <MdKeyboardArrowRight size={20} />
            Layanan Masyarakat
          </NavLink>
          <NavLink to="/umkm" className="flex flex-row gap-1 hover:underline">
            <MdKeyboardArrowRight size={20} />
            U.M.K.M
          </NavLink>
          <NavLink to="/hptm" className="flex flex-row gap-1 hover:underline">
            <MdKeyboardArrowRight size={20} />
            H.P.T.M
          </NavLink>
          <NavLink
            to="/tentangkami"
            className="flex flex-row gap-1 hover:underline"
          >
            <MdKeyboardArrowRight size={20} />
            Tentang Kami
          </NavLink>
        </div>
      </div>
    </div>
  );
};
