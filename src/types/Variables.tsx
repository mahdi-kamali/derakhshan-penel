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

export type IOption = {
  label: string;
  variant?: IVariant;
  icon?: React.ReactElement;
} & (
  | {
      options: IOption[];
    }
  | {
      value: any;
    }
);

export const IROLE_OPTIONS: IOption[] = [
  {
    icon: <Icon icon='ep:user-filled' />,
    label: "کاربر",
    value: "User",
    variant: "primary",
  },
  {
    icon: <Icon icon='eos-icons:admin' />,
    label: "ادمین",
    value: "Admin",
    variant: "success",
  },
  {
    icon: <Icon icon='icon-park-outline:editor' />,
    label: "ویرایشگر",
    value: "ویرایشگر",
    variant: "indigo",
  },
];

export const PAGES_STATUS_OPTIONS: IOption[] = [
  {
    icon: <Icon icon='material-symbols:published-with-changes' />,
    label: "منتشر شده",
    value: "published",
    variant: "success",
  },
  {
    icon: <Icon icon='eos-icons:admin' />,
    label: "غیرفعال",
    value: "de-active",
    variant: "success",
  },
  {
    icon: <Icon icon='icon-park-outline:editor' />,
    label: "ویرایشگر",
    value: "test",
    variant: "indigo",
  },
];

export const SECTIONS_OPTIONS: IOption[] = [
  {
    label: "مشخص نشده",
    value: undefined,
    icon: <Icon icon='mdi:about' />,
    variant: "success",
  },
  {
    label: "خانه",
    icon: <Icon icon='mdi:home' />,
    variant: "indigo",
    options: [
      {
        label: "هیرو",
        value: "HOME_HERO",
        variant: "primary",
        icon: <Icon icon='mdi:view-dashboard' />,
      },
      {
        label: "رهبران",
        value: "HOME_LEADERSHIP",
        variant: "success",
        icon: <Icon icon='mdi:account-group' />,
      },
      {
        label: "درباره ما",
        value: "HOME_ABOUT_US",
        variant: "indigo",
        icon: <Icon icon='mdi:information' />,
      },
      {
        label: "بسته‌بندی پیشرفته",
        value: "HOME_ADVANCED_PACKAGING",
        variant: "warning",
        icon: <Icon icon='mdi:package-variant-closed' />,
      },
      {
        label: "جعبه‌های هدیه اختصاصی",
        value: "HOME_EXCLUSIVE_GIFT_BOXES",
        variant: "type-2",
        icon: <Icon icon='mdi:gift' />,
      },
      {
        label: "تماس و فوتر",
        value: "HOME_CONTACT_FOOTER",
        variant: "danger",
        icon: <Icon icon='mdi:phone-in-talk' />,
      },
    ],
  },
  {
    label: "درباره ما",
    value: "about-us",
    icon: <Icon icon='mdi:about' />,
    variant: "success",
    options: [
      {
        label: "درباره ما",
        value: "about-us",
        icon: <Icon icon='mdi:about' />,
        variant: "success",
      },
    ],
  },
];
