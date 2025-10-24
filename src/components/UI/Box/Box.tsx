import { CSSProperties, ReactElement } from "react";
import styles from "./styles.module.scss";
import Icon from "../Icon/Icon";

interface IProps {
  children: ReactElement;
  header?: React.ReactElement | string;
  maxContent?: boolean;
  width?: CSSProperties["width"];
}

export default function Box(props: IProps) {
  const { children, header, maxContent = false, width } = props;
  return (
    <fieldset
      className={styles.box}
      style={{
        width: width ? width : "max-content",
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
