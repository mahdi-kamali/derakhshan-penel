import { Box, Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { ISectionsBase } from "@/types/Pages/Sections/Sections.types";
import { SECTIONS_OPTIONS } from "@/types/Variables";
import { useFormik } from "formik";
import React, { useState } from "react";
import HOME_HERO from "../Home/HOME_HERO/HOME_HERO";
import { IPage } from "@/types/Pages/pages.types";

interface IProps {
  page_id: IPage["_id"];
}

export default function CreateSection(props: IProps) {
  const { page_id } = props;
  const [isCreating, setIsCreating] = useState(false);

  const [type, setType] = useState<ISectionsBase["type"]>();

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
      <Grid
        expanded={type === "HOME_HERO"}
        marginTop={"1rem"}>
        <HOME_HERO page_id={page_id} />
      </Grid>
    </Grid>
  );
}
