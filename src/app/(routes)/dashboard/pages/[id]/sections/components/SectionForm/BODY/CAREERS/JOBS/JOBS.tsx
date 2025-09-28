import { Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { ICareer } from "@/types/Career/Career.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FormikContextType, useFormik } from "formik";
import { ReactElement } from "react";
import Create from "./Create/Create";

interface IProps {
  formik: FormikContextType<ISection>;
}

export default function JOBS(props: IProps): ReactElement[] {
  const { formik } = props;

  const { values, setFieldValue, handleChange } = formik;

  const { type } = values;

  if (type !== "CAREERS_JOBS") return [];

  const Component = (language: LanguagesENUM) => {
    const components = values.components[language].jobs;
    return (
      <Grid>
        <Create />
      </Grid>
    );
  };

  const FA = Component(LanguagesENUM.FA);
  const EN = Component(LanguagesENUM.EN);

  return [FA, EN];
}
