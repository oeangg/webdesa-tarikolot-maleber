import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import imgKepalaDusun from "../../../assets/images/rocky.jpg";
import { LinkButton } from "../../ui/link";
import { SubTitle } from "../../ui/sub-tittle";

export const SambutanKadus = () => {
  return (
    <div className="max-w-5xl w-full flex flex-col gap-10  mx-auto">
      <SubTitle
        subtitle="Sambutan Kepala Dusun"
        title="Rocky Gerung, S.Mul"
        margin="center"
      />
      <div className="flex flex-col md:flex-row gap-10">
        <div className="basis-1/2 w-full flex justify-center items-center">
          <img
            src={imgKepalaDusun}
            alt="photo kepala dusun"
            height={300}
            width={300}
          />
        </div>
        <div className="basis-1/2 space-y-5">
          <p>Assalamualaikum Wr.Wb</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            autem quos ut corporis laboriosam earum accusantium quas. Enim illo
            cupiditate quisquam accusantium, excepturi voluptas omnis ut
            ratione, voluptates nesciunt eaque!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ipsa
            magnam sed eveniet ut. Obcaecati quae dolorum eaque quidem neque.
            Repellat iusto eius enim fuga iste optio repellendus unde provident,
            odit modi ad laudantium quam commodi quo inventore distinctio
            debitis. In provident ipsa at consectetur voluptates placeat fugit
            quas nemo!
          </p>
          <LinkButton href="/sambutankadus" theme="border">
            Selengkapnya <MdKeyboardDoubleArrowRight size={20} />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
