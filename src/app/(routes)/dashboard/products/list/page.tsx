"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Grid } from "@/components/UI";
import Table from "@/components/UI/Table/Table";
import useColdefs from "@/hooks/useColDefs/useColdefs";
import useTable from "@/hooks/useTable";
import { GetProductsAPI } from "@/services/Products/Products.services";
import { IUser } from "@/types/User/user.types";

export default function Page() {
  const { productsColDef } = useColdefs();

  const { data, isLoading, currentPage, setCurrentPage } = useTable<IUser[]>({
    api: GetProductsAPI,
  });

  return (
    <PageContainer
      title='محصولات'
      isLoading={isLoading}>
      <Table
        colDefs={productsColDef}
        rowData={data}
      />
    </PageContainer>
  );
}
