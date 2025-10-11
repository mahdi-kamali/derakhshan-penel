import RcSelect, { components } from "react-select";

import styles from "./styles.module.scss";
const Option = (props: any) => {
  const { data, isSelected } = props;
  const className = [
    styles.option,
    styles[`variant--${data.variant}`],
    isSelected && styles.selected,
  ].join(" ");

  return (
    <components.Option {...props}>
      <div className={className}>
        <span>{props.data.icon}</span>
        <span>{props.data.label}</span>
      </div>
    </components.Option>
  );
};

export default Option;
