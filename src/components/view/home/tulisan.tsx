import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { listTulisan } from "../../../data/tulisan";
import { CardTulisan } from "../../ui/card";
import { LinkButton } from "../../ui/link";
import { SubTitle } from "../../ui/sub-tittle";

export const TulisanTerbaru = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-0 ">
      <SubTitle title="Tulisan terbaru" subtitle="Tulisan" margin="left" />
      <div className=" w-full grid gap-5  md:grid-cols-2 mb-8">
        {listTulisan.map((tulisan, index) => (
          <CardTulisan key={index} {...tulisan} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <LinkButton href="/tulisan" size="md" theme="bg">
          {" "}
          Tulisan lainnya <MdKeyboardDoubleArrowRight size={18} />
        </LinkButton>
      </div>
    </div>
  );
};
