"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Box, Field, Grid } from "@/components/UI";
import Form from "@/components/UI/Form/Form";
import { GetSiteSettingsAPI } from "@/services/Site-Settings/SiteSettings.services";
import { ISiteSettings } from "@/types/Site-Settings/SiteSettings.types";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import ACTIONS from "./ACTIONS/ACTIONS";
import BODY from "./BODY/BODY";
import HEADER from "./HEADER/HEADER";
import TABS from "./TABS/TABS";

const initialData: ISiteSettings = {
  siteName: "derakhshan",
  EN: {
    socials: [
      { label: "Telegram", icon: "telegram", url: "#" },
      { label: "Instagram", icon: "instagram", url: "#" },
      { label: "LinkedIn", icon: "linkedin", url: "#" },
      { label: "Twitter", icon: "twitter", url: "#" },
    ],
    links: [
      { label: "Home", icon: "home", href: "/en/home" },
      { label: "About Us", icon: "info", href: "/en/about" },
      { label: "Services", icon: "services", href: "/en/services" },
      { label: "Contact Us", icon: "contact", href: "/en/contact" },
      { label: "FAQ", icon: "faq", href: "/en/faq" },
      { label: "Terms of Use", icon: "terms", href: "/en/terms" },
      { label: "Support Center", icon: "support", href: "/en/support" },
    ],
    phone: "+98 ...",
    email: "info@derakhshan.com",
    address: "Tehran, Iran",
    work_time: "Saturday - Thursday",
    trusts: [],
  },
  FA: {
    socials: [
      { label: "تلگرام", icon: "telegram", url: "#" },
      { label: "اینستاگرام", icon: "instagram", url: "#" },
      { label: "لینکدین", icon: "linkedin", url: "#" },
      { label: "توییتر", icon: "twitter", url: "#" },
    ],
    links: [
      { label: "خانه", icon: "home", href: "/fa/home" },
      { label: "درباره ما", icon: "info", href: "/fa/about" },
      { label: "خدمات", icon: "services", href: "/fa/services" },
      { label: "تماس با ما", icon: "contact", href: "/fa/contact" },
      { label: "سؤالات متداول", icon: "faq", href: "/fa/faq" },
      { label: "شرایط استفاده", icon: "terms", href: "/fa/terms" },
      { label: "مرکز پشتیبانی", icon: "support", href: "/fa/support" },
    ],
    phone: "+98 ...",
    email: "info@derakhshan.com",
    address: "تهران، ایران",
    work_time: "شنبه تا پنج‌شنبه",
    trusts: [],
  },
};

export default function Page() {
  const { data, isLoading } = useQuery({
    queryFn: GetSiteSettingsAPI,
    initialData: {
      data: initialData,
      message: "",
      status: 200,
    },
    queryKey: [GetSiteSettingsAPI.name],
  });

  const { data: siteSettings } = data;

  const formik = useFormik<ISiteSettings>({
    initialValues: siteSettings,
    onSubmit(values, formikHelpers) {},
  });

  useEffect(() => {
    formik.setValues(data.data);
  }, [data.data]);

  return (
    <PageContainer
      title='تنظیات سایت'
      isLoading={isLoading}
      center>
      <Form formik={formik}>
        {() => {
          return {
            ACTIONS: ACTIONS,
            BODY: BODY,
            HEADERS: HEADER,
            TABS: TABS,
          };
        }}
      </Form>
    </PageContainer>
  );
}
