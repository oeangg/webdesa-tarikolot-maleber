import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { listTulisan } from "../../../data/tulisan";
import { CardArticle } from "../../ui/card";
import { LinkButton } from "../../ui/link";
import { SubTitle } from "../../ui/sub-tittle";

export const TulisanTerbaru = () => {
  const stulisan = listTulisan.slice(0, 4);
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-0">
      <SubTitle title="Tulisan terbaru" margin="left" />
      <div className="mb-8 grid w-full gap-5 md:grid-cols-2">
        {stulisan.map((tulisan, index) => (
          <CardArticle key={index} {...tulisan} index={index} type="tulisan" />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <LinkButton href="/tulisan" size="md" theme="bg">
          Lihat semua tulisan
          <MdKeyboardDoubleArrowRight size={18} className="translate-ico" />
        </LinkButton>
      </div>
    </div>
  );
};
