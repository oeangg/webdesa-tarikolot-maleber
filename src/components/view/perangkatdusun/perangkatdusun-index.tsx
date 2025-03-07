import { listPerangkatDusun } from "../../../data/list-perangkat-dusun";
import { CardProfilPengurus } from "../../ui/card";
export const PerangkatIndex = () => {
  return (
    <div className="py-10 flex flex-col gap-10">
      <h2>Profil Perangkat Dusun </h2>
      <p>
        Berikut Profil pengurus Dusun VI Tarikolot Desa Maleber, periode Tahun
        2025
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {listPerangkatDusun.map((item) => (
          <CardProfilPengurus key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
