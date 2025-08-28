"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Grid } from "@/components/UI";
import Table from "@/components/UI/table/Table";
import useColdefs from "@/hooks/useColdefs";
import useTable from "@/hooks/useTable";
import { GetUsersAPI } from "@/services/Users.services";
import { IUser } from "@/types/User/user.types";

export default function page() {
  const { usersColDef } = useColdefs();

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
          colDefs={usersColDef}
          rowData={data}
        />
      </Grid>
    </PageContainer>
  );
}
