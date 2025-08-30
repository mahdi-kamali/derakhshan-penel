import { Box, Field, Grid } from "@/components/UI";
import Form from "@/components/UI/Form/Form";
import Icon from "@/components/UI/Icon/Icon";
import { ISectionsBase } from "@/types/Pages/Sections/Sections.types";
import React from "react";

export default function HOME_HERO() {
  const values = {
    isActive: true,
    type: "HOME_HERO",
    name: "هیروی صفحه اصلی",
    components: {
      EN: {
        experience: "",
        logo: "",
        tagline: "",
      },
      FA: {
        experience: "",
        logo: "",
        tagline: "",
      },
    },
  } as ISectionsBase;

  return (
    <Form>
      {({ goNext, goPrev }) => {
        return (
          <>
            <Box header={<span>فارسی</span>}>
              <Grid gap={"1rem"}>
                <Field.Text
                  variant='light'
                  name='experience'
                  type='text'
                  icon={<Icon icon='mdi:company' />}
                  onChange={() => {}}
                  title='تجربیات'
                  value={values.components.EN.experience}
                />
                <Field.Text
                  variant='light'
                  name='logo'
                  type='text'
                  icon={<Icon icon='mdi:company' />}
                  onChange={() => {}}
                  title='لوگو'
                  value={values.components.EN.logo}
                />
                <Field.Text
                  variant='light'
                  name='tagline'
                  type='text'
                  icon={<Icon icon='mdi:company' />}
                  onChange={() => {}}
                  title='شعار شرکت'
                  value={values.components.EN.logo}
                />
              </Grid>
            </Box>
            <Box header={<span>انگلیسی</span>}>
              <Grid gap={"1rem"}>
                <Field.Text
                  variant='light'
                  name='experience'
                  type='text'
                  icon={<Icon icon='mdi:company' />}
                  onChange={() => {}}
                  title='تجربیات'
                  value={values.components.EN.experience}
                />
                <Field.Text
                  variant='light'
                  name='logo'
                  type='text'
                  icon={<Icon icon='mdi:company' />}
                  onChange={() => {}}
                  title='لوگو'
                  value={values.components.EN.logo}
                />
                <Field.Text
                  variant='light'
                  name='tagline'
                  type='text'
                  icon={<Icon icon='mdi:company' />}
                  onChange={() => {}}
                  title='شعار شرکت'
                  value={values.components.EN.logo}
                />
              </Grid>
            </Box>
          </>
        );
      }}
    </Form>
  );
}
