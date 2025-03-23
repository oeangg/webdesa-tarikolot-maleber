import { SubTitle } from "../../ui/sub-tittle";
import { InfoKontak } from "./contact-info";

export const ContactIndex = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col justify-center gap-10 px-4 py-28 md:px-0">
      <SubTitle margin="center" title="Tentang Kami" />

      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
        {/* <FormKontak /> */}
        <div className="space-y-5">
          <p>
            Dusun VI Tarikolot adalah rumah yang hangat dan penuh kekeluargaan.
            Kami mengundang Anda untuk mengenal lebih dekat kehidupan masyarakat
            kami, keindahan alam desa, serta berbagai kegiatan yang kami
            selenggarakan. Website ini adalah wadah untuk berbagi informasi dan
            menjalin silaturahmi antara warga desa dan seluruh pengunjung.
          </p>
          <p>
            Semoga dengan adanya website ini bisa menjadi sarana informasi,
            aspirasi dan media promosi khususnya bagi warga tarikolot Maleber,
            umumnya seluruh pengunjung website ini.
          </p>
          <p>
            Kami senantiasa berusaha menjadi lebih baik. Silahkan sampaikan
            kritik dan saran Anda melalui kontak yang tercantum di halaman ini :
          </p>
        </div>
        <InfoKontak />
      </div>
      <div className="w-full overflow-hidden rounded-xl border-8 border-backgroundColor opacity-70 shadow-xl">
        <p className="mb-4 text-xl font-bold text-primaryColor">
          Lokasi Kami :
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.813998305558!2d108.55660807454245!3d-7.031136368884366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f134f79dcdd1d%3A0x6c915cb193217baf!2sTarikolot%20Maleber!5e0!3m2!1sid!2sid!4v1741334399003!5m2!1sid!2sid"
          height="450"
          width="100%"
          style={{ border: 1 }}
          // sandbox="allow-scripts allow-modal"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
