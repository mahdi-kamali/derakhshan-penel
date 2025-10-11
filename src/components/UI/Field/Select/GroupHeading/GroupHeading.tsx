import { GroupHeadingProps, components } from "react-select";

import styles from "./styles.module.scss";

const GroupHeading = (props: GroupHeadingProps) => {
  const data = props.data;
  const { options, label, icon } = data as any;

  return (
    <components.GroupHeading {...props}>
      <div className={styles.header}>
        <span>{icon}</span>
        <span>{label}</span>
      </div>
    </components.GroupHeading>
  );
};

export default GroupHeading;
