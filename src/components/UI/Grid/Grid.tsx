import React, { CSSProperties } from "react";

import styles from "./styles.module.scss";
import Spinners from "../Spinners";

interface IProps extends CSSProperties {
  children: React.ReactElement | React.ReactElement[];
  center?: boolean;
  expanded?: boolean;
  loading?: boolean;
  type?: "flex" | "grid";
}

export default function Grid(props: IProps) {
  const {
    children,
    expanded = true,
    loading = false,
    type = "grid",
    gridTemplateColumns,
    gap,
    center = false,
  } = props;

  const grid = [
    styles.grid,
    expanded && styles.expanded,
    loading && styles.blur,
    center && styles.center,
  ].join(" ");
  const accordion = [styles.accordion].join(" ");
  const content = [
    styles.content,
    type === "flex" && styles.flex,
    type === "grid" && styles.grid,
  ].join(" ");
  const spinner = [styles.spinner, loading && styles.spinnerShow].join(" ");
  return (
    <div
      className={grid}
      style={{
        gridColumn: props.gridColumn,
      }}>
      <div className={accordion}>
        <div
          className={content}
          style={{
            ...props,
            gridTemplateColumns: gridTemplateColumns,
            gap: gap,
          }}>
          {children}
        </div>
      </div>
      <div
        className={spinner}
        key={loading ? 1 : 0}>
        <span>در حال پردازش...</span>
        <Spinners.Shade />
      </div>
    </div>
  );
}
