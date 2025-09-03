import { ReactElement } from "react";
import styles from "./styles.module.scss";
import Icon from "@/components/UI/Icon/Icon";
import { FormikContextType } from "formik";
import { ISection } from "@/types/Pages/Sections/Sections.types";

interface ITAB {
  icon: ReactElement;
  label: string;
}

interface IProps {
  formik: FormikContextType<ISection>;
  goToSlide: (index: number) => void;
  currentSlide: number;
}

export default function TABS(props: IProps) {
  const { goToSlide, currentSlide } = props;

  const tabs: ITAB[] = [
    {
      label: "فارسی",
      icon: <Icon icon='emojione:flag-for-iran' />,
    },
    {
      label: "انگلیسی",
      icon: <Icon icon='circle-flags:gb-eng' />,
    },
  ];

  return tabs.map((tab, index) => {
    const tabClass = [
      index === currentSlide && styles.isActive,
      styles.tab,
    ].join(" ");
    return (
      <button
        className={tabClass}
        onClick={() => goToSlide(index)}>
        <span>{tab.icon}</span>
        <span>{tab.label}</span>
      </button>
    );
  });
}
