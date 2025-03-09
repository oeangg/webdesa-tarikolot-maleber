import { FooterBottom } from "./footer-bottom";
import { FooterLeft } from "./footer-left";
import { FooterRight } from "./footer-right";

export const FooterPage = () => {
  return (
    <div className="flex flex-col bg-secondaryColor ">
      <div className="px-5 md:px-20 py-20 flex flex-col md:flex-row gap-5 justify-between ">
        <FooterLeft />
        <FooterRight />
      </div>
      <FooterBottom />
    </div>
  );
};
