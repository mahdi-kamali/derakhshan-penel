import { LanguagesENUM } from "@/types/Language/Language.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FormikContextType } from "formik";
import React from "react";
import Component from "./Component/Component";

interface IProps {
  formik: FormikContextType<ISection>;
}

export default function JOBS(props: IProps) {
  const FA = (
    <Component
      {...props}
      language={LanguagesENUM.FA}
    />
  );

  const EN = (
    <Component
      {...props}
      language={LanguagesENUM.EN}
    />
  );

  return [FA, EN];
}
