"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Grid } from "@/components/UI";
import { GetPageSectionsAPI } from "@/services/Pages/Sections/Sections.services";
import { IPage } from "@/types/Pages/pages.types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import CreateSection from "./components/CreateSection/CreateSection";
import HOME_HERO from "./components/Home/HOME_HERO/HOME_HERO";

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
        <CreateSection page_id={id as string} />
        <Grid
          marginTop={"1rem"}
          gap={"1rem"}
          type='flex'
          center
          flexDirection='column'>
          <span>لیست سکشن های موجود ({data.length})</span>
          <Grid gap={"1rem"}>
            {data?.map((section) => {
              const { type } = section;
              switch (type) {
                case "HOME_HERO": {
                  return <HOME_HERO section={section} />;
                }
              }
              return <h1>{section.name}</h1>;
            })}
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
