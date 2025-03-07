import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import imgProfil from "../../../assets/images/tamaldrone.jpg";
import { LinkButton } from "../../ui/link";
export const ProfilIndex = () => {
  return (
    <div className="py-10 flex flex-col gap-5">
      <h2>Profil Singkat Tarikolot</h2>
      <p>
        Tarikolot merupakan salah satu Dusun di Desa Maleber yang terletak di
        selatan Desa Maleber. Berbatasan langsung dengan dua desa yaitu desa
        kutamandaran dan desa parakan. Secara tepatnya dusun VI tarikolot
        terletak di desa Maleber kecamatan Maleber kabupaten Kuningan, Jawa
        Barat.
      </p>

      <img src={imgProfil} alt="image tarikolot drone" />

      <div className="mx-auto">
        <LinkButton href="/visimisi" theme="border">
          Selengkapnya <MdKeyboardDoubleArrowRight size={20} />{" "}
        </LinkButton>
      </div>

      <h2>Berikut video Kampung Tarikolot :</h2>
      <iframe
        height="400"
        src="https://www.youtube.com/embed/ij4Ezk1MCvk?si=gu7BRkaR6lOU08Gc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full"
      ></iframe>
    </div>
  );
};
