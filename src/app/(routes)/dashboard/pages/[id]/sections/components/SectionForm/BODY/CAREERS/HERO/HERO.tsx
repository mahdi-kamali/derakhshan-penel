import { Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FormikContextType } from "formik";
import { ReactElement } from "react";

interface IProps {
  formik: FormikContextType<ISection>;
}
export default function CAREERS_HERO(props: IProps): ReactElement[] {
  const { formik } = props;
  const { values, handleChange, setFieldValue } = formik;

  const { type } = values;

  if (type !== "CAREERS_HERO") return [];

  const Component = (language: LanguagesENUM) => {
    const components = values.components[language];

    return (
      <Grid
        gridTemplateColumns={"1fr 1fr"}
        gap={"1rem"}>
        <Field.Text
          name={`components.${language}.title.text`}
          icon={<Icon icon='fluent:slide-text-title-edit-16-filled' />}
          title='عنوان'
          onChange={handleChange}
          type='text'
          value={components.title.text}
          placeHodler='متن هدر ( کامل )'
          variant='light'
        />
        <Field.Text
          name={`components.${language}.title.marked`}
          icon={<Icon icon='fluent:slide-text-title-edit-16-filled' />}
          title='متن مارک شده'
          onChange={handleChange}
          type='text'
          value={components.title.marked}
          placeHodler='متن مارک شده'
          variant='light'
        />
        <Grid gridColumn={"-1/1"}>
          <Field.Text
            name={`components.${language}.description`}
            icon={<Icon icon='fluent:slide-text-title-edit-16-filled' />}
            title='توضیحات'
            onChange={handleChange}
            type='text'
            value={components.description}
            placeHodler='توضیحات'
            variant='light'
            lines={4}
          />
        </Grid>
        <Grid gridColumn={"-1/1"}>
          <Field.Image
            icon={<Icon icon='line-md:image' />}
            name={`components.${language}.background`}
            onChange={(image) => {
              setFieldValue(`components.${language}.background`, image);
            }}
            title='عکس پس زمینه'
            type='single'
            value={components.background}
            placeHodler='عکس پس زمینه'
          />
        </Grid>
      </Grid>
    );
  };

  const FA = Component(LanguagesENUM.FA);
  const EN = Component(LanguagesENUM.EN);
  return [FA, EN];
}
