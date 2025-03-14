import { useEffect, useState } from "react";
import { HeaderInfo } from "./header-info";
import { Navbar } from "./header-navbar";
import { cn } from "../../../lib/utils";

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

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNavbar);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", scrollNavbar);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={cn(
        "w-full bg-primaryColor",
        header && "fixed left-0 right-0 top-0 z-50",
      )}
    >
      <HeaderInfo header={header} />
      <Navbar onClick={handleIsMobile} header={header} isMobile={isMobile} />
    </header>
  );
};
