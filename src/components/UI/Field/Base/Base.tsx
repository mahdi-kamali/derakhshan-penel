import { IField } from "../field.types";

import styles from "./styles.module.scss";
import Icon from "../../Icon/Icon";
import Tooltip from "../../tooltip/Tooltip";
import { FindErrorKey } from "@/utils/validations";
import { useFormikContext } from "formik";

export interface IBaseProps extends IField {
  children?: React.ReactElement | React.ReactElement[];
}

export default function Base(props: IBaseProps) {
  const { children, icon, title, value, variant = "regular", name } = props;

  const { errors } = useFormikContext();
  const error = FindErrorKey(errors, name);

  const field = [
    styles.field,
    value && styles.value,
    value && error === undefined && styles.success,
    error && styles.danger,
    styles[`variant-${variant}`],
  ].join(" ");

  return (
    <fieldset className={field}>
      <legend className={styles.legend}>
        <span>{icon}</span>
        <span>{title}</span>
        {error && (
          <div className={styles.tooltip}>
            <Tooltip
              label={<Icon icon='line-md:alert-twotone' />}
              popup={<span>{error}</span>}
            />
          </div>
        )}
      </legend>
      <div className={styles.content}>{children}</div>
    </fieldset>
  );
}
