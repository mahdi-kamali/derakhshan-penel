import { ChangeEventHandler } from "react";

export interface IField<
  TYPE = any,
  CHANGE = ChangeEventHandler<HTMLInputElement>,
> {
  dir?: "rtl" | "ltr";
  variant?: "regular" | "dark" | "light";
  name: string;
  title: string;
  icon: React.ReactElement;
  value: TYPE;
  placeHodler?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onChange: (value: CHANGE) => void;
  validation?: {
    errorMessage: string | undefined;
  };
}
