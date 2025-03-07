import { Route, Routes, useLocation } from "react-router";
import { HeaderPage } from "./components/view/header/header-index";
import { Homepage } from "./pages/home-page";
import { ContactPage } from "./pages/contact-page";
import { BeritaPage } from "./pages/berita-page";

import { FooterPage } from "./components/view/footer/footer-index";
import { ProfilLayout } from "./components/view/profil/profil-layout";
import { ProfilPage } from "./pages/profil-page";
import { VisiMisi } from "./pages/visimisi-page";
import { SejarahPage } from "./pages/sejarah-page";
import { useEffect } from "react";
import { SilsilahPage } from "./pages/silsilah-page";
import { SambutanPage } from "./pages/sambutan-page";
import { PerangkatPage } from "./pages/perangkat-page";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Gulir ke atas saat pathname berubah
  }, [location.pathname]);

  return null; // Komponen ini tidak merender apa pun
}

function App() {
  return (
    <>
      <ScrollToTop />
      <HeaderPage />
      <Routes>
        <Route element={<ProfilLayout />}>
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/visimisi" element={<VisiMisi />} />
          <Route path="/sejarah" element={<SejarahPage />} />
          <Route path="/silsilah" element={<SilsilahPage />} />
          <Route path="/sambutankadus" element={<SambutanPage />} />
          <Route path="/perangkatdusun" element={<PerangkatPage />} />
        </Route>

        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/berita" element={<BeritaPage />} />
      </Routes>
      <FooterPage />
    </>
  );
}

export default App;
