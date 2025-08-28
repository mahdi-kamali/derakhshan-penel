import { Box, Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { ISectionsBase } from "@/types/Pages/Sections/Sections.types";
import { SECTIONS_OPTIONS } from "@/types/Variables";
import { useFormik } from "formik";
import React, { useState } from "react";

export default function Create() {
  const [isCreating, setIsCreating] = useState(false);

  const { values, handleChange, errors, setFieldValue } = useFormik({
    initialValues: {
      _id: "",
      type: "UNSET",
      name: "",
      isActive: false,
    } as ISectionsBase,
    onSubmit(values, formikHelpers) {},
  });
  return (
    <Grid
      type='flex'
      center>
      <Box
        maxContent
        header={
          <Grid
            type='flex'
            center
            color='var(--color-success)'
            gap={"0.5rem"}
            cursor='pointer'>
            <Icon
              icon='oui:ml-create-single-metric-job'
              color='var(--color-success)'
              onClick={() => {
                setIsCreating((prev) => !prev);
              }}
            />
            <small>افزودن سکشن </small>
          </Grid>
        }>
        <Grid
          gap={"1rem"}
          gridTemplateColumns={"1fr"}
          expanded={isCreating}
          width={isCreating ? "30rem" : "20rem"}>
          <Field.Text
            variant='light'
            icon={<Icon icon='fluent:slide-text-title-edit-16-filled' />}
            name='name'
            type='text'
            onChange={handleChange}
            title='نام'
            value={values.name}
            validation={{
              errorMessage: errors.name,
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
              errorMessage: errors.type,
            }}
            placeHodler='نوع سکشن را انتخاب کنید..'
            options={SECTIONS_OPTIONS}
          />
        </Grid>
      </Box>

      <Grid expanded={values.type === "HOME_HERO"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          debitis odio praesentium, ea obcaecati ad laboriosam quis aut
          voluptatem doloremque rem veritatis consequatur fugiat et reiciendis
          dicta consectetur ipsa nisi.
        </p>
      </Grid>
    </Grid>
  );
}
