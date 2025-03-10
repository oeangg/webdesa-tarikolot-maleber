import { listBerita } from "../../../data/berita";
import { CardBerita } from "../../ui/card";
import { FormCari } from "../../ui/search";
import { SubTitle } from "../../ui/sub-tittle";

export const BeritaIndex = () => {
  return (
    <div className="max-w-6xl mx-auto w-full py-20">
      <SubTitle margin="center" title="Berita dari Kampung" />

      <FormCari placeholder="Cari berita..." />
      <div className="grid grid-cols-2 gap-10">
        {listBerita.map((berita) => (
          <CardBerita key={berita.id} {...berita} />
        ))}
      </div>
    </div>
  );
};
