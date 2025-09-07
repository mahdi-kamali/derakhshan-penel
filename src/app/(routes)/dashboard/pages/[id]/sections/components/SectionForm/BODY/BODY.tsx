import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FormikContext, FormikContextType, useFormikContext } from "formik";
import HOME from "./HOME/HOME";
import ABOUT_US from "./ABOUT-US/ABOUT_US";

export default function BODY(props: any) {
  const { values } = useFormikContext<ISection>();

  const { type } = values;

  switch (type) {
    case "HOME_HERO":
      return HOME.HERO(props);
    case "HOME_ABOUT_US":
      return HOME.ABOUT_US(props);
    case "HOME_ADVANCED_PACKAGING":
      return HOME.ADVANCE_PACKING(props);
    case "HOME_EXCLUSIVE_GIFT_BOXES":
      return HOME.EXCLUSIVE_GIFT_BOXES(props);
    case "ABOUT_US_MAIN":
      return ABOUT_US.MAIN(props);
    default:
      return HOME.HERO(props);
  }
}
