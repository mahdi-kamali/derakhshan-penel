import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FormikContextType } from "formik";
import HOME_HERO_BODY from "./HOME_HERO/HOME_HERO_BODY";
import HOME_ABOUT_US_BODY from "./HOME_ABOUT_US/HOME_ABOUT_US_BODY";
import HOME_ADVANCE_PACKING_BODY from "./HOME_ADVANCE_PACKING/HOME_ADVANCE_PACKING";

interface IProps {
  formik: FormikContextType<ISection>;
}

export default function BODY(props: IProps) {
  const { type } = props.formik.values;

  switch (type) {
    case "HOME_HERO":
      return HOME_HERO_BODY(props);
    case "HOME_ABOUT_US":
      return HOME_ABOUT_US_BODY(props);
    case "HOME_ADVANCED_PACKAGING":
      return HOME_ADVANCE_PACKING_BODY(props);
    default:
      return HOME_HERO_BODY(props);
  }
}
