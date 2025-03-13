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
    "Ahad",
  ];
  const date = new Date();
  const minute = String(date.getMinutes()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const day = date.getDay();
  const sdate = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const result = `${arrDay[day]}, ${sdate} ${arrMonth[month]} ${year} ${hour}:${minute}`;
  return result;
}
