import { SubTitle } from "../../ui/sub-tittle";
import { listTulisan } from "../../../data/tulisan";
import { CardTulisan } from "../../ui/card";
import { FormCari } from "../../ui/search";

export const TulisanIndex = () => {
  return (
    <div className="w-full mx-auto max-w-6xl py-20 ">
      <SubTitle margin="center" title="Tulisan Kawan" />
      <FormCari placeholder="Cari tulisan..." />
      <div className="grid grid-cols-2 gap-10">
        {listTulisan.map((tulisan) => (
          <CardTulisan key={tulisan.id} {...tulisan} />
        ))}
      </div>
    </div>
  );
};
