import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FormikContextType } from "formik";
import HOME from "./HOME/HOME";
import ABOUT_US from "./ABOUT-US/ABOUT_US";
import CAREERS from "./CAREERS/CAREERS";
import CONTACT_US from "./CONTACT-US/CONTACT_US";
import ORDER from "./ORDER/ORDER";
import PRESS from "./PRESS/PRESS";
import { useEffect } from "react";
interface IProps {
  formik: FormikContextType<ISection>;
}

export default function BODY(props: IProps) {
  const { formik } = props;
  const { values } = formik;
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
    case "CAREERS_HERO":
      return CAREERS.CAREERS_HERO(props);
    case "CAREERS_JOBS":
      return CAREERS.JOBS(props);
    case "CONTACT_US":
      return CONTACT_US(props);
    case "ORDER":
      return ORDER(props);
    case "PREE_PRESS":
      return PRESS.PREE_PRESS(props);
    case "PRESS":
      return PRESS.PRESS(props);
    case "POST_PRESS":
      return PRESS.POST_PRESS(props);
    default:
      return HOME.HERO(props);
  }
}
