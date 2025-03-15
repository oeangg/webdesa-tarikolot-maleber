import imgFooter from "/icon/home.png";

export const FooterLeft = () => {
  return (
    <div className="basis-1/2 space-y-5 border-b border-backgroundColor/50 md:border-b-0 md:border-r">
      {/* <RiHomeSmileFill size={72} className="text-highlightColor" /> */}
      <img src={imgFooter} alt="icon home" style={{ height: 52 }} />
      <div className="space-y-2">
        <p className="font-Inter text-base font-bold tracking-tight text-backgroundSecondary/80 md:text-xl">
          Ti Lembur Balik Deui ka Lembur
        </p>
        <div className="-space-y-1 pb-5 text-primaryColor">
          <p className="text-base font-light leading-5 md:w-2/3">
            Semoga website ini menjadi sarana informasi, aspirasi dan promosi
            warga Dusun VI Tarikolot, Desa Maleber, Kecamatan Maleber, Kuningan,
            Jawa barat
          </p>
        </div>
      </div>
    </div>
  );
};
