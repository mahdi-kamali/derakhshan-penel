import {
  styled,
  tooltipClasses,
  TooltipProps,
  Tooltip as MUI_tooltip,
  Zoom,
} from "@mui/material";
import React, { CSSProperties } from "react";

import styles from "./styles.module.scss";

interface IProps {
  label: React.ReactElement;
  popup: React.ReactElement;
  open?: boolean;
  otherStyles?: {
    label?: CSSProperties;
    popup?: CSSProperties;
  };
}

const Component = styled(({ className, ...props }: TooltipProps) => (
  <MUI_tooltip
    {...props}
    dir='rtl'
    slots={{
      transition: Zoom,
    }}
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "transparent",
    padding: "0",
  },
}));

export const Tooltip = (props: IProps) => {
  const {
    label,
    popup,
    open = false,
    otherStyles = { label: {}, popup: {} },
  } = props;
  return (
    <Component
      title={
        <div
          className={styles.popup}
          style={{ ...props.otherStyles?.popup }}>
          {popup}
        </div>
      }
      placement='bottom-end'
      dir='rtl'
      arrow>
      <div
        className={styles.label}
        style={{ ...props.otherStyles?.label }}>
        {label}
      </div>
    </Component>
  );
};

export default Tooltip;
