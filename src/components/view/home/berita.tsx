import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { listBerita } from "../../../data/berita";
import { CardBerita } from "../../ui/card";
import { LinkButton } from "../../ui/link";
import { SubTitle } from "../../ui/sub-tittle";

export const BeritaTerbaru = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-0 ">
      <SubTitle title="Berita terbaru" subtitle="Berita" margin="center" />
      <div className=" w-full grid gap-5  md:grid-cols-2 mb-8">
        {listBerita.map((berita, index) => (
          <CardBerita key={index} {...berita} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <LinkButton href="/berita" size="md" theme="bg">
          {" "}
          Berita lainnya <MdKeyboardDoubleArrowRight size={18} />
        </LinkButton>
      </div>
    </div>
  );
};
