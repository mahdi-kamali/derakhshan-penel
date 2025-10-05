"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Grid } from "@/components/UI";
import Table from "@/components/UI/table/Table";
import useColdefs from "@/hooks/useColDefs/useColdefs";
import useTable from "@/hooks/useTable";
import { GetCateogiresAPI } from "@/services/Category/Category.services";
import { ICategory } from "@/types/Category/Category.types";

export default function Page() {
  const { categoriesColDef } = useColdefs();

  const { data, isLoading, currentPage, setCurrentPage } = useTable<
    ICategory[]
  >({
    api: GetCateogiresAPI,
  });

  return (
    <PageContainer
      title='دسته بندی ها'
      isLoading={isLoading}>
      <Grid>
        <Table
          colDefs={categoriesColDef}
          rowData={data}
        />
      </Grid>
    </PageContainer>
  );
}
