import { ChangeEventHandler } from "react";

export interface IField {
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
