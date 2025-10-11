"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Grid } from "@/components/UI";
import Table from "@/components/UI/Table/Table";
import useColdefs from "@/hooks/useColDefs/useColdefs";
import useTable from "@/hooks/useTable";
import { GetOrdersAPI } from "@/services/Orders/Orders.services";
import { IUser } from "@/types/User/user.types";

export default function Page() {
  const { ordersColDef } = useColdefs();

  const { data, isLoading, currentPage, setCurrentPage } = useTable<IUser[]>({
    api: GetOrdersAPI,
  });

  return (
    <PageContainer
      title='سفارشات'
      isLoading={isLoading}>
      <Grid>
        <Table
          colDefs={ordersColDef}
          rowData={data}
        />
      </Grid>
    </PageContainer>
  );
}
