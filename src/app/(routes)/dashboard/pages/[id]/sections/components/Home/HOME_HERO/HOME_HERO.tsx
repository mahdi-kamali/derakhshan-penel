import { Box, Field, Grid } from "@/components/UI";
import Form from "@/components/UI/Form/Form";
import Icon from "@/components/UI/Icon/Icon";
import useClient from "@/hooks/useClient";
import {
  CreateSectionAPI,
  GetPageSectionsAPI,
} from "@/services/Pages/Sections/Sections.services";
import { IPage } from "@/types/Pages/pages.types";
import { ISectionsBase } from "@/types/Pages/Sections/Sections.types";
import { SECTIONS_OPTIONS } from "@/types/Variables";
import { FindErrorKey } from "@/utils/validations";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";

type IProps = {
  page_id?: IPage["_id"];
  section?: ISectionsBase;
};

export default function HOME_HERO(props: IProps) {
  const { page_id, section } = props;

  const isCreating = !!page_id;
  const isUpdating = page_id === undefined;

  const queryClient = useQueryClient();

  const { values, setFieldValue, handleChange, errors, setValues } = useFormik({
    initialValues: {
      name: "",
      type: "HOME_HERO",
      components: {
        EN: {
          experience: "",
          logo: "",
          tagline: "",
        },
        FA: {
          experience: "",
          logo: "",
          tagline: "",
        },
      },
      isActive: true,
    } as ISectionsBase,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("نام الزامی است"),
      type: Yup.string().required("نوع الزامی است"),
      components: Yup.object().shape({
        EN: Yup.object({
          experience: Yup.string().required("فیلد experience (EN) الزامی است"),
          logo: Yup.object().required("فیلد logo (EN) الزامی است"),
          tagline: Yup.string().required("فیلد tagline (EN) الزامی است"),
        }),
        FA: Yup.object({
          experience: Yup.string().required("فیلد experience (FA) الزامی است"),
          logo: Yup.object().required("فیلد logo (FA) الزامی است"),
          tagline: Yup.string().required("فیلد tagline (FA) الزامی است"),
        }),
      }),
      isActive: Yup.boolean().required("فعال بودن الزامی است"),
    }),
    onSubmit(values, formikHelpers) {},
  });

  const { mutate: CreateSection } = useMutation({
    mutationFn: () => CreateSectionAPI(page_id!!, values),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetPageSectionsAPI.name],
      });
    },
  });

  useEffect(() => {
    if (isCreating) return;
    setValues({ ...section!! });
  }, [section]);

  return (
    <Form
      disabled={!!section}
      tabs={[
        {
          label: "فارسی",
          icon: <Icon icon='emojione:flag-for-iran' />,
        },
        {
          label: "انگلیسی",
          icon: <Icon icon='emojione:flag-england' />,
        },
      ]}
      actions={{
        submit: {
          title: "ثبت و ایجاد",
          enabled: true,
          onSubmit() {
            CreateSection();
          },
        },
        cancel: {
          title: "لغو",
          enabled: true,
          onCancel() {},
        },
      }}>
      {({ goNext, goPrev }) => {
        return [
          <Grid
            gap={"1rem"}
            gridTemplateColumns={"1fr "}>
            <Field.Text
              variant='light'
              icon={<Icon icon='fluent:slide-text-title-edit-16-filled' />}
              name='name'
              type='text'
              onChange={handleChange}
              title='نام'
              value={values.name}
              validation={{
                errorMessage: FindErrorKey(errors, "name"),
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
                errorMessage: FindErrorKey(errors, "type"),
              }}
              placeHodler='نوع سکشن را انتخاب کنید..'
              options={SECTIONS_OPTIONS}
              disabled={true}
            />

            <Field.Text
              variant='light'
              name='components.FA.experience'
              type='text'
              icon={<Icon icon='mdi:company' />}
              onChange={handleChange}
              title='تجربیات'
              value={values.components.FA.experience}
              validation={{
                errorMessage: FindErrorKey(errors, "components.FA.experience"),
              }}
              lines={5}
            />

            <Field.Text
              variant='light'
              name='components.FA.tagline'
              type='text'
              icon={<Icon icon='mdi:company' />}
              onChange={handleChange}
              title='شعار شرکت'
              value={values.components.FA.tagline}
              validation={{
                errorMessage: FindErrorKey(errors, "components.FA.tagline"),
              }}
            />

            <Field.Image
              type='single'
              name='components.FA.logo'
              icon={<Icon icon='ri:image-fill' />}
              onChange={(file) => {
                setFieldValue("components.FA.logo", file);
              }}
              title='لوگو'
              value={values.components.FA.logo}
              validation={{
                errorMessage: FindErrorKey(errors, "components.FA.logo"),
              }}
              placeHodler='لوگو را انتخاب کنید...'
              variant='light'
            />
          </Grid>,

          <Grid
            gap={"1rem"}
            gridTemplateColumns={"1fr "}>
            <Field.Text
              variant='light'
              name='components.EN.experience'
              type='text'
              icon={<Icon icon='mdi:company' />}
              onChange={handleChange}
              title='تجربیات'
              value={values.components.EN.experience}
              validation={{
                errorMessage: FindErrorKey(errors, "components.EN.experience"),
              }}
              lines={5}
            />

            <Field.Text
              variant='light'
              name='components.EN.tagline'
              type='text'
              icon={<Icon icon='mdi:company' />}
              onChange={handleChange}
              title='شعار شرکت'
              value={values.components.EN.tagline}
              validation={{
                errorMessage: FindErrorKey(errors, "components.EN.tagline"),
              }}
            />

            <Field.Image
              type='single'
              name='components.EN.logo'
              icon={<Icon icon='ri:image-fill' />}
              onChange={(file) => {
                setFieldValue("components.EN.logo", file);
              }}
              title='لوگو'
              value={values.components.EN.logo}
              validation={{
                errorMessage: FindErrorKey(errors, "components.EN.logo"),
              }}
              placeHodler='لوگو را انتخاب کنید...'
              variant='light'
            />
          </Grid>,
        ];
      }}
    </Form>
  );
}
