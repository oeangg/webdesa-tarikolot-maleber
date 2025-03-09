import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { listBerita } from "../../../data/berita";
import { CardBerita } from "../../ui/card";
import { LinkButton } from "../../ui/link";
import { SubTitle } from "../../ui/sub-tittle";

export const BeritaTerbaru = () => {
  const sberita = listBerita.slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 md:px-0 ">
      <SubTitle title="Berita terbaru" subtitle="Berita" margin="center" />
      <div className=" w-full grid gap-5  md:grid-cols-2 mb-8">
        {sberita.map((berita, index) => (
          <CardBerita key={index} {...berita} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <LinkButton href="/berita" size="md" theme="bg">
          {" "}
          Berita lainnya{" "}
          <MdKeyboardDoubleArrowRight size={18} className="translate-ico" />
        </LinkButton>
      </div>
    </div>
  );
};
