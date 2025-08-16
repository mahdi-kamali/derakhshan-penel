import { IField } from "../field.types";

import styles from "./styles.module.scss";
import Icon from "../../Icon/Icon";
import Tooltip from "../../tooltip/Tooltip";

export interface IBaseProps extends IField {
  children?: React.ReactElement ;
}

export default function Base(props: IBaseProps) {
  const { children, icon, title, value, validation } = props;

  const field = [
    styles.field,
    value && styles.value,
    value && validation?.errorMessage === undefined && styles.success,
    validation?.errorMessage && styles.danger,
  ].join(" ");

  return (
    <fieldset className={field}>
      <legend className={styles.legend}>
        <span>{icon}</span>
        <span>{title}</span>
        {validation?.errorMessage && (
          <div className={styles.tooltip}>
            <Tooltip
              label={<Icon icon='line-md:alert-twotone' />}
              popup={<span>{validation?.errorMessage}</span>}
            />
          </div>
        )}
      </legend>
      <div className={styles.content}>{children}</div>
    </fieldset>
  );
}
