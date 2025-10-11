"use client";
import { ShowQuestion } from "@/common/toast/toast";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import Cell from "@/components/UI/Table/components/Cells/Cell";
import Table from "@/components/UI/Table/Table";
import useColdefs from "@/hooks/useColDefs/useColdefs";
import useTable from "@/hooks/useTable";
import { DeletePageAPI, GetPagesAPI } from "@/services/Pages/Pages.services";
import { IPage } from "@/types/Pages/pages.types";
import { useMutation } from "@tanstack/react-query";
import React from "react";

export default function Page() {

  
  const { data, isLoading, refetch } = useTable<IPage[]>({
    api: GetPagesAPI,
  });

  const { mutate: DeletePage } = useMutation({
    mutationFn: DeletePageAPI,
    onSuccess(data, variables, context) {
      refetch();
    },
  });

  const { pagesColDef } = useColdefs();

  const colDefs = [
    ...pagesColDef,
    {
      field: "_id",
      headerName: "عملیات",
      cellRenderer: ({ data }: { data: IPage }) => {
        return (
          <Cell.Container>
            <Cell.Button
              title='حذف'
              icon={<Icon icon='ic:round-delete' />}
              onClick={() => {
                ShowQuestion({
                  onConfirm() {
                    DeletePage(data._id);
                  },
                });
              }}
              variant='danger'
            />
          </Cell.Container>
        );
      },
    },
  ];

  return (
    <PageContainer
      title='صفحات'
      isLoading={isLoading}>
      <Grid>
        <Table
          colDefs={colDefs}
          rowData={data}
        />
      </Grid>
    </PageContainer>
  );
}
