"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Grid } from "@/components/UI";
import { GetAllGalleriesAPI } from "@/services/Gallery.services";
import React from "react";
import Gallery from "./components/Gallery";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const { data, isLoading, refetch } = useQuery({
    queryFn: GetAllGalleriesAPI,
    initialData: {
      data: [],
      message: "",
      status: 200,
    },
    queryKey: [GetAllGalleriesAPI.name],
  });

  const { data: galleries } = data;

  return (
    <PageContainer
      title='گالری'
      isLoading={isLoading}>
      <Grid gap={"1rem"}>
        <Gallery.Create onCreate={refetch} />
        <Grid
          width={"100%"}
          gap={"1rem"}>
          {galleries.map((gallery, index) => {
            return (
              <Gallery.Section
                key={gallery._id}
                gallery={gallery}
              />
            );
          })}
        </Grid>
      </Grid>
    </PageContainer>
  );
}
