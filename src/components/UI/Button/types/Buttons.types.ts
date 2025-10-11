import { IVariant } from "@/types/Variables";
import React, { CSSProperties } from "react";

type IDisable =
  | boolean
  | {
      disable: boolean;
      toltip?: string;
    };

type ITypeButtons = {
  type: "button";
  // onClick?: () => void;
};

type ITypeLink = {
  type: "link";
  href: string;
  test: string;
};

type ITypeSubmit = {
  type: "submit";
};

type IBase = {} & (ITypeButtons | ITypeLink | ITypeSubmit);

export type IButtonProps = {
  title?: string;
  icon?: JSX.Element;
  variant: IVariant;
  onClick?: () => void;
  disabled?: IDisable;
  isLoading?: boolean;
  style?: CSSProperties;
  className?: string;
  children?: React.ReactElement;
  elementType?: React.JSX.Element;
} & IBase;
