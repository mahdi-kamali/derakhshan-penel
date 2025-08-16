"use client";
import { Form, FormikProvider, useFormik } from "formik";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ILogin } from "@/types/Auth/Auth.type";
import { LoginAPI } from "@/services/Auth.services";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Field, Button, Grid } from "@/components/UI";
import { useMutation } from "@tanstack/react-query";
import { UserActions } from "@/@redux/user/user.actions";
import useRedirect from "@/hooks/useRedirect";
import Icon from "@/components/UI/Icon/Icon";
import VALIDATION from "@/utils/validations";

export default function Page() {
  const redirect = useRedirect();

  const { mutate: Login, isIdle } = useMutation({
    mutationFn: LoginAPI,
    onSuccess({ data, token }, variables, context) {
      UserActions.login({ ...data, token });
      setTimeout(() => redirect.admin.GoUsers(), 1000);
    },
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      phone: "",
    } as ILogin,
    onSubmit: (values) => Login(values),
    validationSchema: VALIDATION.AUTH.LOGIN,
  });

  const { values, errors, isSubmitting, handleChange } = formik;

  return (
    <PageContainer
      title='ورود'
      isLoading={isIdle}>
      <FormikProvider value={formik}>
        <Form className={styles.form}>
          <div className={styles.container}>
            <div className={styles.header}>
              <Image
                src={"/images/logo_auth.png"}
                alt=''
                width={150}
                height={150}
              />
              <h2>سلام , خوش آمدید!</h2>
            </div>
            <Grid
              width='80%'
              gap='0'
              margin='0 auto'>
              <Field.Text
                name='phone'
                type='text'
                icon={<Icon icon='line-md:phone' />}
                onChange={handleChange}
                value={values.phone}
                placeHodler='شماره تلفن'
                validation={{
                  errorMessage: errors.phone,
                }}
                title='شماره تلفن'
              />

              <Grid marginTop={"1rem"}>
                <Field.Text
                  name='password'
                  type='password'
                  icon={<Icon icon='mdi:password' />}
                  onChange={handleChange}
                  value={values.password}
                  placeHodler='رمز عبور'
                  title='رمز عبور'
                  validation={{
                    errorMessage: errors.password,
                  }}
                />
              </Grid>
            </Grid>

            <div className={styles.helps}>
              ورود/ثبت نام، به معناى بذيرش
              <Link href={"test"}> مقررات وشرايط استفاده ازخدمات </Link> و سياست
              حفظ
              <Link href={""}> سیاست حفط حریم خصوصی </Link>
              ما است
            </div>

            <Grid
              gridTemplateColumns='1fr'
              gap='0'
              width='80%'
              margin='0 auto'>
              <Button
                title={"ورود"}
                variant='success'
                type='submit'
                style={{
                  padding: "0.9em",
                  fontWeight: "bold",
                }}
              />
            </Grid>
          </div>
        </Form>
      </FormikProvider>
    </PageContainer>
  );
}
