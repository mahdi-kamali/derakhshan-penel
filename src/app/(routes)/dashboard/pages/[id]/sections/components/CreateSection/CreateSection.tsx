import { Box, Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { SECTIONS_OPTIONS } from "@/types/Variables";
import React, { useState } from "react";
import { IPage } from "@/types/Pages/pages.types";
import SectionForm from "../SectionForm/SectionForm";

interface IProps {
  page_id: IPage["_id"];
}

export default function CreateSection(props: IProps) {
  const { page_id } = props;

  const [isCreating, setIsCreating] = useState(false);

  const [type, setType] = useState<ISection["type"]>("HOME_ABOUT_US");

  return (
    <Grid
      type='flex'
      center
      flexDirection='column'>
      <Box
        maxContent
        header={
          <Grid
            type='flex'
            center
            color='var(--color-success)'
            gap={"0.5rem"}
            cursor='pointer'>
            <Icon
              icon='oui:ml-create-single-metric-job'
              color='var(--color-success)'
              onClick={() => {
                setIsCreating((prev) => !prev);
              }}
            />
            <small>افزودن سکشن </small>
          </Grid>
        }>
        <Grid
          gap={"1rem"}
          gridTemplateColumns={"1fr"}
          expanded={isCreating}
          width={isCreating ? "28rem" : "20rem"}>
          <Field.Select
            variant='light'
            icon={<Icon icon='material-symbols:type-specimen-rounded' />}
            name='type'
            onChange={(event) => {
              setType(event.value);
            }}
            title='نوع'
            value={type}
            placeHodler='نوع سکشن را انتخاب کنید..'
            options={SECTIONS_OPTIONS}
          />
        </Grid>
      </Box>

      {/* Sections Forms */}
      <Grid marginTop={"1rem"}>
        <SectionForm page_id={page_id} />
      </Grid>
    </Grid>
  );
}
