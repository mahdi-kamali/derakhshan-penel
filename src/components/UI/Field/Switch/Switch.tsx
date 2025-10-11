import { ChangeEvent, ChangeEventHandler, useState } from "react";
import Icon from "../../Icon/Icon";
import Base from "../Base/Base";
import { IField } from "../field.types";

import { Switch as MUISwitch } from "@mui/material";
import styles from "./styles.module.scss";

interface IProps extends IField<boolean, ChangeEvent<HTMLInputElement>> {
  lines?: number;
}

export default function Switch(props: IProps) {
  const { title, name, onChange } = props;

  return (
    <Base {...(props as any)}>
      <label className={styles.text}>
        <MUISwitch
          name={name}
          onChange={(event) => {
            onChange(event);
          }}
        />
        <span>{title}</span>
      </label>
    </Base>
  );
}
