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

  const [isCreating, setIsCreating] = useState(true);

  return (
    <Grid
      type='flex'
      center
      flexDirection='column'>
      <Grid center>
        <Button
          type='button'
          variant='success'
          title={"افزودن سکشن "}
          icon={
            <Icon
              icon='oui:ml-create-single-metric-job'
              color='var(--color-success)'
            />
          }
          onClick={() => {
            setIsCreating((prev) => !prev);
          }}
        />
      </Grid>
      {/* Create Forms */}
      <Grid
        marginTop={"1rem"}
        expanded={isCreating}>
        <SectionForm page_id={page_id} />
      </Grid>
    </Grid>
  );
}
