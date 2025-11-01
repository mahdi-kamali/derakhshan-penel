"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import Form from "@/components/UI/Form/Form";
import {
  CreateCareerAPI,
  GetCareerByIDAPI,
} from "@/services/Careers/Careers.services";
import { ICareer } from "@/types/Career/Career.types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import ACTIONS from "./ACTIONS/ACTIONS";
import BODY from "./BODY/BODY";
import HEADERS from "./HEADERS/HEADERS";
import TABS from "./TABS/TABS";
import { useParams } from "next/navigation";
import { GetAllGalleriesAPI } from "@/services/Gallery.services";
import { useEffect } from "react";

const initialValues: ICareer = {
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
};

export default function Page() {
  const { id } = useParams();

  const formik = useFormik<ICareer>({
    initialValues: initialValues,
    onSubmit(values, formikHelpers) {},
  });

  const { data, isFetching } = useQuery({
    queryFn: () => GetCareerByIDAPI(id as string),
    initialData: {
      data: initialValues,
      message: "",
      status: 200,
    },
    queryKey: [GetAllGalleriesAPI.name],
  });

  useEffect(() => {
    formik.setValues(data.data);
  }, [data.data]);


  return (
    <PageContainer
      title='ویرایش آگهی'
      isLoading={isFetching}>
      <Form
        formik={formik}
        extraProps={{
          isUpdating: true,
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
