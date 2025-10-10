"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Grid } from "@/components/UI";
import Table from "@/components/UI/Table/Table";
import useColdefs from "@/hooks/useColDefs/useColdefs";
import useTable from "@/hooks/useTable";
import { GetCareersAPI } from "@/services/Careers/Careers.services";
import { GetUsersAPI } from "@/services/Users.services";
import { ICareer } from "@/types/Career/Career.types";

export default function Page() {
  const { careersColDef } = useColdefs();

  const { data, isLoading, currentPage, setCurrentPage } = useTable<ICareer[]>({
    api: GetCareersAPI,
  });

  return (
    <PageContainer
      title='لیست کاربران'
      isLoading={isLoading}>
      <Grid>
        <Table
          colDefs={careersColDef}
          rowData={data}
        />
      </Grid>
    </PageContainer>
  );
}
