import { Box, Field, Grid } from "@/components/UI";
import Form from "@/components/UI/Form/Form";
import Icon from "@/components/UI/Icon/Icon";
import { ISectionsBase } from "@/types/Pages/Sections/Sections.types";
import { useFormik } from "formik";
import React from "react";

export default function HOME_HERO() {
  const { values, handleChange } = useFormik({
    initialValues: {
      isActive: true,
      type: "HOME_HERO",
      name: "هیروی صفحه اصلی",
      components: {
        EN: {
          experience: "",
          logo: "",
          tagline: "",
        },
        FA: {
          experience: "",
          logo: "",
          tagline: "",
        },
      },
    } as ISectionsBase,
    onSubmit(values, formikHelpers) {},
  });

  return (
    <Form
      tabs={[
        {
          label: "فارسی",
          icon: <Icon icon='emojione:flag-for-iran' />,
        },
        {
          label: "انگلیسی",
          icon: <Icon icon='emojione:flag-england' />,
        },
      ]}>
      {({ goNext, goPrev }) => {
        return [
          <Grid
            gap={"1rem"}
            gridTemplateColumns={"1fr "}>
            <Field.Text
              variant='light'
              name='components.EN.experience'
              type='text'
              icon={<Icon icon='mdi:company' />}
              onChange={handleChange}
              title='تجربیات'
              value={values.components.EN.experience}
              lines={5}
            />
            <Field.Text
              variant='light'
              name='components.EN.logo'
              type='text'
              icon={<Icon icon='mdi:company' />}
              onChange={() => {}}
              title='لوگو'
              value={values.components.EN.logo}
            />
            <Field.Text
              variant='light'
              name='components.EN.tagline'
              type='text'
              icon={<Icon icon='mdi:company' />}
              onChange={handleChange}
              title='شعار شرکت'
              value={values.components.EN.tagline}
            />
            <Field.Image
              type='single'
              name='logo'
              icon={<Icon icon='ri:image-fill' />}
              onChange={() => {}}
              title='لوگو'
              value={values.components.EN.logo}
              placeHodler='لوگو را انتخاب کنید...'
              variant='light'
            />
          </Grid>,
          <Grid
            gap={"1rem"}
            gridTemplateColumns={"1fr "}>
            <Field.Text
              variant='light'
              name='components.FA.experience'
              type='text'
              icon={<Icon icon='mdi:company' />}
              onChange={handleChange}
              title='تجربیات'
              value={values.components.FA.experience}
              lines={10}
            />
            <Field.Text
              variant='light'
              name='components.FA.logo'
              type='text'
              icon={<Icon icon='mdi:company' />}
              onChange={() => {}}
              title='لوگو'
              value={values.components.FA.logo}
            />
            <Field.Text
              variant='light'
              name='components.FA.tagline'
              type='text'
              icon={<Icon icon='mdi:company' />}
              onChange={handleChange}
              title='شعار شرکت'
              value={values.components.FA.tagline}
            />
          </Grid>,
        ];
      }}
    </Form>
  );
}
