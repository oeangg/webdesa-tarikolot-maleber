import { useEffect, useState } from "react";
import { HeaderInfo } from "./header-info";
import { Navbar } from "./header-navbar";
import { cn } from "../../../tools/cn";

export const HeaderPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [header, setHeader] = useState(false);

  const handleIsMobile = () => {
    setIsMobile(!isMobile);
  };

  const scrollNavbar = () => {
    if (window.scrollY > 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNavbar);
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setIsMobile(false)
    );

    return () => {
      window.addEventListener("scroll", scrollNavbar);
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 768 && setIsMobile(false)
      );
    };
  }, []);

  return (
    <header
      className={cn(
        " w-full bg-backgroundColor",
        header && "fixed top-0 left-0 right-0 z-50  "
      )}
    >
      <HeaderInfo header={header} />
      <Navbar onClick={handleIsMobile} header={header} isMobile={isMobile} />
    </header>
  );
};
