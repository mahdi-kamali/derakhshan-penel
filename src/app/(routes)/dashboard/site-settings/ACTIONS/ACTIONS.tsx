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
import { UpdateSiteSettingsAPI } from "@/services/Site-Settings/SiteSettings.services";
import { IPage } from "@/types/Pages/pages.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { ISiteSettings } from "@/types/Site-Settings/SiteSettings.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormikContextType, useFormikContext } from "formik";
import React from "react";

type IAction = {
  show?: boolean;
} & IButtonProps;

interface IProps {
  formik: FormikContextType<ISection>;
}

export default function ACTIONS() {
  const { values, errors } = useFormikContext<ISiteSettings>();
  const { mutate: UpdateSiteSettings } = useMutation({
    mutationFn: UpdateSiteSettingsAPI,
    onSuccess(data, variables, context) {},
  });

  const CREATE: IAction = {
    type: "button",
    title: "ثبت و ویرایش تنظیمات سایت",
    variant: "warning",
    icon: <Icon icon='formkit:submit' />,
    show: true,
    onClick() {
      ShowQuestion({
        onConfirm() {
          UpdateSiteSettings(values);
        },
      });
    },
  };

  const actions = [CREATE];

  return actions
    .filter((action) => action.show)
    .map((action, index) => (
      <Button
        {...action}
        key={index}
      />
    ));
}
