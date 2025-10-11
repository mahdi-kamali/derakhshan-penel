import { useState } from "react";
import Icon from "../../Icon/Icon";
import Base from "../Base/Base";
import { IField } from "../field.types";

import styles from "./styles.module.scss";

interface IProps extends IField<string> {
  type: HTMLInputElement["type"];
}

export default function TextArea(props: IProps) {
  const { type, placeHodler } = props;

  const [view, setView] = useState(false);

  const toggleView = () => {
    setView((prev) => !prev);
  };

  return (
    <Base {...(props as any)}>
      <div className={styles.text}>
        <input
          {...(props as any)}
          type={view ? "text" : type}
          placeholder={placeHodler || ""}
        />
        <div className={styles.icons}>
          {type === "password" && !view && (
            <Icon
              icon='lsicon:view-filled'
              onClick={toggleView}
            />
          )}
          {type === "password" && view && (
            <Icon
              icon='carbon:view-off-filled'
              onClick={toggleView}
            />
          )}
        </div>
      </div>
    </Base>
  );
}
