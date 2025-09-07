import { Field, Grid, Group } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FindErrorKey } from "@/utils/validations";
import { FormikContextType } from "formik";
import React, { ReactElement } from "react";

interface IProps {
  formik: FormikContextType<ISection>;
}

export default function ABOUT_US(props: IProps): ReactElement[] {
  const formik = useFormikContext<ISection>()

  const { values, handleChange, setFieldValue, errors } = formik;

  if (values.type !== "HOME_ABOUT_US") return [];
  const FA = (
    <Grid
      gap={"1rem"}
      gridTemplateColumns={"1fr "}>
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
        lines={5}
      />

      <Group
        header='همکاران'
        gridTemplateColumns={"1fr 1fr"}>
        {values.components.FA.agents.map((agent, index) => {
          const value = values.components.FA.agents[index];

          return (
            <Grid gap={"1rem"}>
              <Field.Text
                variant='light'
                name={`components.FA.agents[${index}].name`}
                type='text'
                icon={<Icon icon='mdi:company' />}
                onChange={handleChange}
                title='نام همکار'
                value={value.name}
                validation={{
                  errorMessage: FindErrorKey(
                    errors,
                    `components.FA.agents[${index}].name`,
                  ),
                }}
              />

              <Field.Text
                variant='light'
                name={`components.FA.agents[${index}].role`}
                type='text'
                icon={<Icon icon='mdi:company' />}
                onChange={handleChange}
                title='نقش داخل شرکت'
                value={value.role}
                validation={{
                  errorMessage: FindErrorKey(
                    errors,
                    `components.FA.agents[${index}].role`,
                  ),
                }}
              />

              <Field.Image
                type='single'
                name={`components.FA.agents[${index}].image`}
                icon={<Icon icon='ri:image-fill' />}
                onChange={(file) => {
                  setFieldValue(`components.FA.agents[${index}].image`, file);
                }}
                title='عکس همکار'
                value={value.image}
                validation={{
                  errorMessage: FindErrorKey(
                    errors,
                    `components.FA.agents[${index}].image`,
                  ),
                }}
                placeHodler=''
                variant='light'
              />
            </Grid>
          );
        })}
      </Group>
    </Grid>
  );

  const EN = (
    <Grid
      gap={"1rem"}
      gridTemplateColumns={"1fr "}>
      <Field.Text
        variant='light'
        name='components.EN.title'
        type='text'
        icon={<Icon icon='mdi:company' />}
        onChange={handleChange}
        title='عنوان EN'
        value={values.components.EN.title}
        validation={{
          errorMessage: FindErrorKey(errors, "components.EN.title"),
        }}
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
        lines={5}
      />

      <Group
        header='همکاران'
        gridTemplateColumns={"1fr 1fr"}>
        {values.components.EN.agents.map((agent, index) => {
          const value = values.components.EN.agents[index];

          return (
            <Grid gap={"1rem"}>
              <Field.Text
                variant='light'
                name={`components.EN.agents[${index}].name`}
                type='text'
                icon={<Icon icon='mdi:company' />}
                onChange={handleChange}
                title='نام همکار'
                value={value.name}
                validation={{
                  errorMessage: FindErrorKey(
                    errors,
                    `components.EN.agents[${index}].name`,
                  ),
                }}
              />

              <Field.Text
                variant='light'
                name={`components.EN.agents[${index}].role`}
                type='text'
                icon={<Icon icon='mdi:company' />}
                onChange={handleChange}
                title='نقش داخل شرکت'
                value={value.role}
                validation={{
                  errorMessage: FindErrorKey(
                    errors,
                    `components.EN.agents[${index}].role`,
                  ),
                }}
              />

              <Field.Image
                type='single'
                name={`components.EN.agents[${index}].image`}
                icon={<Icon icon='ri:image-fill' />}
                onChange={(file) => {
                  setFieldValue(`components.EN.agents[${index}].image`, file);
                }}
                title='عکس همکار'
                value={value.image}
                validation={{
                  errorMessage: FindErrorKey(
                    errors,
                    `components.EN.agents[${index}].image`,
                  ),
                }}
                placeHodler=''
                variant='light'
              />
            </Grid>
          );
        })}
      </Group>
    </Grid>
  );

  return [FA, EN];
}
