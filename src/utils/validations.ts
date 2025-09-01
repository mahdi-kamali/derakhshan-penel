import { string, object } from "yup";
import get from "lodash/get";

const AUTH = {
  LOGIN: object({
    phone: string()
      .required("شماره تلفن الزامی است")
      .matches(/^09\d{9}$/, "شماره تلفن معتبر نیست"), // Example: Iranian mobile number format
    password: string().required("رمز عبور الزامی است"),
  }),
};

export const FindErrorKey = (errors: any, key: string) => {
  const error = get(errors, key); // مثلا "components.EN.logo"
  return error;
};

const VALIDATION = {
  AUTH,
};

export default VALIDATION;
