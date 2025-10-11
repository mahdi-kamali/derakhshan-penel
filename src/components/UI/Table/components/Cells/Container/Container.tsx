import { CSSProperties, ReactElement } from "react";
import styles from "./styles.module.scss";

interface IProps extends CSSProperties {
  children: React.ReactElement | ReactElement[];
}

export default function Container(props: IProps) {
  const { children } = props;
  return (
    <div
      className={styles.container}
      style={{ ...props }}>
      {children}
    </div>
  );
}
