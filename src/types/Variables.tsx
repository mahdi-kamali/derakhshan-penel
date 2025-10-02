import Icon from "@/components/UI/Icon/Icon";
import { ISection } from "./Pages/Sections/Sections.types";
import {
  CONTACT_US_STATUS_ENUM,
  IContactUs,
} from "./Contact-us/Contact_us.types";

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

export type IOption<VALUE = any> = {
  label: string;
  variant?: IVariant;
  icon?: React.ReactElement;
} & (
  | {
      type: "parent";
      options: IOption<VALUE>[];
      value?: VALUE;
    }
  | {
      type: "child";
      value: VALUE;
    }
  | {
      type: "none";
      value: undefined;
    }
);

export const IROLE_OPTIONS: IOption[] = [
  {
    icon: <Icon icon='ep:user-filled' />,
    label: "کاربر",
    value: "User",
    variant: "primary",
    type: "child",
  },
  {
    icon: <Icon icon='eos-icons:admin' />,
    label: "ادمین",
    value: "Admin",
    variant: "success",
    type: "child",
  },
  {
    icon: <Icon icon='icon-park-outline:editor' />,
    label: "ویرایشگر",
    value: "ویرایشگر",
    variant: "indigo",
    type: "child",
  },
];
export const ICAREER_IS_ACTIVE: IOption[] = [
  {
    icon: <Icon icon='codicon:vm-active' />,
    label: "فعال",
    value: true,
    variant: "success",
    type: "child",
  },
  {
    icon: <Icon icon='ep:user-filled' />,
    label: "غیرفعال",
    value: false,
    variant: "danger",
    type: "child",
  },
];

export const ICAREER_TYPES: IOption[] = [
  {
    icon: <Icon icon='material-symbols:folder-special' />,
    label: "ویژه",
    value: "SPECIAL",
    variant: "primary",
    type: "child",
  },
  {
    icon: <Icon icon='octicon:screen-normal-16' />,
    label: "عادی",
    value: "NORMAL",
    variant: "success",
    type: "child",
  },
];

export const PAGES_STATUS_OPTIONS: IOption[] = [
  {
    icon: <Icon icon='material-symbols:published-with-changes' />,
    label: "منتشر شده",
    value: "published",
    variant: "success",
    type: "child",
  },
  {
    icon: <Icon icon='eos-icons:admin' />,
    label: "غیرفعال",
    value: "de-active",
    variant: "success",
    type: "child",
  },
  {
    icon: <Icon icon='icon-park-outline:editor' />,
    label: "ویرایشگر",
    value: "test",
    variant: "indigo",
    type: "child",
  },
];

export const CONTACT_US_STATUS_OPTIONS: IOption<CONTACT_US_STATUS_ENUM>[] = [
  {
    icon: <Icon icon='material-symbols:published-with-changes' />,
    label: "پاسخ داده شده",
    value: CONTACT_US_STATUS_ENUM.CLOSED,
    variant: "success",
    type: "child",
  },
  {
    icon: <Icon icon='material-symbols:notifications-active' />,
    label: "پاسخ داده نشده",
    value: CONTACT_US_STATUS_ENUM.OPEN,
    variant: "success",
    type: "child",
  },
];

export const SECTIONS_OPTIONS: IOption<ISection["type"]>[] = [
  {
    label: "مشخص نشده",
    value: undefined,
    icon: <Icon icon='mdi:about' />,
    variant: "success",
    type: "none",
  },
  {
    label: "خانه",
    icon: <Icon icon='mdi:home' />,
    variant: "indigo",
    type: "parent",
    options: [
      {
        label: "هیرو",
        value: "HOME_HERO",
        variant: "primary",
        icon: <Icon icon='mdi:view-dashboard' />,
        type: "child",
      },
      {
        label: "رهبران",
        value: "HOME_LEADERSHIP",
        variant: "success",
        icon: <Icon icon='mdi:account-group' />,
        type: "child",
      },
      {
        label: "درباره ما",
        value: "HOME_ABOUT_US",
        variant: "indigo",
        icon: <Icon icon='mdi:information' />,
        type: "child",
      },
      {
        label: "بسته‌بندی پیشرفته",
        value: "HOME_ADVANCED_PACKAGING",
        variant: "warning",
        icon: <Icon icon='mdi:package-variant-closed' />,
        type: "child",
      },
      {
        label: "جعبه‌های هدیه اختصاصی",
        value: "HOME_EXCLUSIVE_GIFT_BOXES",
        variant: "type-2",
        icon: <Icon icon='mdi:gift' />,
        type: "child",
      },
      {
        label: "تماس و فوتر",
        value: "HOME_CONTACT_FOOTER",
        variant: "danger",
        icon: <Icon icon='mdi:phone-in-talk' />,
        type: "child",
      },
    ],
  },
  {
    label: "درباره ما",
    icon: <Icon icon='mdi:about' />,
    variant: "success",
    type: "parent",
    options: [
      {
        label: "درباره ما",
        value: "ABOUT_US_MAIN",
        icon: <Icon icon='mdi:about' />,
        variant: "success",
        type: "child",
      },
    ],
  },
  {
    label: "شغلی",
    icon: <Icon icon='hugeicons:job-search' />,
    variant: "success",
    type: "parent",
    options: [
      {
        label: "هیرو",
        value: "CAREERS_HERO",
        icon: <Icon icon='tabler:article-filled' />,
        variant: "warning",
        type: "child",
      },
      {
        label: "شغل ها",
        value: "CAREERS_JOBS",
        icon: <Icon icon='hugeicons:job-search' />,
        variant: "success",
        type: "child",
      },
    ],
  },
  {
    label: "تماس با ما",
    type: "parent",
    icon: <Icon icon='bxs:contact' />,
    variant: "warning",
    options: [
      {
        label: "اطلاعات شرکت",
        type: "child",
        value: "CONTACT_US",
        icon: <Icon icon='si:info-fill' />,
        variant: "warning",
      },
    ],
  },
];
