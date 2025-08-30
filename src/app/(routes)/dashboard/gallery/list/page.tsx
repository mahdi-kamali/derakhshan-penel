"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Grid } from "@/components/UI";
import useTable from "@/hooks/useTable";
import { GetAllGalleriesAPI } from "@/services/Gallery.services";
import { IGallery } from "@/types/Gallery/gallery.types";
import React from "react";
import Gallery from "./components/Gallery";

export default function page() {
  const { data, isLoading, refetch } = useTable<IGallery[]>({
    api: GetAllGalleriesAPI,
  });

  return (
    <PageContainer
      title='گالری'
      isLoading={isLoading}>
      <Grid gap={"1rem"}>
        <Gallery.Create onCreate={refetch} />
        <Grid
          width={"100%"}
          gap={"1rem"}>
          {data.map((gallery, index) => {
            return <Gallery.Section gallery={gallery} />;
          })}
        </Grid>
      </Grid>
    </PageContainer>
  );
}
