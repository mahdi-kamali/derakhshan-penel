import Icon from "@/components/UI/Icon/Icon";
import Cell from "@/components/UI/table/components/cells/Cell";
import { IPage } from "@/types/Pages/pages.types";
import {
  ICAREER_IS_ACTIVE,
  IROLE_OPTIONS,
  PAGES_STATUS_OPTIONS,
} from "@/types/Variables";
import { ColDef } from "@ag-grid-community/core";
import useRedirect from "./useRedirect";
import { dateToJalai } from "@/utils/Converters";
import { IMAGE_URL } from "@/common/urls/urls";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  DeleteCareerByIDAPI,
  GetCareersAPI,
} from "@/services/Careers/Careers.services";
import { ShowQuestion } from "@/common/toast/toast";

export default function useColdefs() {
  const { admin } = useRedirect();

  const queryClient = useQueryClient();

  const { mutate: DeleteCareer } = useMutation({
    mutationFn: DeleteCareerByIDAPI,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetCareersAPI.name],
      });
    },
  });

  const usersColDef: ColDef[] = [
    {
      headerName: "شناسه",
      field: "_id",
      width: 250,
    },
    {
      headerName: "شماره تلفن",
      field: "phone",
      width: 150,
    },
    {
      headerName: "نام",
      field: "name",
      width: 150,
    },
    {
      headerName: "رمز عبور",
      field: "password",
      width: 150,
    },
    {
      headerName: "نقش",
      field: "role",
      type: "STATUS",
      cellRendererParams: {
        OPTIONS: IROLE_OPTIONS,
      },
    },
    {
      headerName: "تاریخ ایجاد",
      field: "createdAt",
      width: 180,
      valueFormatter: (params) =>
        new Date(params.value).toLocaleString("fa-IR"),
    },
    {
      headerName: "آخرین بروزرسانی",
      field: "updatedAt",
      width: 180,
      valueFormatter: (params) =>
        new Date(params.value).toLocaleString("fa-IR"),
    },
    {
      headerName: "عملیات",
      field: "_id",
      cellRenderer: () => {
        return (
          <Cell.Container>
            <Cell.Button
              variant='success'
              icon={<Icon icon='line-md:edit-filled' />}
              onClick={() => alert("ok")}
              title='ویرایش'
              loading={false}
            />
          </Cell.Container>
        );
      },
    },
  ];

  const pagesColDef: ColDef<IPage>[] = [
    {
      headerName: "عنوان",
      field: "title",
    },
    {
      headerName: "اسلاگ",
      field: "slug",
    },
    {
      headerName: "محتوا",
      field: "sections",
      cellRenderer: ({ data }: { data: IPage }) => {
        const { sections } = data;

        return (
          <Cell.Button
            title='ویرایش'
            icon={<Icon icon='line-md:edit-filled' />}
            onClick={() => admin.pages.sections.edit(data._id)}
            variant='warning'
          />
        );
      },
    },
    {
      field: "status",
      headerName: "وضعیت",
      type: "STATUS",
      cellRendererParams: {
        OPTIONS: PAGES_STATUS_OPTIONS,
      },
    },
  ];

  const careersColDef: ColDef[] = [
    {
      field: "image",
      headerName: "تصویر",
      cellRenderer: (params: any) => {
        const value = params.value?.path;
        return (
          <img
            src={IMAGE_URL(value)}
            alt=''
            style={{
              aspectRatio: "16/10",
              objectFit: "contain",
              width: "100%",
            }}
          />
        );
      },
    },
    { field: "title", headerName: "عنوان" },
    { field: "description", headerName: "توضیحات" },
    {
      field: "skills",
      headerName: "مهارت‌ها",
      valueGetter: (params) => params.data.skills?.join(" , ") || "-",
      cellRenderer: (params: any) => {
        const value = params.value;
        return (
          <Cell.ToolTip
            content={<p>{value}</p>}
            icon={<Icon icon='fluent-mdl2:view' />}
            label='مشاهده'
            variant='success'
          />
        );
      },
    },
    {
      headerName: "وضعیت",
      field: "isActive",
      type: "STATUS",
      cellDataType: "text",
      cellRendererParams: {
        OPTIONS: ICAREER_IS_ACTIVE,
      },
    },
    {
      field: "updatedAt",
      headerName: "تاریخ بروزرسانی",
      cellRenderer: (params: any) => {
        const value = params.value;
        return (
          <Cell.Container>
            <p>{dateToJalai(value)}</p>
          </Cell.Container>
        );
      },
    },
    {
      field: "_id",
      headerName: "عملیات",
      minWidth: 200,
      cellRenderer: (params: any) => {
        const _id = params.value;
        return (
          <Cell.Container gap={"0.5rem"}>
            <Cell.Button
              title='ویرایش'
              variant='warning'
              onClick={() => admin.careers.edit(_id)}
              icon={<Icon icon='line-md:edit-filled' />}
            />
            <Cell.Button
              title='حذف'
              variant='danger'
              onClick={() => {
                ShowQuestion({
                  onConfirm() {
                    DeleteCareer(_id);
                  },
                });
              }}
              icon={<Icon icon='material-symbols-light:delete-rounded' />}
            />
          </Cell.Container>
        );
      },
    },
  ];

  return {
    pagesColDef,
    usersColDef,
    careersColDef,
  };
}
