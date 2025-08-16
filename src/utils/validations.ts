import { string, object } from "yup";

const AUTH = {
  LOGIN: object({
    phone: string()
      .required("شماره تلفن الزامی است")
      .matches(/^09\d{9}$/, "شماره تلفن معتبر نیست"), // Example: Iranian mobile number format
    password: string().required("رمز عبور الزامی است"),
  }),
};

const VALIDATION = {
  AUTH,
};

export default VALIDATION;
