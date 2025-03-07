import { SubTitle } from "../../ui/sub-tittle";

import { lissStatistikPenduduk } from "../../../data/list-statistik-penduduk";
import { CardStatistikPenduduk } from "../../ui/card";

export const StatisticPenduduk = () => {
  return (
    <div className=" bg-slate-100 w-full">
      <div className="mx-auto py-10 px-4 md:px-0 max-w-5xl flex flex-col gap-20">
        <SubTitle
          subtitle="Statistik "
          title="Jumlah Penduduk "
          margin="left"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {lissStatistikPenduduk.map((st, index) => (
            <CardStatistikPenduduk
              key={index}
              image={st.image}
              jumlah={st.jumlah}
              jenis={st.jenis}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
