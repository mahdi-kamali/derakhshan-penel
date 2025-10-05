"use client";
import { IResponse } from "@/common/axios/axios";
import { ShowQuestion } from "@/common/toast/toast";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Box, Button, Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import useRedirect from "@/hooks/useRedirect";
import {
  GetProductByIdAPI,
  UpadateProductByIdAPI,
} from "@/services/Products/Products.services";
import { IProudct } from "@/types/Product/Product.types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

export default function page() {
  const { id } = useParams();

  const { list } = useRedirect().admin.products;

  const { mutate: CreateProduct } = useMutation({
    mutationFn: UpadateProductByIdAPI,
    onSuccess(data, variables, context) {
      list();
    },
  });

  const { data } = useQuery<IResponse<IProudct>>({
    queryFn: () => GetProductByIdAPI(id as string),
    initialData: {} as any,
    queryKey: [GetProductByIdAPI.name],
  });

  const { values, handleChange, setFieldValue, setValues } =
    useFormik<IProudct>({
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

  useEffect(() => {
    if (data.data === undefined) return;
    setValues(data.data);
  }, [data.data]);

  return (
    <PageContainer title='ویرایش محصول'>
      <Box
        header={
          <Grid>
            <p>ویرایش محصول</p>
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
            variant='warning'
            onClick={() => {
              ShowQuestion({
                onConfirm() {
                  CreateProduct(values);
                },
              });
            }}
            title='ثبت و ویرایش'
            icon={<Icon icon='formkit:submit' />}
          />
        </Grid>
      </Box>
    </PageContainer>
  );
}
