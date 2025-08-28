import { ChangeEventHandler } from "react";

export interface IField {
  dir?: "rtl" | "ltr";
  variant?: "regular" | "dark" | "light";
  name: string;
  title: string;
  icon: React.ReactElement;
  value: any;
  placeHodler?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  validation?: {
    errorMessage: string | undefined;
  };
}
