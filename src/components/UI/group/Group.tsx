import { ReactElement } from "react";

import styles from "./styles.module.scss";

interface IProps {
  children: ReactElement[];
  header: string;
}

export default function Group(props: IProps) {
  const { children, header } = props;

  return (
    <div className={styles.group}>
      <div className={styles.header}>{header}</div>
      <div className={styles.body}>
        {children.map((child) => (
          <div className={styles.child}>{child}</div>
        ))}
      </div>
    </div>
  );
}
