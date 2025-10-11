import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FormikContextType } from "formik";
import Component from "./Component/Component";
import { LanguagesENUM } from "@/types/Language/Language.types";

interface IProps {
  formik: FormikContextType<ISection>;
}

export default function SERVICE(props: IProps) {
  const FA = Component({
    formik: props.formik,
    lagnuage: LanguagesENUM.FA,
  });

  const EN = Component({
    formik: props.formik,
    lagnuage: LanguagesENUM.EN,
  });

  return [FA, EN];
}
