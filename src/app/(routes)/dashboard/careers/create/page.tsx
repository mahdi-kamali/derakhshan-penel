"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import Form from "@/components/UI/Form/Form";
import { CreateCareerAPI } from "@/services/Careers/Careers.services";
import { ICareer } from "@/types/Career/Career.types";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import ACTIONS from "./ACTIONS/ACTIONS";
import BODY from "./BODY/BODY";
import HEADERS from "./HEADERS/HEADERS";
import TABS from "./TABS/TABS";

export default function Page() {
  const formik = useFormik<ICareer>({
    initialValues: {
      EN: {
        type: "NORMAL",
        description: "",
        image: undefined as any,
        isActive: true,
        skills: ["مهارت شماره یک"],
        title: "",
      },
      FA: {
        type: "NORMAL",
        description: "",
        image: undefined as any,
        isActive: true,
        skills: ["مهارت شماره یک"],
        title: "",
      },
    },
    onSubmit(values, formikHelpers) {},
  });

  return (
    <PageContainer title='ایحاد آگهی جدید'>
      <Form
        formik={formik}
        extraProps={{
          isCreating: true,
        }}>
        {() => {
          return {
            ACTIONS: ACTIONS,
            BODY: BODY,
            HEADERS: HEADERS,
            TABS: TABS,
          };
        }}
      </Form>
    </PageContainer>
  );
}
