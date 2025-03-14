import { SubTitle } from "../../ui/sub-tittle";

import { lissStatistikPenduduk } from "../../../data/list-statistik-penduduk";
import { CardStatistikPenduduk } from "../../ui/card";

export const StatisticPenduduk = () => {
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-6xl flex-col px-4 py-10 md:px-0">
        <SubTitle
          subtitle="Statistik "
          title="Jumlah penduduk "
          margin="left"
        />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
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
