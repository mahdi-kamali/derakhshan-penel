import { Button, Field, Grid, Group } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { ICareer } from "@/types/Career/Career.types";
import { useFormik } from "formik";
import React, { useState } from "react";

interface IProps {
  career: ICareer;
}

export default function Career(props: IProps) {
  const [editing, setEditing] = useState(false);

  const { career } = props;

  const { values, setFieldValue, handleChange,setValues } = useFormik({
    initialValues: {
      createdAt: "",
      description: "",
      image: undefined as any,
      isActive: true,
      skills: [],
      title: "",
      updatedAt: "",
    } as ICareer,
    onSubmit(values, formikHelpers) {},
  });

  return (
    <Grid
      gap={"1rem"}
      gridTemplateColumns={"1fr 1fr"}
      backgroundColor='rgba(0,0,0,0.1)'
      borderRadius={"1rem"}
      padding={"1em"}>
      <Grid gap={"1rem"}>
        <Field.Text
          icon={<Icon icon='ic:twotone-title' />}
          name=''
          onChange={() => {}}
          title={"عنوان آگهی"}
          type='text'
          value={career.title}
          variant='light'
          lines={2}
          disabled={editing === false}
        />
        <Field.Text
          icon={<Icon icon='streamline-plump:description-solid' />}
          name=''
          onChange={() => {}}
          title='توضیحات آگهی'
          type='text'
          value={career.title}
          variant='light'
          lines={5}
          disabled={editing === false}
        />
      </Grid>
      <Grid gap={"1rem"}>
        <Field.Image
          icon={<Icon icon='line-md:image-filled' />}
          name=''
          onChange={() => {}}
          title='عکس آگهی'
          type='single'
          value={career.image}
          variant='light'
          disabled={editing === false}
        />
        <Group header='مهارت های مورد نیاز'>
          {career.skills.map((skill) => {
            return (
              <Field.Text
                icon={<Icon icon='ic:twotone-title' />}
                name=''
                onChange={() => {}}
                title={"مهارت"}
                type='text'
                value={skill}
                variant='light'
                lines={2}
                disabled={editing === false}
              />
            );
          })}
        </Group>
      </Grid>
      <Grid
        gap={"1rem"}
        gridColumn={"-1/1"}>
        <Grid
          gap={"1rem"}
          gridTemplateColumns={"1fr 1fr"}
          expanded={editing === false}>
          <Button
            type='button'
            variant='warning'
            title='ویرایش'
            onClick={() => {
              setEditing(true);
            }}
            icon={<Icon icon='line-md:edit-filled' />}
          />
          <Button
            type='button'
            variant='danger'
            title='حذف'
            onClick={() => {}}
            icon={<Icon icon='material-symbols-light:delete-rounded' />}
          />
        </Grid>
        <Grid
          expanded={editing === true}
          gap={"1rem"}
          gridTemplateColumns={"1fr 1fr"}
          gridColumn={"-1/1"}>
          <Button
            type='button'
            variant='success'
            title='ثبت ویرایش'
            onClick={() => {}}
            icon={<Icon icon='line-md:edit-filled' />}
          />
          <Button
            type='button'
            variant='danger'
            title='لغو ویرایش'
            onClick={() => setEditing(false)}
            icon={<Icon icon='streamline-ultimate:delete-bold' />}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
