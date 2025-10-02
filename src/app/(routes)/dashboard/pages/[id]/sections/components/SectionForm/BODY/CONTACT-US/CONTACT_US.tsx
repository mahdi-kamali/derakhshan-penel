import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FormikContextType } from "formik";
import Component from "./Component/Component";
import { LanguagesENUM } from "@/types/Language/Language.types";

interface IProps {
  formik: FormikContextType<ISection>;
}

export default function CONTACT_US(props: IProps) {
  const { formik } = props;

  const FA = (
    <Component
      language={LanguagesENUM.FA}
      formik={formik}
    />
  );
  const EN = (
    <Component
      language={LanguagesENUM.EN}
      formik={formik}
    />
  );

  return [FA, EN];
}
