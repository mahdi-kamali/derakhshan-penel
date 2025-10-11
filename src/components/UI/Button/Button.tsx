import { IButtonProps } from "./types/Buttons.types";

import styles from "./styles.module.scss";
import Link from "next/link";
import Icon from "../Icon/Icon";
import React from "react";

export default function Button(props: IButtonProps) {
  const {
    title,
    variant,
    icon,
    disabled = false,
    isLoading = false,
    onClick = () => {},
    style = {},
    type,
    className,
    children,
  } = props;

  const getClass = () => {
    const classs = [
      styles.button,
      styles[variant],
      className,
      (isLoading || disabled) && styles.disabled,
    ];

    return classs.join(" ");
  };

  if (type === "link") {
    const { href } = props;
    return (
      <Link
        className={`${styles.button} ${styles[variant]}`}
        onClick={onClick}
        style={style}
        href={href}>
        {icon}
        <span>{title}</span>
      </Link>
    );
  }

  return (
    <button
      className={getClass()}
      onClick={onClick}
      disabled={!!disabled || false}
      style={style}
      type={type}>
      {isLoading ? <Icon icon='eos-icons:loading' /> : icon}
      <span>{title}</span>
      {children}
    </button>
  );
}
