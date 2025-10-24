"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Box, Button, Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { IUser } from "@/types/User/user.types";
import { useFormik } from "formik";
import { IROLE_OPTIONS } from "../../../../../types/Variables";
import { ShowQuestion } from "@/common/toast/toast";
import useRedirect from "@/hooks/useRedirect";

export default function page() {


  const {admin} = useRedirect()

  const { values, setFieldValue, handleChange, submitForm } = useFormik<IUser>({
    initialValues: {
      name: "",
      phone: "",
      role: "User",
      token: "",
    },
    onSubmit(values, formikHelpers) {},
  });

  return (
    <PageContainer title='ایجاد کاربر'>
      <Box header={<>ایجاد کاربر</>}>
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
            name='name'
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
            onChange={(value) => setFieldValue("role", value)}
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
              title='ثبت و ایجاد'
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
                admin.GoUsers()
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
