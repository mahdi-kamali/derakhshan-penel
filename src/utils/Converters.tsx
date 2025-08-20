import jalaali from "jalaali-js";
import moment from "moment-jalaali";

export const dateToJalai = (value: string) => {
  const m = moment(value);
  const formated = m.format("jYYYY/jMM/jDD");
  const isNan = formated.includes("NaN");
  if (isNan || !value) return "---";
  return formated;
};

export const getTimeFromDate = (value: Date) => {
  const date = new Date(value);
  const time = moment(date);
  return `${time.hours()}:${time.minutes()}:${time.seconds()}`;
};

export function convertStringBooleans(obj: any) {
  if (typeof obj === "object" && obj !== null) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] === "true") {
          obj[key] = true;
        } else if (obj[key] === "false") {
          obj[key] = false;
        } else if (typeof obj[key] === "object") {
          convertStringBooleans(obj[key]);
        }
      }
    }
  }
  return obj;
}

export const ToJson = (data: any) => {
  return JSON.stringify(data);
};

export function ResolveNestedOBject(path: string, obj = self, separator = ".") {
  const properties = Array.isArray(path) ? path : path.split(separator);
  return properties.reduce((prev, curr) => prev?.[curr], obj);
}
