import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SubTitle } from "../../ui/sub-tittle";

const schemaPesan = z.object({
  nama: z.string().min(5, "nama minimal harus 5 karakter"),
  phone: z
    .string()
    .min(11, "nophone minimal harus 11 digit")
    .max(14, "nophone maximal 14 digit"),
  pesan: z
    .string()
    .min(10, "pesan minimal harus  10 karakter")
    .max(60, "pesan maximal harus 60 karakter"),
});

type SchemaPesan = z.infer<typeof schemaPesan>;

export const FormAspirasi = () => {
  const form = useForm<SchemaPesan>({ resolver: zodResolver(schemaPesan) });
  const [send, setSend] = useState(false);
  const [isiPesan, setIsiPesan] = useState<SchemaPesan>();
  const [loading, setLoading] = useState(false);
  const { formState, register, reset, handleSubmit } = form;

  const SubmitPesan = (field: SchemaPesan) => {
    setLoading(true);

    setTimeout(() => {
      setSend(true);
      setLoading(false);

      setIsiPesan({
        nama: field.nama,
        phone: field.phone,
        pesan: field.pesan,
      });
      reset();
    }, 2000);

    setTimeout(() => {
      setSend(false);
    }, 5000);
  };

  return (
    <div
      className="mx-auto flex w-full max-w-6xl flex-col justify-center gap-10 py-20"
      onSubmit={handleSubmit(SubmitPesan)}
    >
      <SubTitle margin="center" title="Kontak Kami" />
      <p className="mx-auto max-w-lg text-left">
        Kami senantiasa berusaha menjadi lebih baik. Silahkan sampaikan kritik
        dan saran Anda melalui kontak di bawah ini :
      </p>
      <form className="mx-auto w-full max-w-lg">
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="nama">Nama </label>
            <input
              type="text"
              id="nama"
              autoComplete="false"
              placeholder="Masukkan Nama"
              {...register("nama")}
            />
            {formState.errors.nama && (
              <p className="text-xs font-normal text-red-500">
                {formState.errors.nama.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone">No. Telpon </label>
            <input
              type="phone"
              id="phone"
              autoComplete="false"
              placeholder="Masukkan nomor telephone"
              {...register("phone")}
            />
            {formState.errors.phone && (
              <p className="text-xs font-normal text-red-500">
                {formState.errors.phone.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="pesan">Pesan</label>
            <textarea
              id="pesan"
              autoComplete="false"
              placeholder="Silahkan tuliskan pesan"
              {...register("pesan")}
            />
            {formState.errors.pesan && (
              <p className="text-xs font-normal text-red-500">
                {formState.errors.pesan.message}
              </p>
            )}
          </div>
          {send && (
            <p className="animate-pulse text-base font-light text-green-600">
              Pesan berhasil dikirim ke{" "}
              {`${isiPesan?.nama} ${isiPesan?.phone} Pesan : ${isiPesan?.pesan}`}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primaryColor px-4 py-2 text-base font-medium text-backgroundColor hover:bg-highlightColor disabled:cursor-progress disabled:opacity-70"
          >
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </div>
      </form>
    </div>
  );
};
