"use client";
import { ShowQuestion } from "@/common/toast/toast";
import Product from "@/components/common/Product/Product";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Box, Button, Field, Grid, Group } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import SelectModal from "@/components/UI/SelectModal/SelectModal";
import { CreateCategoryAPI } from "@/services/Category/Category.services";
import { GetProductsAPI } from "@/services/Products/Products.services";
import { ICategory } from "@/types/Category/Category.types";
import { IProudct } from "@/types/Product/Product.types";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useState } from "react";

export default function page() {
  const [showModal, setShowModal] = useState(false);

  const { handleChange, setFieldValue, values } = useFormik<ICategory>({
    initialValues: {
      title: "",
      image: undefined as any,
      createdAt: "",
      updatedAt: "",
      products: [],
    },
    onSubmit(values, formikHelpers) {},
  });

  const { mutate: CreateCategory } = useMutation({
    mutationFn: CreateCategoryAPI,
    onSuccess(data, variables, context) {},
  });

  return (
    <PageContainer title='ایجاد دسته بندی'>
      <Box
        header={
          <Grid>
            <p>ایجاد دسته بندی</p>
          </Grid>
        }>
        <Grid
          width={"30rem"}
          gap={"1rem"}>
          <Grid gap={"1rem"}>
            <Field.Text
              name='title'
              icon={<Icon icon='proicons:text-case-title' />}
              onChange={handleChange}
              title='عنوان دسته بندی'
              type='text'
              value={values.title}
              placeHodler='عنوان دسته بندی'
              variant='light'
            />
            <Field.Image
              name='image'
              icon={<Icon icon='line-md:image-twotone' />}
              onChange={(image) => setFieldValue("image", image)}
              title='عکس'
              placeHodler='عکس'
              variant='light'
              type='single'
              value={values.image}
            />
            <SelectModal<IProudct>
              api={GetProductsAPI}
              mode='multi'
              onClose={() => setShowModal(false)}
              onRenderRow={(row, index) => {
                return <Product product={row} />;
              }}
              onSubmit={() => {}}
              values={values.products}
              show={showModal}
              onChange={(products) => {
                setFieldValue("products", products);
              }}
            />
          </Grid>
          <Group
            header='محصولات'
            gap={"1rem"}>
            <Grid
              gap={"1rem"}
              color='black'
              maxHeight={"30rem"}
              overflow='auto'>
              {values.products.map((pro) => {
                return <Product product={pro} />;
              })}
            </Grid>

            <Grid marginTop={"auto"}>
              <Button
                type='button'
                variant='primary'
                title='انتخاب محصولات'
                onClick={() => setShowModal(true)}
                icon={<Icon icon='oui:page-select' />}
              />
            </Grid>
          </Group>
          <Grid>
            <Button
              type='button'
              variant='success'
              title='ثبت و ایجاد'
              icon={<Icon icon='formkit:submit' />}
              onClick={() =>
                ShowQuestion({
                  onConfirm() {
                    CreateCategory(values);
                  },
                })
              }
            />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
