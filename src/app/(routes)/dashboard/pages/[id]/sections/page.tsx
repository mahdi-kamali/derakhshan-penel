"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Grid } from "@/components/UI";
import { GetPageSectionsAPI } from "@/services/Pages/Sections/Sections.services";
import { IPage } from "@/types/Pages/pages.types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Create from "./components/Create/Create";

export default function page() {
  const { id } = useParams();

  const { data } = useQuery<IPage["sections"]>({
    queryFn: () => GetPageSectionsAPI(id as string),
    initialData: [],
    queryKey: [GetPageSectionsAPI.name],
  });

  return (
    <PageContainer title='ویرایش محتوای صفحه'>
      <Grid>
        <Grid>
          <Create />
        </Grid>
        <Grid>
          <>
            {data?.map((section) => {
              console.log(section.type);
              return <h1>ok</h1>;
            })}
          </>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
