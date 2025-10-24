"use client";
import { ShowQuestion } from "@/common/toast/toast";
import IconSelect from "@/components/common/IconSelect/IconSelect";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Box, Button, Field, Grid, Group, Modal } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import SelectModal from "@/components/UI/SelectModal/SelectModal";
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
        title_en: "",
        nav: {
          icon: "",
          show: false,
        },
      } as ICreatePage,
    },
  );

  return (
    <PageContainer title='ایجاد صفحه جدید'>
      <Box
        header='ایجاد صفحه ی جدید'
        maxContent>
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
