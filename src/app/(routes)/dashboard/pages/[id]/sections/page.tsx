"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Grid } from "@/components/UI";
import { GetPageSectionsAPI } from "@/services/Pages/Sections/Sections.services";
import { IPage } from "@/types/Pages/pages.types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import CreateSection from "./components/CreateSection/CreateSection";
import SectionForm from "./components/SectionForm/SectionForm";

export default function Page() {
  const { id } = useParams();

  const { data } = useQuery<IPage["sections"]>({
    queryFn: () => GetPageSectionsAPI(id as string),
    initialData: [],
    queryKey: [GetPageSectionsAPI.name],
  });

  return (
    <PageContainer title='ویرایش محتوای صفحه'>
      <Grid>
        <CreateSection page_id={id as string} />
        <Grid
          marginTop={"2rem"}
          gap={"1rem"}
          type='flex'
          center
          flexDirection='column'
          borderTop={"1px solid white"}
          paddingTop={"1em"}>
          <span>لیست سکشن های موجود ({data.length})</span>
          <Grid gap={"1rem"}>
            {data?.map((section) => {
              return (
                <SectionForm
                key={section._id}
                  page_id={id as string}
                  section={section}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
