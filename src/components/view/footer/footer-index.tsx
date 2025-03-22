import { FooterBottom } from "./footer-bottom";
import { FooterLeft } from "./footer-left";
import { FooterRight } from "./footer-right";

export const FooterPage = () => {
  return (
    <div className="flex flex-col bg-[#021526]">
      <div className="flex flex-col justify-between gap-5 px-5 py-28 md:flex-row md:px-20">
        <FooterLeft />
        <FooterRight />
      </div>
      <FooterBottom />
    </div>
  );
};
