import { Grid } from "@/components/UI";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FormikContextType } from "formik";
import React from "react";

interface IProps {
  formik: FormikContextType<ISection>;
  language: LanguagesENUM;
}

export default function Component(props: IProps) {
  return (
    <Grid color='black'>
      <p>
        این سکشن به عنوان نقطه ورود برای مشتریانی است که می‌خواهند سفارشی ثبت
        کنند. با پر کردن اطلاعات مورد نیاز، ارسال فایل مربوطه، تعیین مشخصات
        محصول (وزن، ابعاد، نوع، تعداد) و کلیک روی «ارسال سفارش»، اطلاعات به سمت
        سیستم پشتیبان ارسال می‌شود تا بررسی، قیمت‌گذاری و پردازش شود.
      </p>
    </Grid>
  );
}
