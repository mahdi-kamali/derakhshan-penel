"use client";
import PageContainer from "@/components/layout/PageContainer/PageContianer";
import { Grid } from "@/components/UI";
import useTable from "@/hooks/useTable";
import {
  DeleteGalleryAPI,
  GetAllGalleriesAPI,
  UpdateGalleryAPI,
} from "@/services/Gallery.services";
import { IGallery } from "@/types/Gallery/gallery.types";
import React from "react";
import Gallery from "./components/Gallery";
import { useMutation } from "@tanstack/react-query";

export default function page() {
  const { data, isLoading, refetch } = useTable<IGallery[]>({
    api: GetAllGalleriesAPI,
  });

  const { mutate: UpdateGallery, isIdle: UpdateGalleryLoading } = useMutation({
    mutationFn: UpdateGalleryAPI,
    onSuccess(data, variables, context) {
      refetch();
    },
  });

  const { mutate: DeleteGallery, isIdle: DeleteGalleryLoading } = useMutation({
    mutationFn: DeleteGalleryAPI,
    onSuccess(data, variables, context) {
      refetch();
    },
  });

  return (
    <PageContainer
      title='گالری'
      isLoading={isLoading && UpdateGalleryLoading && DeleteGalleryLoading}>
      <Grid>
        <Grid>
          <Gallery.Create onCreate={refetch} />
        </Grid>
        <Grid width={"100%"}>
          {data.map((gallery, index) => {
            return (
              <Gallery.Section
                gallery={gallery}
                onUpdate={UpdateGallery}
                onDelete={DeleteGallery}
              />
            );
          })}
        </Grid>
      </Grid>
    </PageContainer>
  );
}
