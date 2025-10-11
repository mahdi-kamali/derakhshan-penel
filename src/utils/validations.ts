import { string, object, boolean, array } from "yup";
import get from "lodash/get";

/* ------------------------- AUTH ------------------------- */
const AUTH = {
  LOGIN: object({
    phone: string()
      .required("شماره تلفن الزامی است")
      .matches(/^09\d{9}$/, "شماره تلفن معتبر نیست"),
    password: string().required("رمز عبور الزامی است"),
  }),
};

/* ------------------------- PAGE.SECTIONS ------------------------- */
const PAGE = {
  SECTIONS: {
    UNSET: object().shape({
      name: string().required("نام الزامی است"),
      type: string().required("نوع الزامی است"),
      isActive: boolean().required("فعال بودن الزامی است"),
    }),

    HOME_HERO: object().shape({
      name: string().required("نام الزامی است"),
      type: string().required("نوع الزامی است"),
      components: object().shape({
        EN: object({
          logo: object().required("فیلد logo (EN) الزامی است"),
          tagline: string().required("فیلد tagline (EN) الزامی است"),
          experience: string().required("فیلد experience (EN) الزامی است"),
        }),
        FA: object({
          logo: object().required("فیلد logo (FA) الزامی است"),
          tagline: string().required("فیلد tagline (FA) الزامی است"),
          experience: string().required("فیلد experience (FA) الزامی است"),
        }),
      }),
      isActive: boolean().required("فعال بودن الزامی است"),
    }),

    HOME_LEADERSHIP: object().shape({
      name: string().required("نام الزامی است"),
      type: string().required("نوع الزامی است"),
      components: object().shape({
        EN: object({
          founder: string().required("موسس (EN) الزامی است"),
          deputyCEO: string().required("معاون مدیرعامل (EN) الزامی است"),
          ceo: string().required("مدیرعامل (EN) الزامی است"),
        }),
        FA: object({
          founder: string().required("موسس (FA) الزامی است"),
          deputyCEO: string().required("معاون مدیرعامل (FA) الزامی است"),
          ceo: string().required("مدیرعامل (FA) الزامی است"),
        }),
      }),
      isActive: boolean().required("فعال بودن الزامی است"),
    }),

    HOME_ABOUT_US: object().shape({
      name: string().required("نام الزامی است"),
      type: string().required("نوع الزامی است"),
      components: object().shape({
        EN: object({
          title: string().required("فیلد title (EN) الزامی است"),
          description: string().required("فیلد description (EN) الزامی است"),
          agents: array()
            .of(
              object({
                name: string().required("نام نماینده (EN) الزامی است"),
                role: string().required("نقش نماینده (EN) الزامی است"),
                image: object().required("تصویر نماینده (EN) الزامی است"),
              }),
            )
            .min(1, "حداقل یک نماینده (EN) الزامی است"),
        }),
        FA: object({
          title: string().required("فیلد title (FA) الزامی است"),
          description: string().required("فیلد description (FA) الزامی است"),
          agents: array()
            .of(
              object({
                name: string().required("نام نماینده (FA) الزامی است"),
                role: string().required("نقش نماینده (FA) الزامی است"),
                image: object().required("تصویر نماینده (FA) الزامی است"),
              }),
            )
            .min(1, "حداقل یک نماینده (FA) الزامی است"),
        }),
      }),
      isActive: boolean().required("فعال بودن الزامی است"),
    }),

    HOME_ADVANCED_PACKAGING: object().shape({
      name: string().required("نام الزامی است"),
      type: string().required("نوع الزامی است"),
      components: object().shape({
        EN: object({
          title: string().required("فیلد title (EN) الزامی است"),
          description: string().required("فیلد description (EN) الزامی است"),
          image: object().required("تصویر (EN) الزامی است"),
        }),
        FA: object({
          title: string().required("فیلد title (FA) الزامی است"),
          description: string().required("فیلد description (FA) الزامی است"),
          image: object().required("تصویر (FA) الزامی است"),
        }),
      }),
      isActive: boolean().required("فعال بودن الزامی است"),
    }),

    HOME_EXCLUSIVE_GIFT_BOXES: object().shape({
      name: string().required("نام الزامی است"),
      type: string().required("نوع الزامی است"),
      components: object().shape({
        EN: object({
          title: string().required("فیلد title (EN) الزامی است"),
          description: string().required("فیلد description (EN) الزامی است"),
          images: array()
            .of(object().required("هر تصویر (EN) الزامی است"))
            .min(1, "حداقل یک تصویر (EN) الزامی است"),
        }),
        FA: object({
          title: string().required("فیلد title (FA) الزامی است"),
          description: string().required("فیلد description (FA) الزامی است"),
          images: array()
            .of(object().required("هر تصویر (FA) الزامی است"))
            .min(1, "حداقل یک تصویر (FA) الزامی است"),
        }),
      }),
      isActive: boolean().required("فعال بودن الزامی است"),
    }),

    HOME_CONTACT_FOOTER: object().shape({
      name: string().required("نام الزامی است"),
      type: string().required("نوع الزامی است"),
      components: object().shape({
        EN: object({
          phone: string().required("شماره تلفن (EN) الزامی است"),
          email: string().required("ایمیل (EN) الزامی است"),
          address: string().required("آدرس (EN) الزامی است"),
          workingHours: string().required("ساعات کاری (EN) الزامی است"),
          quickLinks: array().of(string()).required("لینک‌ها (EN) الزامی‌اند"),
          supportLinks: array()
            .of(string())
            .required("لینک‌های پشتیبانی (EN) الزامی‌اند"),
          socialLinks: array()
            .of(string())
            .required("لینک‌های اجتماعی (EN) الزامی‌اند"),
        }),
        FA: object({
          phone: string().required("شماره تلفن (FA) الزامی است"),
          email: string().required("ایمیل (FA) الزامی است"),
          address: string().required("آدرس (FA) الزامی است"),
          workingHours: string().required("ساعات کاری (FA) الزامی است"),
          quickLinks: array().of(string()).required("لینک‌ها (FA) الزامی‌اند"),
          supportLinks: array()
            .of(string())
            .required("لینک‌های پشتیبانی (FA) الزامی‌اند"),
          socialLinks: array()
            .of(string())
            .required("لینک‌های اجتماعی (FA) الزامی‌اند"),
        }),
      }),
      isActive: boolean().required("فعال بودن الزامی است"),
    }),

    ABOUT_US_MAIN: object().shape({
      name: string().required("نام الزامی است"),
      type: string().required("نوع الزامی است"),
      components: object().shape({
        EN: object({
          background: object().required("پس‌زمینه (EN) الزامی است"),
          agents: array().of(
            object({
              name: string().required("نام نماینده (EN) الزامی است"),
              role: string().required("نقش نماینده (EN) الزامی است"),
              image: object().required("تصویر نماینده (EN) الزامی است"),
            }),
          ),
          generations: array().of(
            object({
              title: string().required("عنوان نسل (EN) الزامی است"),
              description: string().required("توضیح نسل (EN) الزامی است"),
              image: object().required("تصویر نسل (EN) الزامی است"),
            }),
          ),
        }),
        FA: object({
          background: object().required("پس‌زمینه (FA) الزامی است"),
          agents: array().of(
            object({
              name: string().required("نام نماینده (FA) الزامی است"),
              role: string().required("نقش نماینده (FA) الزامی است"),
              image: object().required("تصویر نماینده (FA) الزامی است"),
            }),
          ),
          generations: array().of(
            object({
              title: string().required("عنوان نسل (FA) الزامی است"),
              description: string().required("توضیح نسل (FA) الزامی است"),
              image: object().required("تصویر نسل (FA) الزامی است"),
            }),
          ),
        }),
      }),
      isActive: boolean().required("فعال بودن الزامی است"),
    }),

    CAREERS_HERO: object().shape({
      name: string().required("نام الزامی است"),
      type: string().required("نوع الزامی است"),
      components: object().shape({
        EN: object({
          background: object().required("تصویر پس‌زمینه (EN) الزامی است"),
          title: object({
            marked: string().required("عنوان برجسته (EN) الزامی است"),
            text: string().required("متن عنوان (EN) الزامی است"),
          }),
          description: string().required("توضیح (EN) الزامی است"),
        }),
        FA: object({
          background: object().required("تصویر پس‌زمینه (FA) الزامی است"),
          title: object({
            marked: string().required("عنوان برجسته (FA) الزامی است"),
            text: string().required("متن عنوان (FA) الزامی است"),
          }),
          description: string().required("توضیح (FA) الزامی است"),
        }),
      }),
      isActive: boolean().required("فعال بودن الزامی است"),
    }),

    CAREERS_JOBS: object().shape({
      name: string().required("نام الزامی است"),
      type: string().required("نوع الزامی است"),
      components: object({
        EN: object({
          jobs: array().required("لیست شغل‌ها (EN) الزامی است"),
        }),
        FA: object({
          jobs: array().required("لیست شغل‌ها (FA) الزامی است"),
        }),
      }),
      isActive: boolean().required("فعال بودن الزامی است"),
    }),

    CONTACT_US: object().shape({
      name: string().required("نام الزامی است"),
      type: string().required("نوع الزامی است"),
      components: object({
        EN: object({
          info: object({
            company: string().required("نام شرکت (EN) الزامی است"),
            location: string().required("مکان (EN) الزامی است"),
            phone: string().required("تلفن (EN) الزامی است"),
            fax: string().required("فکس (EN) الزامی است"),
            email: string().required("ایمیل (EN) الزامی است"),
            image: object().required("تصویر (EN) الزامی است"),
          }),
        }),
        FA: object({
          info: object({
            company: string().required("نام شرکت (FA) الزامی است"),
            location: string().required("مکان (FA) الزامی است"),
            phone: string().required("تلفن (FA) الزامی است"),
            fax: string().required("فکس (FA) الزامی است"),
            email: string().required("ایمیل (FA) الزامی است"),
            image: object().required("تصویر (FA) الزامی است"),
          }),
        }),
      }),
      isActive: boolean().required("فعال بودن الزامی است"),
    }),

    ORDER: object().shape({
      name: string().required("نام الزامی است"),
      type: string().required("نوع الزامی است"),
      isActive: boolean().required("فعال بودن الزامی است"),
    }),
  },
};

/* ------------------------- HELPERS ------------------------- */
export const FindErrorKey = (errors: any, key: string) => {
  return get(errors, key);
};
export const HasError = (errors: any) => Object.keys(errors).length > 0;

/* ------------------------- EXPORT ------------------------- */
const VALIDATION = {
  AUTH,
  PAGE,
};

export default VALIDATION;
