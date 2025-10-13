import { IOption } from "@/types/Variables";
import { IField } from "../field.types";
import RcSelect from "react-select";
import Base from "../Base/Base";
import Option from "./Option/Option";
import GroupHeading from "./GroupHeading/GroupHeading";
import Group from "./Group/Group";
import styles from "./styles.module.scss";
import { useEffect } from "react";

interface IProps extends IField<IOption["value"], IOption> {
  options: IOption[];
}

export default function Select(props: IProps) {
  const { options, onChange } = props;

  const allOptions: IOption[] = [];




  const findChilds = (option: IOption) => {
    if (option.type !== "parent") return [];

    const temp: IOption[] = [];
    option.options.forEach((child) => {
      if (child.type === "child") temp.push(child);
      if (child.type === "parent") {
        findChilds(child)?.forEach((opt) => temp.push(opt));
      }
    });
    return temp;
  };

  options.map((option) => {
    if (option.type === "parent") {
      allOptions.push(...findChilds(option));
    }
    if (option.type === "child") {
      allOptions.push(option);
    }
    if (option.type === "none") {
      allOptions.push(option);
    }
  });

  const opt = allOptions.find((option) => {
    return option.value === props.value ;
  });



  return (
    <Base
      {...props as any}
      onChange={(value: any) => onChange(value)}>
      <RcSelect
        options={options}

        value={opt}
        isDisabled={props.disabled}
        onChange={onChange as any}
        menuPortalTarget={document.querySelector("body")}
        placeholder='انتخاب کنید..'
        components={{
          Option,
          Group,
          GroupHeading: GroupHeading as any,
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
