import Icon from "@/components/UI/Icon/Icon";
import Cell from "@/components/UI/table/components/cells/Cell";
import { IPage } from "@/types/Pages/pages.types";
import { IROLE_OPTIONS, PAGES_STATUS_OPTIONS } from "@/types/Variables";
import { ColDef } from "@ag-grid-community/core";
import useRedirect from "./useRedirect";

export default function useColdefs() {
  const { admin } = useRedirect();

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

  return {
    pagesColDef,
    usersColDef,
  };
}
