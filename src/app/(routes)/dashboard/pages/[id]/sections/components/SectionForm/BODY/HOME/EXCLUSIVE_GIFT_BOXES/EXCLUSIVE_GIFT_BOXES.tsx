import { Field, Grid, Group } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FindErrorKey } from "@/utils/validations";
import { FormikContextType } from "formik";
import React, { ReactElement } from "react";

interface IProps {
  formik: FormikContextType<ISection>;
}

export default function EXCLUSIVE_GIFT_BOXES(props: IProps): ReactElement[] {
  const formik = useFormikContext<ISection>()

  const { values, handleChange, setFieldValue, errors } = formik;

  if (values.type !== "HOME_EXCLUSIVE_GIFT_BOXES") return [];

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
        title='عنوان EN'
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
        header='عکس های محصولات'
        gridTemplateColumns={"1fr 1fr"}>
        {values.components.FA.images.map((image, index) => {
          const value = values.components.FA.images[index];

          return (
            <Grid gap={"1rem"}>
              <Field.Image
                type='single'
                name={`components.FA.images[${index}]`}
                icon={<Icon icon='ri:image-fill' />}
                onChange={(file) => {
                  setFieldValue(`components.FA.images[${index}]`, file);
                }}
                title='عکس'
                value={value}
                validation={{
                  errorMessage: FindErrorKey(
                    errors,
                    `components.FA.images[${index}]`,
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
        header='عکس های محصولات'
        gridTemplateColumns={"1fr 1fr"}>
        {values.components.EN.images.map((image, index) => {
          const value = values.components.EN.images[index];

          return (
            <Grid gap={"1rem"}>
              <Field.Image
                type='single'
                name={`components.EN.images[${index}]`}
                icon={<Icon icon='ri:image-fill' />}
                onChange={(file) => {
                  setFieldValue(`components.EN.images[${index}]`, file);
                }}
                title='عکس'
                value={value}
                validation={{
                  errorMessage: FindErrorKey(
                    errors,
                    `components.EN.images[${index}]`,
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
