"use client";
import { useFormik } from "formik";
import { ILogin } from "@/types/Auth/Auth.type";
import { LoginAPI } from "@/services/Auth.services";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { useMutation } from "@tanstack/react-query";
import { UserActions } from "@/@redux/user/user.actions";
import useRedirect from "@/hooks/useRedirect";
import VALIDATION from "@/utils/validations";
import Form from "@/components/UI/Form/Form";
import ACTIONS from "./ACTIONS/ACTIONS";
import HEADERS from "./HEADERS/HEADERS";
import BODY from "./BODY/BODY";
import styles from "./styles.module.scss";

export default function Page() {
  const redirect = useRedirect();

  const { mutate: Login, isIdle } = useMutation({
    mutationFn: LoginAPI,
    onSuccess({ data }, variables, context) {
      UserActions.login(data);
      setTimeout(() => redirect.admin.users.list(), 1000);
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
      <div className={styles.form}>
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
      </div>
    </PageContainer>
  );
}
