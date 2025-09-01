import { string, object, boolean } from "yup";
import get from "lodash/get";

const AUTH = {
  LOGIN: object({
    phone: string()
      .required("شماره تلفن الزامی است")
      .matches(/^09\d{9}$/, "شماره تلفن معتبر نیست"), // Example: Iranian mobile number format
    password: string().required("رمز عبور الزامی است"),
  }),
};

const PAGE = {
  SECTION: object().shape({
    name: string().required("نام الزامی است"),
    type: string().required("نوع الزامی است"),
    components: object().shape({
      EN: object({
        experience: string().required("فیلد experience (EN) الزامی است"),
        logo: object().required("فیلد logo (EN) الزامی است"),
        tagline: string().required("فیلد tagline (EN) الزامی است"),
      }),
      FA: object({
        experience: string().required("فیلد experience (FA) الزامی است"),
        logo: object().required("فیلد logo (FA) الزامی است"),
        tagline: string().required("فیلد tagline (FA) الزامی است"),
      }),
    }),
    isActive: boolean().required("فعال بودن الزامی است"),
  }),
};

export const FindErrorKey = (errors: any, key: string) => {
  const error = get(errors, key); // مثلا "components.EN.logo"
  return error;
};

export const HasError = (errors: any) => {
  const hasError = Object.keys(errors).length > 0;
  return hasError;
};

const VALIDATION = {
  AUTH,
  PAGE,
};

export default VALIDATION;
