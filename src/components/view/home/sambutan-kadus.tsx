import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import imgKepalaDusun from "/photo perangkat dusun/rocky.jpg";
import { LinkButton } from "../../ui/link";
import { SubTitle } from "../../ui/sub-tittle";
import { GetTime } from "../../../tools/time";

export const SambutanKadus = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col px-4 md:px-0">
      <SubTitle
        subtitle="Sambutan Kepala Dusun"
        title="Anggi Gumilar"
        margin="center"
      />
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex w-full basis-1/2 items-center justify-center overflow-hidden">
          <img
            src={imgKepalaDusun}
            alt="photo kepala dusun"
            height={300}
            width={300}
            className="border border-borderPrimary p-4"
          />
        </div>
        <div className="basis-1/2 space-y-5">
          <h3 className="text-xl font-medium tracking-wide">
            Assalamualaikum Wr.Wb
          </h3>
          <p className="text-base font-medium leading-5 md:leading-7">
            <span className="font-semibold">{GetTime().thisGretting}</span>,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            aute m quos ut corporis laboriosam earum accusantium quas. Enim illo
            cupiditate quisquam accusantium, excepturi voluptas omnis ut
            ratione, voluptates nesciunt eaque!
          </p>
          <p className="text-base font-medium leading-5 md:leading-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ipsa
            magnam sed eveniet ut. Obcaecati quae dolorum eaque quidem neque.
            Repellat iusto eius enim fuga iste optio repellendus unde provident,
            odit modi ad laudantium quam commodi quo inventore distinctio
            debitis. In provident ipsa at consectetur voluptates placeat fugit
            quas nemo!
          </p>
          <LinkButton href="/sambutankadus" theme="border" size="md">
            Selengkapnya{" "}
            <MdKeyboardDoubleArrowRight size={20} className="translate-ico" />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
