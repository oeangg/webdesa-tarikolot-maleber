import { GoSearch } from "react-icons/go";

type PropsType = {
  placeholder: string;
};

export const FormCari = ({ placeholder }: PropsType) => {
  return (
    <form className="  w-full mb-10 ">
      <div className="relative  max-w-3xl mx-auto">
        <GoSearch size={20} className="absolute left-4 top-3 " />
        <input
          type="text"
          name="cari"
          id=""
          placeholder={placeholder}
          className="w-full px-10"
        />
      </div>
    </form>
  );
};
