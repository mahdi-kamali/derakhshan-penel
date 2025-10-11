import { components, GroupProps } from "react-select";
import GroupHeading from "../GroupHeading/GroupHeading";
import styles from "./styles.module.scss";
import { IOption } from "@/types/Variables";
const Group = (props: GroupProps<any>) => {
  const childs = (props.children || []) as [];
  const { variant } = props.data as IOption;

  const groupClass = [styles.group, styles[`variant-${variant}`]].join(" ");

  return (
    <div className={groupClass}>
      <div className={styles.header}>
        <GroupHeading
          {...props}
          id='test'
        />
      </div>
      <div className={styles.childs}>{childs}</div>
    </div>
  );
};

export default Group;
