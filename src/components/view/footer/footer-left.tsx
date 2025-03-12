import imgFooter from "/icon/home.png";

export const FooterLeft = () => {
  return (
    <div className="basis-1/2 space-y-5 border-b border-backgroundColor/50 md:border-b-0 md:border-r">
      {/* <RiHomeSmileFill size={72} className="text-highlightColor" /> */}
      <img src={imgFooter} alt="icon home" />
      <div className="space-y-2">
        <p className="text-base md:text-xl tracking-normal text-primaryColor  font-extrabold ">
          Ti Lembur Balik Deui ka Lembur
        </p>
        <div className="-space-y-1 pb-5 text-primaryColor/70">
          <p className="text-base font-light">
            Websitena urang tarikolot Maleber
          </p>
          <p className="text-base font-light">
            Desa Maleber, Kecamatan Maleber
          </p>
          <p className="text-base font-light">Kuningan, Jawa barat</p>
        </div>
      </div>
    </div>
  );
};
