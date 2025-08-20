import { ReactElement } from "react";
import styles from "./styles.module.scss";

interface IProps {
  children: ReactElement;
  header: React.ReactElement;
}

export default function Box(props: IProps) {
  const { children, header } = props;
  return (
    <section className={styles.box}>
      <div className={styles.header}>{header}</div>
      <div className={styles.body}>{children}</div>
    </section>
  );
}
