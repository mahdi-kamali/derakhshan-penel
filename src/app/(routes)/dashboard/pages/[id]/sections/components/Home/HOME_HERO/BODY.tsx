import { Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FindErrorKey } from "@/utils/validations";
import { FormikContextType } from "formik";
import React, { ReactElement } from "react";

interface IProps {
  formik: FormikContextType<ISection>;
}

export default function BODY(props: IProps): ReactElement[] {
  const { formik } = props;

  const { values, handleChange, setFieldValue, errors } = formik;

  const FA = (
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
        validation={{
          errorMessage: FindErrorKey(errors, "components.FA.experience"),
        }}
        lines={5}
      />

      <Field.Text
        variant='light'
        name='components.FA.tagline'
        type='text'
        icon={<Icon icon='mdi:company' />}
        onChange={handleChange}
        title='شعار شرکت'
        value={values.components.FA.tagline}
        validation={{
          errorMessage: FindErrorKey(errors, "components.FA.tagline"),
        }}
      />

      <Field.Image
        type='single'
        name='components.FA.logo'
        icon={<Icon icon='ri:image-fill' />}
        onChange={(file) => {
          setFieldValue("components.FA.logo", file);
        }}
        title='لوگو'
        value={values.components.FA.logo}
        validation={{
          errorMessage: FindErrorKey(errors, "components.FA.logo"),
        }}
        placeHodler='لوگو را انتخاب کنید...'
        variant='light'
      />
    </Grid>
  );

  const EN = (
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
        validation={{
          errorMessage: FindErrorKey(errors, "components.EN.experience"),
        }}
        lines={5}
      />

      <Field.Text
        variant='light'
        name='components.EN.tagline'
        type='text'
        icon={<Icon icon='mdi:company' />}
        onChange={handleChange}
        title='شعار شرکت'
        value={values.components.EN.tagline}
        validation={{
          errorMessage: FindErrorKey(errors, "components.EN.tagline"),
        }}
      />

      <Field.Image
        type='single'
        name='components.EN.logo'
        icon={<Icon icon='ri:image-fill' />}
        onChange={(file) => {
          setFieldValue("components.EN.logo", file);
        }}
        title='لوگو'
        value={values.components.EN.logo}
        validation={{
          errorMessage: FindErrorKey(errors, "components.EN.logo"),
        }}
        placeHodler='لوگو را انتخاب کنید...'
        variant='light'
      />
    </Grid>
  );

  return [FA, EN];
}
