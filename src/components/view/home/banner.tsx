import imgBanner from "/banner/Ramadan Kareem Banner.jpg";

export const Banner = () => {
  return (
    <div className=" max-w-6xl w-full mx-auto overflow-hidden">
      <img
        src={imgBanner}
        alt="banner ramadhan kareem"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};
