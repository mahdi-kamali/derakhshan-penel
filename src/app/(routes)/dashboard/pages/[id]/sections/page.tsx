"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Grid } from "@/components/UI";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import CreateSection from "./components/CreateSection/CreateSection";
import SectionForm from "./components/SectionForm/SectionForm";
import { GetPageByIdAPI } from "@/services/Pages/Pages.services";

export default function Page() {
  const { id } = useParams();

  const { data,isFetching } = useQuery({
    queryFn: () => GetPageByIdAPI(id as string),
    initialData: {
      data: {
        _id: "",
        createdAt: "",
        nav: {
          icon: "",
          show: false,
        },
        sections: [],
        slug: "",
        status: "",
        title: "",
        title_en: "",
        updatedAt: "",
      },
      message: "",
      status: 200,
    },
    queryKey: [GetPageByIdAPI.name],
  });

  const { data: page } = data;

  return (
    <PageContainer title='ویرایش محتوای صفحه' isLoading={isFetching}>
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
          <span>لیست سکشن های موجود ({page.sections.length})</span>
          <Grid gap={"1rem"}>
            {page.sections.map((section) => {
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
