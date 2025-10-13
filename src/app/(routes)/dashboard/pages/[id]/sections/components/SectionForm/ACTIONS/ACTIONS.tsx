import { ShowQuestion } from "@/common/toast/toast";
import { Button } from "@/components/UI";
import { IButtonProps } from "@/components/UI/Button/types/Buttons.types";
import Icon from "@/components/UI/Icon/Icon";
import {
  AddSectionToPageAPI,
  GetPageByIdAPI,
  GetPagesAPI,
} from "@/services/Pages/Pages.services";
import {
  CreateSectionAPI,
  DeleteSectionByIdAPI,
  UpdateSectionAPI,
} from "@/services/Sections/Sections.services";
import { IPage } from "@/types/Pages/pages.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormikContextType, useFormikContext } from "formik";
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
  const { page_id, section_id, isCreating, isUpdating } = props;
  const { values, errors } = useFormikContext<ISection>();
  const queryClient = useQueryClient();

  const { mutate: AddSectionToPage } = useMutation({
    mutationFn: AddSectionToPageAPI,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetPageByIdAPI.name],
      });
    },
  });

  const { mutate: CreateSection } = useMutation({
    mutationFn: CreateSectionAPI,
    onSuccess(data, variables, context) {
      AddSectionToPage({
        page_id: page_id as string,
        section_id: data.data._id,
      });
    },
  });

  const { mutate: UpdateSection } = useMutation({
    mutationFn: UpdateSectionAPI,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetPageByIdAPI.name],
      });
    },
  });

  const { mutate: DeleteSection } = useMutation({
    mutationFn: () => DeleteSectionByIdAPI(section_id as string),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetPageByIdAPI.name],
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
          UpdateSection(values);
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
          CreateSection(values);
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
    show: false,
    onClick() {},
  };

  return [EDIT, CREATE, DELETE, CLOSE]
    .filter((action) => action.show)
    .map((action, index) => (
      <Button
        {...action}
        key={index}
      />
    ));
}
