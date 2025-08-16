import {
  styled,
  tooltipClasses,
  TooltipProps,
  Tooltip as MUI_tooltip,
  Zoom,
} from "@mui/material";
import React from "react";

import styles from "./styles.module.scss";

interface IProps {
  label: React.ReactElement;
  popup: React.ReactElement;
  open?: boolean;
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
  const { label, popup, open = false } = props;
  return (
    <Component
      title={<div className={styles.popup}>{popup}</div>}
      placement='bottom-end'
      dir='rtl'
      arrow>
      <div className={styles.label}>{label}</div>
    </Component>
  );
};

export default Tooltip;
