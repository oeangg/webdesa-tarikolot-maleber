import React from "react";
import { GoSearch } from "react-icons/go";

type PropsType = {
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const FormCari = ({ placeholder, value, onChange }: PropsType) => {
  return (
    <form className="px-4 md:px-0  w-full mb-10 ">
      <div className="relative  max-w-3xl mx-auto">
        <GoSearch size={20} className="absolute left-4 top-3 " />
        <input
          type="text"
          name="cari"
          defaultValue={value}
          onChange={onChange}
          id=""
          placeholder={placeholder}
          className="w-full px-10 "
        />
      </div>
    </form>
  );
};
