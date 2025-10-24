import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import Icon from "../../Icon/Icon";
import Base from "../Base/Base";
import { IField } from "../field.types";

import styles from "./styles.module.scss";

interface IProps extends IField<string, ChangeEvent<HTMLInputElement>> {
  type: "text" | "password";
  lines?: number;
}

export default function Text(props: IProps) {
  const { type, placeHodler, lines, errors } = props;

  const [view, setView] = useState(false);

  const toggleView = () => {
    setView((prev) => !prev);
  };

  const [event, setEvent] = useState<ChangeEvent<HTMLInputElement>>();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEvent(event);
  };

  useEffect(() => {
    if (event === undefined) return;
    const debounce = setTimeout(() => {
      props.onChange(event);
    }, 500);

    return () => clearTimeout(debounce);
  }, [event]);

  return (
    <Base {...(props as any)}>
      <div className={styles.text}>
        {lines && (
          <textarea
            {...(props as any)}
            rows={lines}
            placeholder={placeHodler}
            onChange={onChange}
            value={event ? event.target.value : props.value}
          />
        )}

        {!lines && (
          <input
            {...(props as any)}
            type={view ? "text" : type || "text"}
            placeholder={placeHodler}
            onChange={onChange}
            value={event ? event.target.value : props.value}
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
