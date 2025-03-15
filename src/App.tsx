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
import { NotFoundPage } from "./pages/notfound-page";
import { PerangkatProfilPage } from "./pages/perangkat-profil-page";
import { TulisanPage } from "./pages/tulisan-page";
import { PelayananPage } from "./pages/pelayanan-page";
import { KeuanganPage } from "./pages/keuangan-page";
import BeritaDetailpage from "./pages/berita-detail-page";
import { TulisanDetailPage } from "./pages/tulisan-detail";
import { UMKMpage } from "./pages/umkm-page";
import { CtaSide_index } from "./components/view/cta-aspirasi/cta-index";
import { FormAspirasiPage } from "./pages/form-aspirasi-page";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    }); // Gulir ke atas saat pathname berubah
  }, [location.pathname]);

  return null; // Komponen ini tidak merender apa pun
}

function App() {
  return (
    <>
      <ScrollToTop />
      <HeaderPage />
      <CtaSide_index />
      <Routes>
        <Route element={<ProfilLayout />}>
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/visimisi" element={<VisiMisi />} />
          <Route path="/sejarah" element={<SejarahPage />} />
          <Route path="/silsilah" element={<SilsilahPage />} />
          <Route path="/sambutankadus" element={<SambutanPage />} />
          <Route path="/perangkatdusun" element={<PerangkatPage />} />
          <Route
            path="/profil/perangkatdusun/:slug"
            element={<PerangkatProfilPage />}
          />
        </Route>

        <Route path="/" element={<Homepage />} />
        <Route path="/tentangkami" element={<ContactPage />} />
        <Route path="/berita" element={<BeritaPage />} />
        <Route path="/berita/:slug" element={<BeritaDetailpage />} />
        <Route path="/tulisan" element={<TulisanPage />} />
        <Route path="/tulisan/:slug" element={<TulisanDetailPage />} />
        <Route path="/keuangan" element={<KeuanganPage />} />
        <Route path="/layanan" element={<PelayananPage />} />
        <Route path="/aspirasi" element={<FormAspirasiPage />} />
        <Route path="/umkm" element={<UMKMpage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <FooterPage />
    </>
  );
}

export default App;
