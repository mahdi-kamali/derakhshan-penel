"use client";
import { FormikProvider, useFormik } from "formik";
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
import Form from "@/components/UI/Form/Form";
import ACTIONS from "./ACTIONS/ACTIONS";
import HEADERS from "./HEADERS/HEADERS";
import BODY from "./BODY/BODY";

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

  return (
    <PageContainer
      title='ورود به داشبورد'
      isLoading={isIdle}>
      <Form
        formik={formik}
        width='25rem'>
        {() => ({
          TABS: () => [],
          HEADERS: HEADERS,
          BODY: BODY,
          ACTIONS: ACTIONS,
        })}
      </Form>
    </PageContainer>
  );
}
