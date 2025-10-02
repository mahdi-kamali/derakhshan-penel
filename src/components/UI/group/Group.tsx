import { CSSProperties, ReactElement } from "react";

import styles from "./styles.module.scss";
import { IVariant } from "@/types/Variables";

interface IProps extends CSSProperties {
  children: any;
  header: string;
  footer?: ReactElement;
  variant?: IVariant;
}

export default function Group(props: IProps) {
  const { children, header, variant = "indigo", footer = <></> } = props;

  const RenderChildren = () => {
    const childrens = children as ReactElement[];

    const isArray = Array.isArray(children);
    if (isArray===false) return children;
    return childrens.map((child) => (
      <div
        className={styles.child}
        key={child.key}>
        {child}
      </div>
    ));
  };

  const groupClass = [styles.group, styles[variant]].join(" ");

  return (
    <div className={groupClass}>
      <div className={styles.header}>{header}</div>
      <div
        className={styles.body}
        style={props}>
        {RenderChildren()}
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );
}
