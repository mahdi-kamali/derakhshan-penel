"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Button, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import Cell from "@/components/UI/table/components/cells/Cell";
import Table from "@/components/UI/table/Table";
import useTable from "@/hooks/useTable";
import { GetUsersAPI } from "@/services/Users.services";
import { IUser } from "@/types/User/user.types";
import { IOption, IROLE_OPTIONS } from "@/types/Variables";
import { ColDef } from "ag-grid-community";
import { useState } from "react";

export default function page() {
  const columnDefs: ColDef[] = [
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

  

  const { data, isLoading, currentPage, setCurrentPage } = useTable<IUser[]>({
    api: GetUsersAPI,
  });

  console.log(data);

  return (
    <PageContainer
      title='لیست کاربران'
      isLoading={isLoading}>
      <Grid>
        <Table
          colDefs={columnDefs}
          rowData={data}
        />
      </Grid>
    </PageContainer>
  );
}
