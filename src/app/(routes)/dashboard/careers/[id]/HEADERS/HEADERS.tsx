import { Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { ICareer } from "@/types/Career/Career.types";
import {
  ISection,
  SECTIONS_TYPES,
  SECTIONS_TYPES_EXAMPLES,
} from "@/types/Pages/Sections/Sections.types";
import { SECTIONS_OPTIONS } from "@/types/Variables";
import { FindErrorKey } from "@/utils/validations";
import { FormikContextType, useFormikContext } from "formik";
import React from "react";
interface IProps {
  formik: FormikContextType<ICareer>;
}

export default function HEADER(props: IProps) {
  return <></>;
}
