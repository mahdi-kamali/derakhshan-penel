import { Field, Grid, Group } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FindErrorKey } from "@/utils/validations";
import { FormikContextType } from "formik";
import React, { ReactElement, useEffect, useState } from "react";

interface IProps {
  formik: FormikContextType<ISection>;
}

export default function MAIN(props: IProps): ReactElement[] {
  const { formik } = props;

  const { values, handleChange, setFieldValue, errors } = formik;

  if (values.type !== "ABOUT_US_MAIN") return [];

  const Component = (language: LanguagesENUM) => {
    const components = values.components[language];

    return (
      <Grid
        gap={"1rem"}
        gridTemplateColumns={"1fr 1fr "}
        overflow='auto'>
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
                  padding={"1em"}
                  key={index}>
                  <Field.Text
                    errors={errors}
                    variant='light'
                    name={`components.${language}.agents[${index}].name`}
                    type='text'
                    icon={<Icon icon='mdi:company' />}
                    onChange={handleChange}
                    title='نام همکار'
                    value={value.name}
                  />

                  <Field.Text
                    errors={errors}
                    variant='light'
                    name={`components.${language}.agents[${index}].role`}
                    type='text'
                    icon={<Icon icon='mdi:company' />}
                    onChange={handleChange}
                    title='نقش داخل شرکت'
                    value={value.role}
                  />

                  <Field.Image
                    errors={errors}
                    type='single'
                    name={`components.${language}.agents[${index}].image`}
                    icon={<Icon icon='ri:image-fill' />}
                    onChange={(file) => {
                      setFieldValue(
                        `components.${language}.agents[${index}].image`,
                        file,
                      );
                    }}
                    title='عکس همکار'
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
                  padding={"1em"}
                  key={index}>
                  <Field.Text
                    errors={errors}
                    variant='light'
                    name={`components.${language}.generations[${index}].title`}
                    type='text'
                    icon={<Icon icon='mdi:company' />}
                    onChange={handleChange}
                    title='عنوان'
                    value={value.title}
                  />

                  <Field.Text
                    errors={errors}
                    variant='light'
                    name={`components.${language}.generations[${index}].description`}
                    type='text'
                    icon={<Icon icon='mdi:company' />}
                    onChange={handleChange}
                    title='توضیحات'
                    lines={4}
                    value={value.description}
                  />

                  <Field.Image
                    errors={errors}
                    type='single'
                    name={`components.${language}.generations[${index}].image`}
                    icon={<Icon icon='ri:image-fill' />}
                    onChange={(file) => {
                      setFieldValue(
                        `components.${language}.generations[${index}].image`,
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
            errors={errors}
            type='single'
            name={`components.${language}.background`}
            icon={<Icon icon='ri:image-fill' />}
            onChange={(file) => {
              setFieldValue(`components.${language}.background`, file);
            }}
            title='تصویر پس زمینه'
            value={components.background}
            placeHodler='تصویر را انتخاب کنید...'
            variant='light'
          />
        </Grid>
      </Grid>
    );
  };

  const FA = Component(LanguagesENUM.FA);
  const EN = Component(LanguagesENUM.EN);

  return [FA, EN];
}
