import { ShowQuestion } from "@/common/toast/toast";
import { Button } from "@/components/UI";
import { IButtonProps } from "@/components/UI/Button/types/Buttons.types";
import Icon from "@/components/UI/Icon/Icon";
import useRedirect from "@/hooks/useRedirect";
import { CreateCareerAPI } from "@/services/Careers/Careers.services";
import {
  AddSectionToPageAPI,
  GetPageByIdAPI,
  GetPagesAPI,
} from "@/services/Pages/Pages.services";

import { ICareer } from "@/types/Career/Career.types";
import { IPage } from "@/types/Pages/pages.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormikContextType, useFormikContext } from "formik";
import React from "react";

type IAction = {
  show?: boolean;
} & IButtonProps;

interface IProps {
  formik: FormikContextType<ICareer>;
  isCreating: boolean;
  isUpdating: boolean;
}

export default function ACTIONS(props: IProps) {
  const { isCreating, isUpdating } = props;
  const { values } = useFormikContext<ICareer>();

  const { mutate: CreateCareer, isIdle } = useMutation({
    mutationFn: CreateCareerAPI,
    onSuccess(data, variables, context) {},
  });

  const { admin } = useRedirect();

  const EDIT: IAction = {
    type: "button",
    title: "ویرایش",
    variant: "warning",
    icon: <Icon icon='line-md:edit-filled' />,
    show: isUpdating,
    onClick() {
      ShowQuestion({
        onConfirm() {},
      });
    },
  };

  const CREATE: IAction = {
    type: "button",
    title: "ثبت و ایجاد",
    variant: "success",
    icon: <Icon icon='formkit:submit' />,
    show: isCreating,
    onClick() {
      ShowQuestion({
        onConfirm() {
          CreateCareer(values);
        },
      });
    },
  };

  const CLOSE: IAction = {
    type: "button",
    title: "برو به لیست اگهی ها",
    variant: "danger",
    icon: <Icon icon='carbon:close-filled' />,
    show: true,
    onClick() {
      admin.careers.list();
    },
  };

  return [EDIT, CREATE, CLOSE]
    .filter((action) => action.show)
    .map((action, index) => (
      <Button
        {...action}
        key={index}
      />
    ));
}
