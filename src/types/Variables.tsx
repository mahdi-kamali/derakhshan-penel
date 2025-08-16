import Icon from "@/components/UI/Icon/Icon";

export type IVariant =
  | "success"
  | "type-2"
  | "primary"
  | "type-4"
  | "light"
  | "danger"
  | "warning"
  | "panel-list-item"
  | "indigo";

export type ISize = "normal" | "large" | "small" | "xLarge" | "xSmall";

export interface IOption {
  lable: string;
  value: any;
  variant: IVariant;
  icon: React.ReactElement;
}

export const IROLE_OPTIONS = [
  {
    icon: <Icon icon='ep:user-filled' />,
    lable: "کاربر",
    value: "User",
    variant: "primary",
  },
  {
    icon: <Icon icon='eos-icons:admin' />,
    lable: "ادمین",
    value: "Admin",
    variant: "success",
  },
  {
    icon: <Icon icon='icon-park-outline:editor' />,
    lable: "ویرایشگر",
    value: "ویرایشگر",
    variant: "indigo",
  },
];
