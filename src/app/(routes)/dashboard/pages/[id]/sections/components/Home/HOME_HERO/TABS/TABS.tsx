import { ReactElement } from "react";
import styles from "./styles.module.scss";
import Icon from "@/components/UI/Icon/Icon";

interface ITAB {
  icon: ReactElement;
  label: string;
}

export default function TABS(props: any) {
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

  {
  }

  return tabs.map((tab, index) => {
    return (
      <button
        className={styles.tab}
        onClick={() => {}}>
        <span>{tab.icon}</span>
        <span>{tab.label}</span>
      </button>
    );
  });
}
