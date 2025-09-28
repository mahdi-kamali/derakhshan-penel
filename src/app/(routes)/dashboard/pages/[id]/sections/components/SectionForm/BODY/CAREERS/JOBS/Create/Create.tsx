import { ShowQuestion } from "@/common/toast/toast";
import { Button, Field, Grid, Group, Image } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import useTable from "@/hooks/useTable";
import {
  CreateCareerAPI,
  GetCareersAPI,
} from "@/services/Careers/Careers.services";
import { ICareer } from "@/types/Career/Career.types";
import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useState } from "react";
import Career from "../Career/Career";

export default function Create() {
  const { values, handleChange, setFieldValue } = useFormik<ICareer>({
    initialValues: {
      createdAt: "",
      updatedAt: "",
      description: "",
      isActive: true,
      skills: [],
      title: "",
      image: undefined as any,
    },
    onSubmit(values, formikHelpers) {},
  });

  const [newSkill, setNewSkill] = useState<string>("");
  const [show, setShow] = useState(false);

  const { mutate: CreateCareer, isIdle } = useMutation({
    mutationFn: CreateCareerAPI,
  });

  const { data } = useTable<ICareer[]>({
    api: GetCareersAPI,
  });

  return (
    <Grid gap={"1rem"}>
      <Grid
        expanded={show === false}
        alignItems='center'>
        <Button
          type='button'
          title='ایجاد آگهی جدید'
          variant='warning'
          onClick={() => {
            setShow(true);
          }}
        />
      </Grid>

      <Grid
        gap={"1rem"}
        expanded={show}>
        <Grid color='black'>
          <Group header='ایجاد آگهی جدید'>
            <Field.Text
              name='title'
              icon={<Icon icon='material-symbols:title' />}
              onChange={handleChange}
              title='عنوان آگهی'
              type='text'
              value={values.title}
              variant='light'
              lines={2}
            />

            <Group
              header='مهارت های مورد نیاز'
              variant='warning'
              footer={
                <Grid
                  gridTemplateColumns={"1fr max-content"}
                  gap={"1rem"}
                  alignItems='end'>
                  <Field.Text
                    name='title'
                    icon={<Icon icon='material-symbols:title' />}
                    onChange={(props) => {
                      const value = props.target.value;
                      setNewSkill(value);
                    }}
                    title='مهارت جدید'
                    type='text'
                    value={newSkill}
                    variant='light'
                  />
                  <Button
                    type='button'
                    title='افزودن مهارت جدید'
                    variant='success'
                    onClick={() => {
                      setFieldValue("skills", [...values.skills, newSkill]);
                    }}
                  />
                </Grid>
              }>
              {values.skills.map((skill, index) => {
                const name = `skills.[${index}]`;
                return (
                  <Field.Text
                    name={name}
                    icon={<Icon icon='material-symbols:title' />}
                    onChange={handleChange}
                    title='مهارت'
                    type='text'
                    value={skill}
                    variant='light'
                  />
                );
              })}
            </Group>

            <Field.Text
              name='description'
              value={values.description}
              icon={<Icon icon='material-symbols:description' />}
              onChange={handleChange}
              title='توضیحات آگهی'
              type='text'
              variant='light'
              lines={4}
            />

            <Grid
              gridTemplateColumns={"1fr 1fr"}
              gap={"1rem"}
              width={"max-content"}>
              <Button
                type='button'
                variant='success'
                title='ایجاد'
                onClick={() => {
                  ShowQuestion({
                    onConfirm() {
                      CreateCareer(values);
                    },
                  });
                }}
                icon={<Icon icon='oui:ml-create-single-metric-job' />}
              />
              <Button
                type='button'
                variant='danger'
                title='لغو و بستن'
                onClick={() => setShow(false)}
                icon={<Icon icon='line-md:cancel' />}
              />
            </Grid>
          </Group>
        </Grid>
      </Grid>
      <Group header='آکهی های موجود'>
        {data.map((career) => {
          return <Career career={career} />;
        })}
      </Group>
    </Grid>
  );
}
