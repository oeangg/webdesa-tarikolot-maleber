import { SubTitle } from "../../ui/sub-tittle";
import { FormKontak } from "./contact-form";
import { InfoKontak } from "./contact-info";

export const ContactIndex = () => {
  return (
    <div className="mx-auto max-w-6xl w-full flex flex-col gap-10 justify-center py-20 ">
      <SubTitle margin="center" title="Kontak Kami" />

      <div className="px-4 md:px-0 w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <FormKontak />
        <InfoKontak />
      </div>
    </div>
  );
};
