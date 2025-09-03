import { ShowQuestion } from "@/common/toast/toast";
import { Button } from "@/components/UI";
import { IButtonProps } from "@/components/UI/Button/types/Buttons.types";
import Icon from "@/components/UI/Icon/Icon";
import {
  CreateSectionAPI,
  DeleteSectionByIdAPI,
  GetPageSectionsAPI,
} from "@/services/Pages/Sections/Sections.services";
import { IPage } from "@/types/Pages/pages.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormikContextType } from "formik";
import React from "react";

type IAction = {
  show?: boolean;
} & IButtonProps;

interface IProps {
  formik: FormikContextType<ISection>;
  page_id?: IPage["_id"];
  section_id?: ISection["_id"];
  isCreating: boolean;
  isUpdating: boolean;
}

export default function ACTIONS(props: IProps) {
  const { formik, page_id, section_id, isCreating, isUpdating } = props;

  const { values } = formik;

  const queryClient = useQueryClient();

  const { mutate: CreateSection } = useMutation({
    mutationFn: () => CreateSectionAPI(page_id!!, values),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetPageSectionsAPI.name],
      });
    },
  });

  const { mutate: DeleteSection } = useMutation({
    mutationFn: () => DeleteSectionByIdAPI(page_id!!, section_id!!),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetPageSectionsAPI.name],
      });
    },
  });

  const EDIT: IAction = {
    type: "button",
    title: "ویرایش",
    variant: "warning",
    icon: <Icon icon='line-md:edit-filled' />,
    show: isUpdating,
    onClick() {
      ShowQuestion({
        onConfirm() {
          CreateSection();
        },
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
          CreateSection();
        },
      });
    },
  };

  const DELETE: IAction = {
    type: "button",
    title: "حذف",
    variant: "danger",
    icon: <Icon icon='carbon:close-filled' />,
    show: isUpdating,
    onClick() {
      ShowQuestion({
        onConfirm() {
          DeleteSection();
        },
      });
    },
  };

  const CLOSE: IAction = {
    type: "button",
    title: "لغو و بستن",
    variant: "danger",
    icon: <Icon icon='carbon:close-filled' />,
    show: isCreating,
    onClick() {},
  };

  return [EDIT, CREATE, DELETE, CLOSE]
    .filter((action) => action.show)
    .map((action) => <Button {...action} />);
}
