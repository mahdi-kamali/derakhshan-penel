import { ReactElement } from "react";
import styles from "./styles.module.scss";
import Icon from "../Icon/Icon";

interface IProps {
  children: ReactElement;
  header?: React.ReactElement | string;
  maxContent?: boolean;
}

export default function Box(props: IProps) {
  const { children, header, maxContent = false } = props;
  return (
    <fieldset
      className={styles.box}
      style={{
        width: maxContent ? "max-content" : "100%",
      }}>
      {header && (
        <legend className={styles.header}>
          <Icon icon='icon-park-outline:left' />
          <span>{header}</span>
        </legend>
      )}
      <div className={styles.body}>{children}</div>
    </fieldset>
  );
}
