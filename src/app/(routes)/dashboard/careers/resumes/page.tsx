"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Box } from "@/components/UI";
import Table from "@/components/UI/Table/Table";
import useColdefs from "@/hooks/useColDefs/useColdefs";
import useTable from "@/hooks/useTable";
import { GetCareerApplys } from "@/services/Careers/applys/CareerApplys.services";
import { ICareerApply } from "@/types/Career/applys/Applys.types";

export default function page() {
  const { applysColDef } = useColdefs();

  const { data, isLoading, currentPage, setCurrentPage } = useTable<
    ICareerApply[]
  >({
    api: GetCareerApplys,
  });

  console.log(data)

  return (
    <PageContainer
      title='لیست رزومه ها'
      isLoading={isLoading}>
      <Table
        colDefs={applysColDef}
        rowData={data}
      />
    </PageContainer>
  );
}
