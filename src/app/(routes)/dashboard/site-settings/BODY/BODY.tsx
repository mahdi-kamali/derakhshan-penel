import { LanguagesENUM } from "@/types/Language/Language.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FormikContextType } from "formik";
import Component from "./Components/Component";
import { ISiteSettings } from "@/types/Site-Settings/SiteSettings.types";

interface IProps {
  formik: FormikContextType<ISiteSettings>;
}

export default function BODY(props: IProps) {
  const { formik } = props;
  const languages: LanguagesENUM[] = [LanguagesENUM.FA, LanguagesENUM.EN];

  return languages.map((lang) => (
    <Component
      language={lang}
      formik={formik}
      key={lang}
    />
  ));
}
