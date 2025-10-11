"use client";
import { ShowQuestion } from "@/common/toast/toast";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Box, Button, Field, Grid, Group } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import useRedirect from "@/hooks/useRedirect";
import {
  CreateCareerAPI,
  GetCareerByIDAPI,
  UpdateCareerAPI,
} from "@/services/Careers/Careers.services";
import { ICareer } from "@/types/Career/Career.types";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const { _id } = useParams();

  const { admin } = useRedirect();

  const { values, setFieldValue, handleChange, setValues } = useFormik<ICareer>(
    {
      initialValues: {
        type : "NORMAL",
        createdAt: "",
        description: "",
        image: undefined as any,
        isActive: true,
        skills: ["مهارت شماره یک"],
        title: "",
        updatedAt: "",
      },
      onSubmit(values, formikHelpers) {},
    },
  );

  const removeSkill = (target: number) => {
    const news = values.skills.filter((skill, index) => {
      return index !== target;
    });
    setFieldValue("skills", news);
  };

  const { mutate: UpdateCareer, isIdle } = useMutation({
    mutationFn: UpdateCareerAPI,
    onSuccess(data, variables, context) {},
  });

  const { mutate: GetCareer } = useMutation({
    mutationFn: () => GetCareerByIDAPI(_id as string),
    onSuccess(data, variables, context) {
      setValues(data.data);
    },
  });

  useEffect(() => {
    GetCareer();
  }, []);

  return (
    <PageContainer
      title='ویرایش آگهی جدید'
      isLoading={isIdle}>
      <Box header={<></>}>
        <Grid
          gap={"1rem"}
          gridTemplateColumns={"1fr"}
          width={"30rem"}>
          <Field.Text
            icon={<Icon icon='ic:twotone-title' />}
            name='title'
            onChange={handleChange}
            title={"عنوان آگهی"}
            type='text'
            value={values.title}
            variant='light'
            lines={2}
          />

          <Group header='مهارت های مورد نیاز'>
            <Grid
              gap={"1rem"}
              maxHeight={"30rem"}
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
                      name={`skills[${index}]`}
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
                  setFieldValue("skills", [...values.skills, ""]);
                }}
              />
            </Grid>
          </Group>

          <Field.Text
            icon={<Icon icon='streamline-plump:description-solid' />}
            name='description'
            onChange={handleChange}
            title='توضیحات آگهی'
            type='text'
            value={values.description}
            variant='light'
            lines={5}
          />

          <Field.Image
            icon={<Icon icon='line-md:image-filled' />}
            name='image'
            onChange={(image) => {
              setFieldValue("image", image);
            }}
            title='عکس آگهی'
            type='single'
            value={values.image}
            variant='light'
          />

          <Grid
            marginTop={"1rem"}
            gridTemplateColumns={"1fr 1fr"}
            gap={"1rem"}>
            <Button
              type='button'
              title='ثبت و ویرایش'
              variant='warning'
              onClick={() => {
                ShowQuestion({
                  onConfirm() {
                    UpdateCareer(values);
                  },
                });
              }}
              icon={<Icon icon='formkit:submit' />}
            />
            <Button
              type='button'
              title='بازگشت به لیست'
              variant='danger'
              onClick={admin.careers.list}
              icon={<Icon icon='icon-park-outline:return' />}
            />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
