import { IOption } from "@/types/Variables";

import styles from "./styles.module.scss";

interface IProps {
  options: IOption[];
  onChange: (option: IOption) => void;
  editable?: boolean;
  disabled?: boolean;
  value: IOption["value"];
}

export default function Status(props: IProps) {
  const { value, options } = props;

  const option = options.find((opt) => opt.value === value);

  if (option === undefined) return <h1>موردی نا مشخص {value}</h1>;

  const statusClass = [styles.status, styles[option.variant || "success"]].join(
    " ",
  );

  return (
    <div className={statusClass}>
      <span>{option?.icon}</span>
      <span>{option?.label}</span>
    </div>
  );
}
