"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Box, Grid } from "@/components/UI";
import useTable from "@/hooks/useTable";
import { GetCareersAPI } from "@/services/Careers/Careers.services";
import { ICareer } from "@/types/Career/Career.types";
import Career from "./components/Career/Career";

export default function Page() {
  const { data, isLoading, currentPage, setCurrentPage } = useTable<ICareer[]>({
    api: GetCareersAPI,
  });

  return (
    <PageContainer
      title='لیست آگهی ها'
      isLoading={isLoading}>
      <Box header={"لیست آگهی ها"}>
        <Grid gap={"2rem"}>
          {data.map((career) => {
            return <Career career={career} />;
          })}
        </Grid>
      </Box>
    </PageContainer>
  );
}
