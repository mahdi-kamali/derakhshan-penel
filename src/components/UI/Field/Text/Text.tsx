import { useState } from "react";
import Icon from "../../Icon/Icon";
import Base from "../Base/Base";
import { IField } from "../field.types";

import styles from "./styles.module.scss";

interface IProps extends IField {
  type: "text" | "password";
  lines?: number;
}

export default function Text(props: IProps) {
  const { type, placeHodler, lines } = props;

  const [view, setView] = useState(false);

  const toggleView = () => {
    setView((prev) => !prev);
  };

  return (
    <Base {...props}>
      <div className={styles.text}>
        {lines && (
          <textarea
            {...(props as any)}
            rows={lines}
            placeholder={placeHodler}
          />
        )}

        {!lines && (
          <input
            {...props}
            type={view ? "text" : type}
            placeholder={placeHodler}
          />
        )}

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
