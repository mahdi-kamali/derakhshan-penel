import { Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { SECTIONS_OPTIONS } from "@/types/Variables";
import { FindErrorKey } from "@/utils/validations";
import { FormikContextType } from "formik";
import React from "react";

interface IProps {
  formik: FormikContextType<ISection>;
}

export default function HEADER(props: IProps) {
  const { formik } = props;
  const { values, handleChange, setFieldValue, errors } = formik;

  return (
    <Grid
      gap={"1rem"}
      gridTemplateColumns={"1fr "}>
      <Field.Text
        variant='light'
        icon={<Icon icon='fluent:slide-text-title-edit-16-filled' />}
        name='name'
        type='text'
        onChange={handleChange}
        title='نام'
        value={values.name}
        validation={{
          errorMessage: FindErrorKey(errors, "name"),
        }}
        placeHodler='نام سکشن را وارد کنید..'
      />
      <Field.Select
        variant='light'
        icon={<Icon icon='material-symbols:type-specimen-rounded' />}
        name='type'
        onChange={(event) => {
          setFieldValue("type", event.value);
        }}
        title='نوع'
        value={values.type}
        validation={{
          errorMessage: FindErrorKey(errors, "type"),
        }}
        placeHodler='نوع سکشن را انتخاب کنید..'
        options={SECTIONS_OPTIONS}
        // disabled={isUpdating}
      />
    </Grid>
  );
}
