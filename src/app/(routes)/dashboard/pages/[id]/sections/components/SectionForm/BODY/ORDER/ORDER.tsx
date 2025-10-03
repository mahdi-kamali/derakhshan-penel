import { FormikContextType } from "formik";
import Component from "./Component/Component";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { LanguagesENUM } from "@/types/Language/Language.types";

interface IProps {
  formik: FormikContextType<ISection>;
}

export default function ORDER(props: IProps) {
  const { formik } = props;
  const { values } = formik;
  const { type } = values;
  if (type !== "ORDER") return [];
  const FA = (
    <Component
      formik={formik}
      language={LanguagesENUM.FA}
    />
  );
  const EN = (
    <Component
      formik={formik}
      language={LanguagesENUM.EN}
    />
  );

  return [FA, EN];
}
