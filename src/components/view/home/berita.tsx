import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { listBerita } from "../../../data/berita";
import { CardArticleHome } from "../../ui/card";
import { LinkButton } from "../../ui/link";
import { SubTitle } from "../../ui/sub-tittle";

export const BeritaTerbaru = () => {
  const sberita = listBerita.slice(0, 3);

  return (
    <div className="w-f mx-auto w-full max-w-6xl space-y-4 px-4 md:px-0">
      <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
        <div className="space-y-5">
          <SubTitle title="Berita terbaru" margin="left" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="col-span-3 grid w-full grid-cols-1 justify-between gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {sberita.map((berita, index) => (
            <CardArticleHome
              key={index}
              {...berita}
              index={index}
              type="berita"
            />
          ))}
        </div>
      </div>
      <div className="flex w-full items-center justify-start sm:justify-center md:justify-end">
        <LinkButton href="/berita" size="md" theme="bg">
          {" "}
          Lihat semua berita
          <MdKeyboardDoubleArrowRight size={18} className="translate-ico" />
        </LinkButton>
      </div>
    </div>
  );
};
