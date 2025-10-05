"use client";
import { ShowQuestion } from "@/common/toast/toast";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Box, Button, Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import useRedirect from "@/hooks/useRedirect";
import { CreateProductAPI } from "@/services/Products/Products.services";
import { IProudct } from "@/types/Product/Product.types";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import React from "react";

export default function page() {
  const { list } = useRedirect().admin.products;
  const { values, handleChange, setFieldValue } = useFormik<IProudct>({
    initialValues: {
      createdAt: "",
      gallery: [],
      image: undefined as any,
      title: "",
      updatedAt: "",
      description: "",
    },
    onSubmit(values, formikHelpers) {},
  });

  const { mutate: CreateProduct } = useMutation({
    mutationFn: CreateProductAPI,
    onSuccess(data, variables, context) {},
  });

  return (
    <PageContainer title='ایجاد محصول'>
      <Box
        header={
          <Grid>
            <p>ایجاد محصول جدید</p>
          </Grid>
        }>
        <Grid
          width={"30rem"}
          gap={"1rem"}>
          <Field.Text
            type='text'
            name='title'
            onChange={handleChange}
            icon={<Icon icon='proicons:text-case-title' />}
            title='عنوان'
            value={values.title}
            variant='light'
          />
          <Field.Image
            type='single'
            name='image'
            onChange={(image) => setFieldValue("image", image)}
            icon={<Icon icon='line-md:image-twotone' />}
            title='عکس'
            value={values.image}
            variant='light'
          />
          <Field.Image
            type='multi'
            name='gallery'
            onChange={(image) => {
              setFieldValue("gallery", image);
            }}
            icon={
              <Icon icon='material-symbols-light:gallery-thumbnail-outline-sharp' />
            }
            title='گالری'
            values={values.gallery}
            variant='light'
            onSubmit={(images) => {
              setFieldValue("gallery", images);
            }}
          />
          <Field.Text
            type='text'
            name='description'
            onChange={handleChange}
            icon={<Icon icon='proicons:text-case-title' />}
            title='توضیحات'
            value={values.description}
            variant='light'
            lines={4}
          />
          <Button
            type='button'
            variant='success'
            onClick={() => {
              ShowQuestion({
                onConfirm() {
                  CreateProduct(values);
                },
              });
            }}
            title='ثبت و ایجاد'
            icon={<Icon icon='formkit:submit' />}
          />
        </Grid>
      </Box>
    </PageContainer>
  );
}
