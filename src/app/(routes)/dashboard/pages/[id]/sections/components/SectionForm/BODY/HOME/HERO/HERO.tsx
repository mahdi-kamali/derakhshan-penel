import { Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FormikContextType, useFormikContext } from "formik";
import React from "react";

interface IProps {
  formik: FormikContextType<ISection>;
}

export default function HERO(props: IProps) {
  const formik = useFormikContext<ISection>();

  const { values, handleChange, setFieldValue } = formik;

  if (values.type !== "HOME_HERO") return [];

  const FA = (
    <Grid
      gap={"1rem"}
      gridTemplateColumns={"1fr 1fr "}>
      <Field.Text
        variant='light'
        name='components.FA.experience'
        type='text'
        icon={<Icon icon='mdi:company' />}
        onChange={handleChange}
        title='تجربیات'
        value={values.components.FA.experience}
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
      />

      <Grid gridColumn={"-1/1"}>
        <Field.Image
          type='single'
          name='components.FA.logo'
          icon={<Icon icon='ri:image-fill' />}
          onChange={(file) => {
            setFieldValue("components.FA.logo", file);
          }}
          title='لوگو'
          value={values.components.FA.logo}
          placeHodler='لوگو را انتخاب کنید...'
          variant='light'
        />
      </Grid>
    </Grid>
  );

  const EN = (
    <Grid
      gap={"1rem"}
      gridTemplateColumns={"1fr  1fr"}>
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
        name='components.EN.tagline'
        type='text'
        icon={<Icon icon='mdi:company' />}
        onChange={handleChange}
        title='شعار شرکت'
        value={values.components.EN.tagline}
      />

      <Grid gridColumn={"-1/1"}>
        <Field.Image
          type='single'
          name='components.EN.logo'
          icon={<Icon icon='ri:image-fill' />}
          onChange={(file) => {
            setFieldValue("components.EN.logo", file);
          }}
          title='لوگو'
          value={values.components.EN.logo}
          placeHodler='لوگو را انتخاب کنید...'
          variant='light'
        />
      </Grid>
    </Grid>
  );

  return [EN, FA]
}
