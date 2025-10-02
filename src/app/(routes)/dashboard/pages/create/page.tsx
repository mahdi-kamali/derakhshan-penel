"use client";
import { ShowQuestion } from "@/common/toast/toast";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Box, Button, Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import useRedirect from "@/hooks/useRedirect";
import { CreatePageAPI } from "@/services/Pages/Pages.services";
import { ICreatePage, IPage } from "@/types/Pages/pages.types";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
export default function Page() {
  const GoList = useRedirect().admin.pages.list;

  const { mutate: CreatePage, isIdle } = useMutation({
    mutationFn: CreatePageAPI,
    onSuccess(data, variables, context) {
      GoList();
    },
  });

  const { values, handleChange, submitForm, errors, setFieldValue } = useFormik(
    {
      onSubmit(values, formikHelpers) {
        ShowQuestion({
          onConfirm() {
            CreatePage(values);
          },
        });
      },
      initialValues: {
        slug: "",
        title: "",
      } as ICreatePage,
    },
  );

  return (
    <PageContainer title='ایجاد صفحه جدید'>
      <Box
        header={
          <Grid
            type='flex'
            center
            gap={"0.5rem"}>
            <Icon icon='oui:ml-create-single-metric-job' />
            <small>ایجاد صفحه ی جدید</small>
          </Grid>
        }>
        <Grid
          gap={"1rem"}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
          <Grid
            width={"20rem"}
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
              title='ثبت و ایجاد'
              variant='success'
              icon={<Icon icon='formkit:submit' />}
              onClick={submitForm}
            />
            <Button
              type='button'
              title='برگشت به لیست'
              variant='warning'
              icon={<Icon icon='line-md:list' />}
              onClick={submitForm}
            />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
