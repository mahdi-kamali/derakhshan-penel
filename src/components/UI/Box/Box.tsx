import { ReactElement } from "react";
import styles from "./styles.module.scss";

interface IProps {
  children: ReactElement;
  header?: React.ReactElement;
  maxContent?: boolean;
}

export default function Box(props: IProps) {
  const { children, header, maxContent = false } = props;
  return (
    <section
      className={styles.box}
      style={{
        width: maxContent ? "max-content" : "100%",
      }}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.body}>{children}</div>
    </section>
  );
}
