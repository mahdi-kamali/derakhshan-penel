import { Button, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import React, { useState } from "react";
import { IPage } from "@/types/Pages/pages.types";
import SectionForm from "../SectionForm/SectionForm";

interface IProps {
  page_id: IPage["_id"];
}

export default function CreateSection(props: IProps) {
  const { page_id } = props;

  return (
    <Grid
      type='flex'
      center
      flexDirection='column'>
      {/* Create Forms */}
      <Grid
        marginTop={"1rem"}>
        <SectionForm page_id={page_id} />
      </Grid>
    </Grid>
  );
}
