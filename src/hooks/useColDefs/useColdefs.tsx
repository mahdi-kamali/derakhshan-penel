import Icon from "@/components/UI/Icon/Icon";
import Cell from "@/components/UI/table/components/cells/Cell";
import { IPage } from "@/types/Pages/pages.types";
import {
  CONTACT_US_STATUS_OPTIONS,
  ICAREER_IS_ACTIVE,
  ICAREER_TYPES,
  IOption,
  IROLE_OPTIONS,
  PAGES_STATUS_OPTIONS,
} from "@/types/Variables";
import useRedirect from "../useRedirect";
import { dateToJalai } from "@/utils/Converters";
import { IMAGE_URL } from "@/common/urls/urls";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  DeleteCareerByIDAPI,
  GetCareersAPI,
  UpdateCareerAPI,
} from "@/services/Careers/Careers.services";
import { ShowQuestion } from "@/common/toast/toast";
import { Grid } from "@/components/UI";
import { ICareer } from "@/types/Career/Career.types";
import { IContactUs } from "@/types/Contact-us/Contact_us.types";
import { IUser } from "@/types/User/user.types";
import { IColDef } from "./useColdefs.types";
import {
  GetContactUsAPI,
  UpdateContactUsAPI,
} from "@/services/Contact-us/Contact_us.services";

export default function useColdefs() {
  const { admin } = useRedirect();
  const queryClient = useQueryClient();

  const { mutate: DeleteCareer } = useMutation({
    mutationFn: DeleteCareerByIDAPI,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [GetCareersAPI.name] });
    },
  });

  const { mutate: UpdateCareer } = useMutation({
    mutationFn: UpdateCareerAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GetCareersAPI.name] });
    },
  });

  const { mutate: UpdateContactUs } = useMutation({
    mutationFn: UpdateContactUsAPI,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetContactUsAPI.name],
      });
    },
  });

  // ---------------- USERS ----------------
  const usersColDef: IColDef<IUser>[] = [
    { headerName: "شماره تلفن", field: "phone", type: "TEXT" },
    { headerName: "نام", field: "name", type: "TEXT" },
    {
      headerName: "نقش",
      field: "role",
      type: "STATUS",
      cellRendererParams: { OPTIONS: IROLE_OPTIONS },
    },
    {
      headerName: "تاریخ ایجاد",
      field: "createdAt",
      type: "DATE",
    },
    {
      headerName: "آخرین بروزرسانی",
      field: "updatedAt",
      type: "DATE",
    },
    {
      headerName: "عملیات",
      field: "_id",
      minWidth: 180,
      type: "ACTIONS",
      cellRenderer: () => (
        <Cell.Container>
          <Cell.Button
            variant='success'
            icon={<Icon icon='line-md:edit-filled' />}
            onClick={() => alert("ok")}
            title='ویرایش'
            loading={false}
          />
        </Cell.Container>
      ),
    },
  ];

  // ---------------- PAGES ----------------
  const pagesColDef: IColDef<IPage>[] = [
    { headerName: "عنوان", field: "title", type: "TEXT" },
    { headerName: "اسلاگ", field: "slug", type: "TEXT" },
    {
      headerName: "محتوا",
      field: "sections",
      type: "ACTIONS",
      cellRenderer: ({ data }) => (
        <Cell.Button
          title='ویرایش'
          icon={<Icon icon='line-md:edit-filled' />}
          onClick={() => admin.pages.sections.edit(data._id)}
          variant='warning'
        />
      ),
    },
    {
      field: "status",
      headerName: "وضعیت",
      type: "STATUS",
      cellRendererParams: { OPTIONS: PAGES_STATUS_OPTIONS },
    },
  ];

  // ---------------- CAREERS ----------------
  const careersColDef: IColDef<ICareer>[] = [
    {
      field: "image",
      headerName: "تصویر",
      type: "TEXT",
      cellRenderer: ({ value }) => {
        const path = value?.path;
        return (
          <img
            src={IMAGE_URL(path)}
            alt=''
            style={{ objectFit: "contain", width: "100%" }}
          />
        );
      },
    },
    { field: "title", headerName: "عنوان", minWidth: 200, type: "TEXT" },
    {
      field: "description",
      headerName: "توضیحات",
      type: "TOOLTIP",
      cellRenderer: ({ value }) => (
        <Cell.ToolTip
          icon={<Icon icon='fluent-mdl2:view' />}
          label='مشاهده'
          variant='success'>
          <p>{value}</p>
        </Cell.ToolTip>
      ),
    },
    {
      field: "skills",
      headerName: "مهارت‌ها",
      type: "TOOLTIP",
      cellRenderer: ({ value }) => (
        <Cell.ToolTip
          icon={<Icon icon='fluent-mdl2:view' />}
          label='مشاهده'
          variant='success'>
          <Grid gap='0.5rem'>
            {value.map((val: string, i: number) => (
              <Grid
                key={i}
                type='flex'
                alignItems='center'
                gap='0.5rem'>
                <Icon
                  icon='tdesign:circle-filled'
                  fontSize='0.5rem'
                />
                <span>{val}</span>
              </Grid>
            ))}
          </Grid>
        </Cell.ToolTip>
      ),
    },
    {
      headerName: "وضعیت",
      field: "isActive",
      type: "STATUS",
      cellRendererParams: { OPTIONS: ICAREER_IS_ACTIVE },
    },
    {
      headerName: "نوع",
      field: "type",
      type: "SELECT",
      minWidth: 200,
      cellRendererParams: {
        OPTIONS: ICAREER_TYPES,
        onChange: (value: IOption, data: ICareer) => {
          ShowQuestion({
            onConfirm() {
              UpdateCareer({ ...data, type: value.value });
            },
          });
        },
      },
    },
    {
      field: "updatedAt",
      headerName: "تاریخ بروزرسانی",
      type: "DATE",
      cellRenderer: ({ value }) => (
        <Cell.Container>
          <p>{dateToJalai(value)}</p>
        </Cell.Container>
      ),
    },
    {
      field: "_id",
      headerName: "عملیات",
      minWidth: 200,
      type: "ACTIONS",
      cellRenderer: ({ value }) => (
        <Cell.Container gap='0.5rem'>
          <Cell.Button
            title='ویرایش'
            variant='warning'
            onClick={() => admin.careers.edit(value)}
            icon={<Icon icon='line-md:edit-filled' />}
          />
          <Cell.Button
            title='حذف'
            variant='danger'
            onClick={() =>
              ShowQuestion({
                onConfirm() {
                  DeleteCareer(value);
                },
              })
            }
            icon={<Icon icon='material-symbols-light:delete-rounded' />}
          />
        </Cell.Container>
      ),
    },
  ];

  // ---------------- CONTACT US ----------------
  const contactUsColDef: IColDef<IContactUs>[] = [
    { headerName: "نام", field: "firstName", type: "TEXT" },
    {
      headerName: "نام خانوادگی",
      field: "lastName",
      type: "TEXT",
    },
    { headerName: "تلفن", field: "phone", type: "TEXT" },
    { headerName: "ایمیل", field: "email", type: "TEXT" },
    { headerName: "وبسایت", field: "website", type: "TEXT" },
    {
      headerName: "آدرس",
      field: "address",
      type: "TOOLTIP",
      cellRenderer: ({ value }) => (
        <Cell.ToolTip
          icon={<Icon icon='fluent-mdl2:view' />}
          label='مشاهده'
          variant='success'>
          <p>{value}</p>
        </Cell.ToolTip>
      ),
    },
    {
      headerName: "پیام",
      field: "message",
      type: "TOOLTIP",
      cellRenderer: ({ value }) => (
        <Cell.ToolTip
          icon={<Icon icon='fluent-mdl2:view' />}
          label='مشاهده'
          variant='success'>
          <p>{value}</p>
        </Cell.ToolTip>
      ),
    },
    {
      headerName: "وضعیت",
      field: "status",
      type: "SELECT",
      minWidth: 160,
      cellRendererParams: {
        OPTIONS: CONTACT_US_STATUS_OPTIONS,
        onChange(value, data) {
          ShowQuestion({
            onConfirm() {
              UpdateContactUs({
                ...data,
                status: value.value,
              });
            },
          });
        },
      },
    },
    { headerName: "تاریخ ایجاد", field: "createdAt", type: "DATE" },
    { headerName: "تاریخ بروزرسانی", field: "updatedAt", type: "DATE" },
  ];

  return {
    pagesColDef,
    usersColDef,
    careersColDef,
    contactUsColDef,
  };
}
