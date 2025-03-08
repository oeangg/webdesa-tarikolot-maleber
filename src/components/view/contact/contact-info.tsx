import { FiPhone } from "react-icons/fi";
import {
  MdOutlineAccessTime,
  MdOutlineMail,
  MdOutlinePlace,
} from "react-icons/md";

export const InfoKontak = () => {
  return (
    <div className="w-full p-16  bg-secondaryColor">
      <h1 className="text-2xl font-semibold mb-8">Info</h1>
      <div className="space-y-3">
        <div className="flex flex-row gap-3 text-sm font-light   items-center">
          <MdOutlinePlace size={18} /> Dusun VI tarikolot Desa Maleber, Kuningan
          Jawa Barat
        </div>
        <div className="flex flex-row gap-3 text-sm font-light   items-center">
          <MdOutlineMail size={18} /> admin@webtarikolot.net{" "}
        </div>
        <div className="flex flex-row gap-3 text-sm font-light   items-center">
          <FiPhone size={18} /> +621 8888 7777 1111
        </div>
        <div className="flex flex-row gap-3 text-sm font-light   items-center">
          <MdOutlineAccessTime size={18} /> 08:00 - 17:00 WIB
        </div>
      </div>
    </div>
  );
};
