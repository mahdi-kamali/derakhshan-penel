import { Button, Field, Grid, Group } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { ICareer } from "@/types/Career/Career.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { FieldName } from "@/utils/Object";
import { FormikContextType } from "formik";

interface IProps {
  formik: FormikContextType<ICareer>;
  language: LanguagesENUM;
}
export default function BODY(props: IProps) {
  const { GetFieldName } = FieldName<ICareer>();

  const { formik } = props;
  const { setFieldValue, handleChange } = formik;

  const Component = (language: LanguagesENUM) => {
    const values = formik.values[language];

    const removeSkill = (target: number) => {
      const news = values.skills.filter((skill, index) => {
        return index !== target;
      });
      setFieldValue(GetFieldName(language, "skills"), news);
    };

    return (
      <Grid
        gap={"1rem"}
        gridTemplateColumns={"1fr"}>
        <Grid
          gridTemplateColumns={"1fr 1fr"}
          gap={"1rem"}>
          <Field.Text
            icon={<Icon icon='ic:twotone-title' />}
            name={GetFieldName(language, "title")}
            onChange={handleChange}
            title={"عنوان آگهی"}
            type='text'
            value={values.title}
            variant='light'
            lines={3}
          />

          <Field.Image
            icon={<Icon icon='line-md:image-filled' />}
            name={GetFieldName(language, "image")}
            onChange={(image) => {
              setFieldValue(GetFieldName(language, "image"), image);
            }}
            title='عکس آگهی'
            type='single'
            value={values.image}
            variant='light'
          />
        </Grid>

        <Group header='مهارت های مورد نیاز'>
          <Grid
            gap={"1rem"}
            maxHeight={"20rem"}
            overflow='auto'>
            {values.skills?.map((skill, index) => {
              return (
                <Grid
                  gridTemplateColumns={"1fr max-content"}
                  alignItems='end'
                  gap={"1rem"}
                  key={index}>
                  <Field.Text
                    icon={<Icon icon='ic:twotone-title' />}
                    name={GetFieldName(language, "skills", index)}
                    onChange={handleChange}
                    title={"مهارت"}
                    type='text'
                    value={skill}
                    variant='light'
                  />
                  <Button
                    type='button'
                    title='حذف'
                    variant='danger'
                    icon={<Icon icon='ic:baseline-delete' />}
                    onClick={() => removeSkill(index)}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Grid marginTop={"auto"}>
            <Button
              type='button'
              variant='primary'
              title='افزودن مهارت جدید'
              icon={<Icon icon='gg:add' />}
              onClick={() => {
                setFieldValue(GetFieldName(language, "skills"), [
                  ...values.skills,
                  "",
                ]);
              }}
            />
          </Grid>
        </Group>

        <Field.Text
          icon={<Icon icon='streamline-plump:description-solid' />}
          name={GetFieldName(language, "description")}
          onChange={handleChange}
          title='توضیحات آگهی'
          type='text'
          value={values.description}
          variant='light'
          lines={5}
        />
      </Grid>
    );
  };

  return [Component(LanguagesENUM.FA), Component(LanguagesENUM.EN)];
}
