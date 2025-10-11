import { IOption } from "@/types/Variables";
import SelectComponent, { components } from "react-select";

interface IProps {
  options: IOption[];
  onChange: (value: IOption) => void;
  disabled?: boolean;
  value: any;
}

export default function Select(props: IProps) {
  const { onChange, options, disabled, value } = props;

  const getValue = () => {
    if (value.label) return value;

    const target = options.find((opt) => opt.value === value);
    return target;
  };

  // custom renderer for dropdown options
  const Option = (optionsProps: any) => {
    const { variant } = optionsProps.data as IOption;

    return (
      <components.Option {...optionsProps}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "0.5em",
            color: "black",
            marginTop: "0.5rem",
          }}>
          {optionsProps.data.icon && optionsProps.data.icon}
          {optionsProps.data.label}
        </div>
      </components.Option>
    );
  };

  return (
    <SelectComponent
      value={getValue()}
      onChange={onChange}
      options={options}
      isDisabled={disabled}
      menuPortalTarget={document.body}
      placeholder={"انتخاب کنید"}
      isSearchable={false}
      components={{
        Option: Option,
      }}
      styles={{
        control: (base) => ({
          ...base,
          height: 32,
          minWidth: 150,
        }),
        valueContainer: (base) => ({
          ...base,
          padding: "0 0.5em",
          height: "100%",
        }),
        placeholder(base, props) {
          return {
            ...base,
            marginRight: "1em",
          };
        },
        indicatorsContainer: (base) => ({
          ...base,
          padding: 0,
          height: "100%",
        }),
        input: (base) => ({
          ...base,
          margin: 0,
          padding: 0,
          paddingRight: "1em",
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: "white",
          color: "black",
          fontSize: "0.8rem",
          padding: "0.5em",
          paddingTop: "0",
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused ? "red" : "transparent",
          fontSize: "0.8rem",
          padding: 0,
          borderRadius: "0.25rem",
        }),
      }}
    />
  );
}
