import { IOption } from "@/types/Variables";
import { IField } from "../field.types";
import RcSelect from "react-select";
import Base from "../Base/Base";
import Option from "./Option/Option";
import GroupHeading from "./GroupHeading/GroupHeading";
import Group from "./Group/Group";
import styles from "./styles.module.scss";

// @ts-ignore
interface IProps extends IField {
  options: IOption[];
  onChange: (value: IOption & { value: any }) => void;
}

export default function Select(props: IProps) {
  const { options, onChange } = props;

  return (
    <Base
      {...props}
      onChange={(value: any) => onChange(value)}>
      <RcSelect
        options={options}
        onChange={onChange as any}
        menuPortalTarget={document.querySelector("body")}
        placeholder='انتخاب کنید..'
        components={{
          Option,
          Group,
          GroupHeading,
        }}
        classNames={{
          container: () => styles.container,
          control: () => styles.control,
          menu: () => styles.menu,
          placeholder: () => styles.placeholder,
        }}
        styles={{
          option(base, props) {
            return { all: "unset" };
          },
        }}
      />
    </Base>
  );
}
