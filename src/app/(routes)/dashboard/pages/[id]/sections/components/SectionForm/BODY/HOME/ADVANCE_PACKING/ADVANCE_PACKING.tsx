import { Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FindErrorKey } from "@/utils/validations";
import { FormikContextType } from "formik";
import React, { ReactElement, useEffect, useState } from "react";

interface IProps {
  formik: FormikContextType<ISection>;
}

export default function ADVANCE_PACKING(
  props: IProps,
): ReactElement[] {
  const formik = useFormikContext<ISection>()

  const { values, handleChange, setFieldValue, errors } = formik;

  if (values.type !== "HOME_ADVANCED_PACKAGING") return [];

  const FA = (
    <Grid
      gap={"1rem"}
      gridTemplateColumns={"1fr 1fr "}>
      <Field.Text
        variant='light'
        name='components.FA.title'
        type='text'
        icon={<Icon icon='mdi:company' />}
        onChange={handleChange}
        title='عنوان'
        value={values.components.FA.title}
        validation={{
          errorMessage: FindErrorKey(errors, "components.FA.title"),
        }}
        lines={5}
      />

      <Field.Text
        variant='light'
        name='components.FA.description'
        type='text'
        icon={<Icon icon='mdi:company' />}
        onChange={handleChange}
        title='توضیحات'
        value={values.components.FA.description}
        validation={{
          errorMessage: FindErrorKey(errors, "components.FA.description"),
        }}
      />

      <Grid gridColumn={"-1/1"}>
        <Field.Image
          type='single'
          name='components.FA.image'
          icon={<Icon icon='ri:image-fill' />}
          onChange={(file) => {
            setFieldValue("components.FA.image", file);
          }}
          title='عکس'
          value={values.components.FA.image}
          validation={{
            errorMessage: FindErrorKey(errors, "components.FA.image"),
          }}
          placeHodler='لوگو را انتخاب کنید...'
          variant='light'
        />
      </Grid>
    </Grid>
  );

  const EN = (
    <Grid
      gap={"1rem"}
      gridTemplateColumns={"1fr 1fr "}>
      <Field.Text
        variant='light'
        name='components.EN.title'
        type='text'
        icon={<Icon icon='mdi:company' />}
        onChange={handleChange}
        title='عنوان'
        value={values.components.EN.title}
        validation={{
          errorMessage: FindErrorKey(errors, "components.EN.title"),
        }}
        lines={5}
      />

      <Field.Text
        variant='light'
        name='components.EN.description'
        type='text'
        icon={<Icon icon='mdi:company' />}
        onChange={handleChange}
        title='توضیحات'
        value={values.components.EN.description}
        validation={{
          errorMessage: FindErrorKey(errors, "components.EN.description"),
        }}
      />

      <Grid gridColumn={"-1/1"}>
        <Field.Image
          type='single'
          name='components.EN.image'
          icon={<Icon icon='ri:image-fill' />}
          onChange={(file) => {
            setFieldValue("components.EN.image", file);
          }}
          title='عکس'
          value={values.components.EN.image}
          validation={{
            errorMessage: FindErrorKey(errors, "components.EN.image"),
          }}
          placeHodler='لوگو را انتخاب کنید...'
          variant='light'
        />
      </Grid>
    </Grid>
  );

  return [FA, EN];
}
