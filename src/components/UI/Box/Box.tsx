"use client";
import { ISize, IVariant } from "@/types/Variables";
import styles from "./styles.module.scss";
import { CSSProperties } from "react";

import { Flex, Spinners } from "@/components/UI/index";

export interface IBoxProps {
  children?: JSX.Element | JSX.Element[] | React.ReactElement;
  header: string;
  icon?: JSX.Element;
  border?: {
    thickness?: ISize;
    variant?: IVariant | "default";
  };
  isFieldSet?: boolean;
  fontSize?: {
    header?: ISize;
  };
  style?: CSSProperties;
  legend?: {
    style?: CSSProperties;
    component?: JSX.Element | JSX.Element[];
  };
  isLoading?: boolean;
}

export default function Box({
  children,
  header,
  icon,
  border = {
    thickness: "small",
    variant: "default",
  },
  isFieldSet = false,
  fontSize = {
    header: "normal",
  },
  style = {},
  legend,
  isLoading = false,
}: IBoxProps) {
  const getBorderSize = () => {
    switch (border.thickness) {
      case "small":
        return "1px";
      case "normal":
        return "2px";
      default:
        return "1px";
    }
  };

  const getVarient = () => {
    switch (border.variant) {
      case "light":
        return "var(--color-light)";
      case "success":
        return "var(--color-2)";
      default:
        return "";
    }
  };

  const getFontSize = () => {
    switch (fontSize.header) {
      case "small":
        return "0.8rem";
      case "normal":
        return "1rem";
      default:
        return "";
    }
  };

  const getClass = () => {
    const classs = [styles.box, isLoading && styles.loading];

    return classs.join(" ");
  };

  return (
    <fieldset
      className={getClass()}
      style={{
        borderWidth: getBorderSize(),
        borderColor: getVarient(),
        ...style,
      }}>
      {isFieldSet && (
        <legend
          style={{
            fontSize: getFontSize(),
            color: "var(--color-dark-1)",
            ...legend?.style,
          }}
          className={styles.legendFielSet}>
          <Flex
            alignItems='center'
            gap='0.25rem'>
            {icon}
            <span>{header}</span>
          </Flex>
          {legend?.component}
        </legend>
      )}

      {!isFieldSet && (
        <div
          className={`${styles.header}`}
          style={{ fontSize: getFontSize(), ...legend?.style }}>
          {icon}
          <span>{header}</span>
        </div>
      )}

      <div className={styles.content}>{children}</div>
      {isLoading && (
        <div className={styles.OverLay}>
          <Spinners.Shade />
        </div>
      )}
    </fieldset>
  );
}
