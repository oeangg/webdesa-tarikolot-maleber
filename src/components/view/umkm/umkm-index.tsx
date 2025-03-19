import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { listUMKM } from "../../../data/umkm";
import { LinkButton } from "../../ui/link";
import { SubTitle } from "../../ui/sub-tittle";

export const UMKMIndex = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-20 md:px-0">
      <SubTitle
        margin="center"
        title="Usaha Kecil dan Menengah"
        subtitle="UMKM"
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {listUMKM.map((umkm) => (
          <div className="space-y-5 overflow-hidden rounded-md shadow-md">
            <div className="relative h-44 min-w-60">
              <img
                src={umkm.logo}
                alt={umkm.nama}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
              <div className="absolute inset-0 h-44 min-w-60 bg-gradient-to-t from-backgroundColor to-transparent"></div>
              <h1 className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center font-Inter text-2xl font-bold uppercase italic tracking-wide text-primaryColor/80">
                {umkm.nama}
              </h1>
            </div>
            <div className="space-y-4 p-5">
              <div className="space-y-2">
                <h3 className="font-medium">Pemilik : {umkm.pemilik}</h3>
                <h3 className="font-medium">Alamat : {umkm.alamat}</h3>
              </div>
              <div className="line-clamp-5 space-y-3">
                {umkm.profil.map((x) => (
                  <p>{x}</p>
                ))}
              </div>
              <div className="flex justify-end">
                <LinkButton
                  href={`/umkm/${umkm.slug}`}
                  size="sm"
                  theme="border"
                >
                  Selengkapnya{" "}
                  <MdKeyboardDoubleArrowRight
                    size={18}
                    className="translate-ico"
                  />
                </LinkButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
