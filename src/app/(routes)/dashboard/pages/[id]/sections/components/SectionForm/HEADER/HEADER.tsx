import { Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import {
  ISection,
  SECTIONS_TYPES,
  SECTIONS_TYPES_EXAMPLES,
} from "@/types/Pages/Sections/Sections.types";
import { SECTIONS_OPTIONS } from "@/types/Variables";
import { FindErrorKey } from "@/utils/validations";
import { FormikContextType, useFormikContext } from "formik";
import React from "react";
interface IProps {
  formik: FormikContextType<ISection>;
}

export default function HEADER(props: IProps) {
  const { values, handleChange, setFieldValue, errors, setValues } =
    useFormikContext<ISection>();

  const setType = (type: keyof SECTIONS_TYPES) => {
    const sample = SECTIONS_TYPES_EXAMPLES[type] as ISection;
    setValues({
      ...sample,
      name: values.name,
    });
  };

  return (
    <Grid
      gap={"1rem"}
      gridTemplateColumns={"1fr 1fr "}>
      <Field.Text
        variant='light'
        icon={<Icon icon='fluent:slide-text-title-edit-16-filled' />}
        name='name'
        type='text'
        onChange={handleChange}
        title='نام'
        value={values.name}
        placeHodler='نام سکشن را وارد کنید..'
      />
      <Field.Select
        variant='light'
        icon={<Icon icon='material-symbols:type-specimen-rounded' />}
        name='type'
        onChange={(event) => {
          setType(event.value);
        }}
        title='نوع'
        value={values.type}
        placeHodler='نوع سکشن را انتخاب کنید..'
        options={SECTIONS_OPTIONS}
      />
    </Grid>
  );
}
