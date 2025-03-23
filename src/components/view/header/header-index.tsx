import { useEffect, useState } from "react";
import { Navbar } from "./header-navbar";
import { cn } from "../../../lib/utils";

export const HeaderPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [header, setHeader] = useState(false); //

  const handleIsMobile = () => {
    setIsMobile(!isMobile);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollState = window.scrollY;

      if (currentScrollState > scrollPosition && currentScrollState > 50) {
        setHeader(false);
      } else {
        setHeader(true);
      }

      setScrollPosition(currentScrollState);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollPosition]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-30 h-[70px] w-full transform shadow-sm transition-transform duration-300 ease-in-out",
        header ? "translate-y-0" : "-translate-y-full",
      )}
    >
      {/* <HeaderInfo /> */}
      <Navbar onClick={handleIsMobile} isMobile={isMobile} />
    </header>
  );
};
