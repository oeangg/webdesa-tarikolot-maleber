export function GetTime() {
  const arrMonth = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "Nopember",
    "Desember",
  ];

  const arrDay = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
    "Minggu",
  ];

  const date = new Date();
  const minute = String(date.getMinutes()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const day = date.getDay();
  const sdate = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  function Gretting() {
    const shour = date.getHours();
    if (shour <= 10) {
      return "Wilujeung Enjing!";
    } else if (shour <= 14) {
      return "Wilujeung Siang!";
    } else if (shour <= 17) {
      return "Wilujeung Sonten!";
    } else {
      return "Wilujeung Weungi!";
    }
  }
  const thisGretting = Gretting();
  const thisDay = `${arrDay[day - 1]},  ${sdate} ${arrMonth[month]} ${year} ${hour}:${minute}`;
  return { thisDay, thisGretting };
}
