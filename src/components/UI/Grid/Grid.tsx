import React, { CSSProperties } from "react";

import styles from "./styles.module.scss";
import Spinners from "../Spinners";

interface IProps extends CSSProperties {
  children: React.ReactElement | React.ReactElement[];
  center?: boolean;
  expanded?: boolean;
  loading?: boolean;
}

export default function Grid(props: IProps) {
  const {
    children,
    flexDirection = "flex",
    center,
    expanded = true,
    loading = false,
    gap = "1rem",
    gridTemplateColumns = "unset",
  } = props;
  const contentClass = [styles.content, loading && styles.blur].join(" ");
  const gridClass = [styles.grid, expanded && styles.expanded].join(" ");
  const spinnerClass = [styles.spinner, loading && styles.spinnerShow].join(
    " ",
  );
  return (
    <div
      className={gridClass}
      style={{
        ...props,
        gridTemplateColumns: "unset",
      }}>
      <div
        className={contentClass}
        style={{
          gridTemplateColumns: gridTemplateColumns,
          gap: gap,
        }}>
        {children}
      </div>
      <div
        className={spinnerClass}
        key={loading ? 1 : 0}>
        <span>در حال پردازش...</span>
        <Spinners.Shade />
      </div>
    </div>
  );
}
