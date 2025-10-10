"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Grid } from "@/components/UI";
import Table from "@/components/UI/Table/Table";
import useColdefs from "@/hooks/useColDefs/useColdefs";
import useTable from "@/hooks/useTable";
import { GetContactUsAPI } from "@/services/Contact-us/Contact_us.services";
import { GetUsersAPI } from "@/services/Users.services";
import { IUser } from "@/types/User/user.types";

export default function Page() {
  const { contactUsColDef } = useColdefs();

  const { data, isLoading, currentPage, setCurrentPage } = useTable<IUser[]>({
    api: GetContactUsAPI,
  });

  return (
    <PageContainer
      title='درباره ما'
      isLoading={isLoading}>
      <Grid>
        <Table
          colDefs={contactUsColDef}
          rowData={data}
        />
      </Grid>
    </PageContainer>
  );
}
