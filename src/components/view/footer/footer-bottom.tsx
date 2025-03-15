export const FooterBottom = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-5 bg-primaryColor px-5 py-6">
      <p className="text-xs font-light text-backgroundColor/70">
        Copyright &#169; {new Date().getFullYear()} Tarikolot Maleber Digital,
        All Right Reserved
      </p>
    </div>
  );
};
