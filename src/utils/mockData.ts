import jalaali from "jalaali-js";

const convertToJalali = (gregorianDate: any) => {
  const date = new Date(gregorianDate);
  const jalaliDate = jalaali.toJalaali(date);
  return `${jalaliDate.jy}/${jalaliDate.jm}/${jalaliDate.jd}`;
};

const generateDates = (count: number) => {
  const baseDate = new Date("01/01/2000");
  const dates = [];
  for (let i = 0; i < count; i++) {
    dates.push(
      new Date(baseDate.getTime() + i * 24 * 60 * 60 * 1000).toISOString(),
    );
  }
  return dates;
};

export { convertToJalali, generateDates };
