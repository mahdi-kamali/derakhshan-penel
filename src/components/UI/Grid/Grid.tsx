import React, { CSSProperties } from "react";
import { Collapse } from "react-collapse";
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
    width = "100%",
  } = props;

  const grid = [
    styles.grid,
    expanded && styles.expanded,
    loading && styles.blur,
    center && styles.center,
  ].join(" ");

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
        width,
        position: "relative",
      }}>
      <Collapse isOpened={expanded}>
        <div
          className={content}
          style={{
            ...props,
            gridTemplateColumns,
            gap,
          }}>
          {children}
        </div>
      </Collapse>

      {/* Loading overlay */}
      {loading && (
        <div
          className={spinner}
          key={loading ? 1 : 0}>
          <span>در حال پردازش...</span>
          <Spinners.Shade />
        </div>
      )}
    </div>
  );
}
