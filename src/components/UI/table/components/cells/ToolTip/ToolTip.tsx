"use client";

import { IVariant } from "@/types/Variables";
import Tippy from "@tippyjs/react";
import { ReactElement } from "react";
import "tippy.js/dist/tippy.css";

import styles from "./styles.module.scss";
import Cell from "../Cell";

export interface IToolTipProps {
  label: string;
  children: ReactElement | ReactElement[];
  variant: IVariant;
  icon: ReactElement;
}

export const ToolTip = (props: IToolTipProps) => {
  const { children, label, variant, icon } = props;

  const Label = () => {
    const classs = [styles.label, styles[variant]].join(" ");
    return (
      <div className={classs}>
        {label}
        {icon}
      </div>
    );
  };

  return (
    <Cell.Container>
      <Tippy
      className={styles.popup}
        placement='bottom'
        content={children}>
        {Label()}
      </Tippy>
    </Cell.Container>
  );
};

export default ToolTip;
