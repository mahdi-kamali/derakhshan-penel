"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Box, Button, Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { IUser } from "@/types/User/user.types";
import { useFormik } from "formik";
import { IROLE_OPTIONS } from "../../../../../types/Variables";
import { ShowQuestion } from "@/common/toast/toast";
import useRedirect from "@/hooks/useRedirect";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetUserByIdAPI, UpdateUserAPI } from "@/services/Users.services";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { id } = useParams();

  const { admin } = useRedirect();

  const { mutate: UpdateUser } = useMutation({
    mutationFn: UpdateUserAPI,
    onSuccess(data, variables, context) {
      admin.users.list();
    },
  });

  const { data } = useQuery({
    queryFn: () => GetUserByIdAPI(id as string),
    initialData: {
      data: {
        name: "",
        phone: "",
        role: "Admin",
        token: "",
        _id: "",
        password: "",
        createdAt : "",
        updatedAt :""
      },
      message: "",
      status: 200,
    },
    queryKey: [GetUserByIdAPI.name],
  });

  const { values, setFieldValue, handleChange, submitForm, setValues } =
    useFormik<IUser>({
      initialValues: {
        name: "",
        phone: "",
        role: "User",
        token: "",
        createdAt : "",
        updatedAt : ""
      },
      onSubmit(values, formikHelpers) {
        UpdateUser(values);
      },
    });

  useEffect(() => {
    if (data.data) setValues(data.data);
  }, [data.data]);

  return (
    <PageContainer title='ویرایش کاربر'>
      <Box
        maxContent={true}
        header={"ویرایش کاربری"}>
        <Grid
          width={"30rem"}
          gridTemplateColumns={"1fr 1fr"}
          gap={"1rem"}>
          <Field.Text
            title='نام کاربر'
            variant='light'
            icon={<Icon icon='icon-park-solid:edit-name' />}
            name='name'
            onChange={handleChange}
            type='text'
            value={values.name}
          />
          <Field.Text
            title='تلفن'
            variant='light'
            icon={<Icon icon='icon-park-solid:edit-name' />}
            name='phone'
            onChange={handleChange}
            type='text'
            value={values.phone}
          />
          <Field.Text
            title='رمزعبور'
            variant='light'
            icon={<Icon icon='icon-park-solid:edit-name' />}
            name='password'
            onChange={handleChange}
            type='password'
            value={values.password || ""}
          />
          <Field.Select
            title='نقش'
            variant='light'
            icon={<Icon icon='icon-park-solid:edit-name' />}
            name='role'
            onChange={(value) => setFieldValue("role", value.value)}
            options={IROLE_OPTIONS}
            value={values.role}
          />
          <Grid
            gridColumn={"-1/1"}
            gap={"1rem"}
            gridTemplateColumns={"1fr 1fr"}>
            <Button
              type='button'
              variant='success'
              title='ثبت و ویرایش'
              icon={<Icon icon='formkit:submit' />}
              onClick={() => {
                ShowQuestion({
                  onConfirm() {
                    submitForm();
                  },
                });
              }}
            />
            <Button
              type='button'
              variant='warning'
              title='برگشت به لیست'
              icon={<Icon icon='f7:return' />}
              onClick={() => {
                admin.users.list();
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
