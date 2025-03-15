import { FooterBottom } from "./footer-bottom";
import { FooterLeft } from "./footer-left";
import { FooterRight } from "./footer-right";

export const FooterPage = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-highlightColor/70 to-primaryColor">
      <div className="flex flex-col justify-between gap-5 px-5 py-20 md:flex-row md:px-20">
        <FooterLeft />
        <FooterRight />
      </div>
      <FooterBottom />
    </div>
  );
};
