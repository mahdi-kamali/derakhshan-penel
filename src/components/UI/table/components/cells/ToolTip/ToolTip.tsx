"use client";

import { IVariant } from "@/types/Variables";
import Tippy from "@tippyjs/react";
import { ReactElement } from "react";
import "tippy.js/dist/tippy.css";

import styles from "./styles.module.scss";
import Cell from "../Cell";

interface IProps {
  label: string;
  content: ReactElement;
  variant: IVariant;
  icon: ReactElement;
}

export const ToolTip = (props: IProps) => {
  const { content, label, variant, icon } = props;

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
        placement='bottom'
        content={content}>
        {Label()}
      </Tippy>
    </Cell.Container>
  );
};

export default ToolTip;
