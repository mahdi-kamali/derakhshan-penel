import { IOption } from "@/types/Variables";
import { ReactElement } from "react";

type Base<T> = {
  headerName: string;
  field: keyof T;
  minWidth?: number;
  cellRenderer?: (props: { data: T; value: any }) => ReactElement;
};

type SELECT<T> = {
  type: "SELECT";
  cellRendererParams: {
    OPTIONS: IOption[];
    onChange: (value: IOption, data: T) => void;
  };
} & Base<T>;

type STATUS<T> = {
  type: "STATUS";
  cellRendererParams: {
    OPTIONS: IOption[];
  };
} & Base<T>;

type DATE<T> = {
  type: "DATE";
} & Base<T>;

type TOOLTIP<T> = {
  type: "TOOLTIP";
} & Base<T>;

type ACTIONS<T> = {
  type: "ACTIONS";
} & Base<T>;

type TEXT<T> = {
  type: "TEXT";
} & Base<T>;

type IMAGE<T> = {
  type: "IMAGE";
} & Base<T>;

type TYPES<T> =
  | SELECT<T>
  | STATUS<T>
  | TOOLTIP<T>
  | DATE<T>
  | ACTIONS<T>
  | IMAGE<T>
  | TEXT<T>;

export type IColDef<T> = {} & (TYPES<T> | undefined);
