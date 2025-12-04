import Icon from "@/components/UI/Icon/Icon";
import { ISection } from "./Pages/Sections/Sections.types";
import {
  CONTACT_US_STATUS_ENUM,
  IContactUs,
} from "./Contact-us/Contact_us.types";
import { INDUSTRY_ENUM, IOrder } from "./Orders/Orders.types";

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

export const ORDERS_INDUSTRY_OPTIONS: IOption<IOrder["industry"]>[] = [
  {
    icon: <Icon icon='mdi:package-variant' />,
    label: "صنایع بهداشتی",
    value: INDUSTRY_ENUM.HELTHCARE,
    variant: "primary",
    type: "child",
  },
  {
    icon: <Icon icon='mdi:food' />,
    label: "صنایع غذایی",
    value: INDUSTRY_ENUM.FOOD,
    variant: "success",
    type: "child",
  },
  {
    icon: <Icon icon='mdi:lipstick' />,
    label: "صنایع آرایشی",
    value: INDUSTRY_ENUM.COSMETICS,
    variant: "warning",
    type: "child",
  },
  {
    icon: <Icon icon='mdi:office-building' />,
    label: "سایر",
    value: INDUSTRY_ENUM.OTHER,
    variant: "type-2",
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
  {
    label: "سفارشات",
    type: "parent",
    icon: <Icon icon='lsicon:order-edit-filled' />,
    variant: "warning",
    options: [
      {
        label: "ثبت سفارش",
        type: "child",
        value: "ORDER",
        icon: <Icon icon='lsicon:order-edit-filled' />,
        variant: "indigo",
      },
    ],
  },
  {
    label: "خدمات",
    type: "parent",
    icon: <Icon icon='grommet-icons:services' />,
    variant: "type-4",
    options: [
      {
        label: "پیش از چاپ",
        type: "child",
        value: "PREE_PRESS",
        icon: <Icon icon='lsicon:order-edit-filled' />,
        variant: "success",
      },
      {
        label: "خدمات چاپی",
        type: "child",
        value: "PRESS",
        icon: <Icon icon='lsicon:order-edit-filled' />,
        variant: "warning",
      },
      {
        label: "خدمات پس از چاپ",
        type: "child",
        value: "POST_PRESS",
        icon: <Icon icon='lsicon:order-edit-filled' />,
        variant: "indigo",
      },
    ],
  },
];

export const EDUCATIONS_OPTIONS: IOption<string>[] = [
  {
    type: "child",
    label: "سیکل",
    value: "middle_school",
    icon: <Icon icon='mdi:school-outline' />,
    variant: "light",
  },
  {
    type: "child",
    label: "دیپلم",
    value: "high_school",
    icon: <Icon icon='mdi:school' />,
    variant: "primary",
  },
  {
    type: "child",
    label: "فوق دیپلم",
    value: "associate_degree",
    icon: <Icon icon='mdi:book-open-page-variant' />,
    variant: "primary",
  },
  {
    type: "child",
    label: "لیسانس",
    value: "bachelor",
    icon: <Icon icon='mdi:graduation-cap' />,
    variant: "success",
  },
  {
    type: "child",
    label: "فوق لیسانس",
    value: "master",
    icon: <Icon icon='mdi:school-graduate' />,
    variant: "success",
  },
  {
    type: "child",
    label: "دکترا",
    value: "phd",
    icon: <Icon icon='mdi:school' />,
    variant: "indigo",
  },
];

export const LEVELS_OPTIONS: IOption<string>[] = [
  {
    type: "child",
    label: "کم",
    value: "LOW",
    icon: <Icon icon='mdi:arrow-down-bold' />,
    variant: "light",
  },
  {
    type: "child",
    label: "متوسط",
    value: "MEDIUM",
    icon: <Icon icon='mdi:arrow-right-bold' />,
    variant: "warning",
  },
  {
    type: "child",
    label: "زیاد",
    value: "HIGH",
    icon: <Icon icon='mdi:arrow-up-bold' />,
    variant: "success",
  },
  {
    type: "child",
    label: "خیلی زیاد",
    value: "VERY_HIGH",
    icon: <Icon icon='mdi:arrow-up-bold-circle' />,
    variant: "success",
  },
  {
    type: "child",
    label: "خیلی کم",
    value: "VERY_LOW",
    icon: <Icon icon='mdi:arrow-down-bold-circle' />,
    variant: "danger",
  },
];

export const MARITAL_STATUS_OPTIONS: IOption<string>[] = [
  {
    type: "child",
    label: "مجرد",
    value: "single",
    icon: <Icon icon='mdi:account' />,
    variant: "primary",
  },
  {
    type: "child",
    label: "متاهل",
    value: "married",
    icon: <Icon icon='mdi:account-group' />,
    variant: "success",
  },
];

export const MILITARY_STATUS_OPTIONS: IOption<string>[] = [
  {
    type: "child",
    label: "مشمول",
    value: "draft",
    icon: <Icon icon='mdi:clipboard-text' />,
    variant: "warning",
  },
  {
    type: "child",
    label: "معاف",
    value: "exempt",
    icon: <Icon icon='mdi:shield-check' />,
    variant: "success",
  },
  {
    type: "child",
    label: "غیبت",
    value: "absence",
    icon: <Icon icon='mdi:account-off' />,
    variant: "danger",
  },
  {
    type: "child",
    label: "پایان خدمت",
    value: "completed",
    icon: <Icon icon='mdi:check-circle' />,
    variant: "success",
  },
  {
    type: "child",
    label: "در حال خدمت",
    value: "serving",
    icon: <Icon icon='mdi:account-military' />,
    variant: "primary",
  },
  {
    type: "child",
    label: "معافیت تحصیلی",
    value: "education-exempt",
    icon: <Icon icon='mdi:book' />,
    variant: "indigo",
  },
  {
    type: "child",
    label: "معافیت پزشکی",
    value: "medical-exempt",
    icon: <Icon icon='mdi:hospital-box' />,
    variant: "danger",
  },
];

export const BOOLEAN_OPTIONS: IOption<string>[] = [
  {
    type: "child",
    label: "دارم",
    value: "true",
    icon: <Icon icon='mdi:check-circle' />,
    variant: "success",
  },
  {
    type: "child",
    label: "بله",
    value: "yes",
    icon: <Icon icon='mdi:check-circle' />,
    variant: "success",
  },
  {
    type: "child",
    label: "نخیر",
    value: "no",
    icon: <Icon icon='mdi:close-circle' />,
    variant: "danger",
  },
  {
    type: "child",
    label: "ندارم",
    value: "false",
    icon: <Icon icon='mdi:close-circle' />,
    variant: "danger",
  },
];
