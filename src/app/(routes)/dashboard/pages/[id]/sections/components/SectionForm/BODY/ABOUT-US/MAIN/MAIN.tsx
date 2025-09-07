import { Field, Grid, Group } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FindErrorKey } from "@/utils/validations";
import { FormikContextType } from "formik";
import React, { ReactElement, useEffect, useState } from "react";

interface IProps {
  formik: FormikContextType<ISection>;
}

export default function MAIN(props: IProps): ReactElement[] {
  const formik = useFormikContext<ISection>()

  const { values, handleChange, setFieldValue, errors } = formik;

  if (values.type !== "ABOUT_US_MAIN") return [];

  const Component = (language: "FA" | "EN") => {
    const components = values.components[language];

    return (
      <Grid
        gap={"1rem"}
        gridTemplateColumns={"1fr 1fr "}>
        <Grid gridColumn={"-1/1"}>
          <Group
            header='همکاران'
            gridTemplateColumns={"1fr 1fr"}>
            {components.agents.map((agent, index) => {
              const value = components.agents[index];

              return (
                <Grid
                  gap={"1rem"}
                  backgroundColor='rgba(0,0,0,0.1)'
                  borderRadius={"1rem"}
                  padding={"1em"}>
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
                      setFieldValue(
                        `components.FA.agents[${index}].image`,
                        file,
                      );
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

        <Grid gridColumn={"-1/1"}>
          <Group
            header='تاریخچه'
            gridTemplateColumns={"1fr 1fr"}>
            {components.generations.map((gen, index) => {
              const value = components.generations[index];

              return (
                <Grid
                  gap={"1rem"}
                  backgroundColor='rgba(0,0,0,0.1)'
                  borderRadius={"1rem"}
                  padding={"1em"}>
                  <Field.Text
                    variant='light'
                    name={`components.FA.generations[${index}].title`}
                    type='text'
                    icon={<Icon icon='mdi:company' />}
                    onChange={handleChange}
                    title='عنوان'
                    value={value.title}
                  />

                  <Field.Text
                    variant='light'
                    name={`components.FA.generations[${index}].description`}
                    type='text'
                    icon={<Icon icon='mdi:company' />}
                    onChange={handleChange}
                    title='توضیحات'
                    lines={4}
                    value={value.description}
                  />

                  <Field.Image
                    type='single'
                    name={`components.FA.generations[${index}].image`}
                    icon={<Icon icon='ri:image-fill' />}
                    onChange={(file) => {
                      setFieldValue(
                        `components.FA.generations[${index}].image`,
                        file,
                      );
                    }}
                    title='عکس'
                    value={value.image}
                    placeHodler=''
                    variant='light'
                  />
                </Grid>
              );
            })}
          </Group>
        </Grid>

        <Grid gridColumn={"-1/1"}>
          <Field.Image
            type='single'
            name='components.FA.background'
            icon={<Icon icon='ri:image-fill' />}
            onChange={(file) => {
              setFieldValue("components.FA.background", file);
            }}
            title='تصویر پس زمینه'
            value={components.background}
            placeHodler='لوگو را انتخاب کنید...'
            variant='light'
            errors={errors}
          />
        </Grid>
      </Grid>
    );
  };

  const FA = Component("FA");

  return [FA];
}
