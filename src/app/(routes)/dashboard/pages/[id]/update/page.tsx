"use client";
import { IResponse } from "@/common/axios/axios";
import { ShowQuestion } from "@/common/toast/toast";
import IconSelect from "@/components/common/IconSelect/IconSelect";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Box, Button, Field, Grid, Group, Modal } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import useRedirect from "@/hooks/useRedirect";
import {
  CreatePageAPI,
  GetPageByIdAPI,
  GetPagesAPI,
  UpdatePageAPI,
} from "@/services/Pages/Pages.services";
import { ICreatePage, IPage } from "@/types/Pages/pages.types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useParams } from "next/navigation";
import { useEffect } from "react";
export default function Page() {
  const initialValues: IPage = {
    slug: "",
    title: "",
    title_en: "",
    nav: {
      icon: "",
      show: false,
    },
    _id: "",
    createdAt: "",
    sections: [],
    status: "",
    updatedAt: "",
  };

  const { admin } = useRedirect();
  const { id } = useParams();

  const GoList = useRedirect().admin.pages.list;

  const { mutate: UpdatePage, isIdle } = useMutation({
    mutationFn: UpdatePageAPI,
    onSuccess(data, variables, context) {
      GoList();
    },
  });

  const { data } = useQuery({
    queryFn: () => GetPageByIdAPI(id as string),
    initialData: {
      data: initialValues,
      message: "",
      status: 200,
    },
    queryKey: [GetPageByIdAPI.name],
  });

  const { values, handleChange, submitForm, errors, setFieldValue, setValues } =
    useFormik<IPage>({
      onSubmit(values, formikHelpers) {
        ShowQuestion({
          onConfirm() {
            UpdatePage(values);
          },
        });
      },
      initialValues: initialValues,
    });

  useEffect(() => {
    setValues(data.data);
  }, [data.data]);

  return (
    <PageContainer title='ویرایش صفحه'>
      <Box
        header={
          <Grid
            type='flex'
            center
            gap={"0.5rem"}>
            <Icon icon='oui:ml-create-single-metric-job' />
            <small>ویرایش</small>
          </Grid>
        }>
        <Grid
          gap={"1rem"}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
          <Grid
            width={"40rem"}
            gridTemplateColumns={"1fr "}
            gap={"1rem"}>
            <Field.Text
              errors={errors}
              variant='light'
              type='text'
              name='title'
              icon={<Icon icon='fluent:slide-text-title-16-filled' />}
              onChange={handleChange}
              title='عنوان صفحه'
              value={values.title}
              placeHodler='مثال : صفحه اصلی - ارتباط با ما ....'
            />
            <Field.Text
              errors={errors}
              variant='light'
              type='text'
              name='title_en'
              icon={<Icon icon='fluent:slide-text-title-16-filled' />}
              onChange={handleChange}
              title='عنوان صفحه ( لاتین )'
              value={values.title_en}
              placeHodler='home - about us - ....'
            />
            <Group header='هدر'>
              <Grid
                gridTemplateColumns={"1fr 1fr"}
                gap={"1rem"}
                alignItems='center'>
                <Field.Switch
                  name='nav.show'
                  icon={<Icon icon='fontisto:nav-icon' />}
                  onChange={handleChange}
                  title='نمایش در هدر'
                  value={values.nav.show}
                  variant='light'
                />
                <IconSelect
                  onChange={(value) => setFieldValue("nav.icon", value)}
                  value={values.nav.icon}
                />
              </Grid>
            </Group>
            <Field.Text
              errors={errors}
              variant='light'
              type='text'
              name='slug'
              icon={<Icon icon='fluent:slide-text-title-16-filled' />}
              onChange={(event) => {
                const value = event.target.value.replace("/", "");
                setFieldValue("slug", `/${value}`);
              }}
              title='اسلاگ صفحه'
              value={values.slug}
              placeHodler='مثال : /home -  /about-us'
              dir='ltr'
            />
          </Grid>
          <Grid
            gridTemplateColumns={"1fr 1fr"}
            gap={"1rem"}>
            <Button
              type='button'
              title='ثبت و ویرایش'
              variant='success'
              icon={<Icon icon='formkit:submit' />}
              onClick={submitForm}
            />
            <Button
              type='button'
              title='برگشت به لیست'
              variant='warning'
              icon={<Icon icon='line-md:list' />}
              onClick={() => admin.pages.list()}
            />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
