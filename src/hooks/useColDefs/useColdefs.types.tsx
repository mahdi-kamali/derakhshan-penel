import { IOption } from "@/types/Variables";
import { ColDef } from "ag-grid-community";
import { ReactElement } from "react";

type Base<T, F extends ColDef<T>["field"] = ColDef<T>["field"]> = {
  headerName: string;
  field: F;
  minWidth?: number;
  cellRenderer?: (props: {
    data: T;
    value: F extends keyof T ? T[F] : any; // match top-level fields
  }) => ReactElement;
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
  exportRender?: ({ value }: { value: any }) => ReactElement;
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

type SWITCH<T> = {
  type: "SWITCH";
  cellRendererParams: {
    onChange: (value: boolean, data: T) => void;
  };
} & Base<T>;

type TYPES<T> =
  | SELECT<T>
  | STATUS<T>
  | TOOLTIP<T>
  | DATE<T>
  | ACTIONS<T>
  | IMAGE<T>
  | TEXT<T>
  | SWITCH<T>;

export type IColDef<T> = {} & (TYPES<T> | undefined);
