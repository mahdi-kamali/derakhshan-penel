import { Button, Field, Grid, Group } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FormikContextType } from "formik";
import React from "react";

interface IProps {
  lagnuage: LanguagesENUM;
  formik: FormikContextType<ISection>;
}

export default function Component(props: IProps) {
  const { formik, lagnuage } = props;
  const { values, handleChange, setFieldValue, errors } = formik;
  const { type } = values;

  if (type !== "PRESS" && type !== "PREE_PRESS" && type !== "POST_PRESS")
    return <></>;
  const component = values.components[lagnuage];

  const field = (field: keyof typeof component) =>
    `components[${lagnuage}].${field}`;

  const removeService = (target: number) => {
    const services = component.services.filter((_, index) => index !== target);
    setFieldValue(field("services"), services);
  };

  return (
    <Grid gap={"1rem"}>
      <Field.Text
        name={field("title")}
        icon={<Icon icon='fluent:text-case-title-24-filled' />}
        onChange={handleChange}
        title='عنوان'
        type='text'
        value={component.title}
        variant='light'
      />
      <Field.Text
        name={field("description")}
        icon={<Icon icon='fluent:text-case-title-24-filled' />}
        onChange={handleChange}
        title='توضیحات'
        type='text'
        value={component.description}
        variant='light'
        lines={4}
      />

      <Field.Image
        name={field("image")}
        icon={<Icon icon='line-md:image-twotone' />}
        onChange={(image) => setFieldValue(field("image"), image)}
        title='عکس اصلی'
        type='single'
        value={component.image}
        variant='light'
      />

      <Field.Image
        name={field("gallery")}
        icon={<Icon icon='line-md:image-twotone' />}
        onChange={(image) => setFieldValue(field("gallery"), image)}
        title='گالری'
        type='multi'
        values={component.gallery}
        variant='light'
      />

      <Group
        header='سرویس ها'
        gap={"1rem"}>
        <Button
          type='button'
          variant='warning'
          title='افزودن سرویس'
          onClick={() =>
            setFieldValue(field("services"), [...component.services, {}])
          }
          icon={<Icon icon='gridicons:add-outline' />}
        />

        <Grid gap={"1rem"}>
          {component?.services?.map((service, index) => {
            const name = field("services") + `[${index}].{field}`;

            return (
              <Grid
                color='black'
                gap={"1rem"}
                backgroundColor='rgba(0, 0, 0, 0.1)'
                padding={"1em"}
                borderRadius={"1rem"}
                gridTemplateColumns={" 1fr 1fr "}
                key={index}>
                <Grid>
                  <Field.Image
                    name={name.replace("{field}", "image")}
                    icon={<Icon icon='line-md:image-twotone' />}
                    onChange={(image) =>
                      setFieldValue(name.replace("{field}", "image"), image)
                    }
                    title='عکس سرویس'
                    type='single'
                    value={service.image}
                    variant='light'
                  />
                </Grid>
                <Grid>
                  <Field.Text
                    name={name.replace("{field}", "title")}
                    icon={<Icon icon='fluent:text-case-title-24-filled' />}
                    onChange={handleChange}
                    title='عنوان'
                    type='text'
                    value={service.title}
                    variant='light'
                  />
                  <Field.Text
                    name={name.replace("{field}", "description")}
                    icon={<Icon icon='fluent:text-case-title-24-filled' />}
                    onChange={handleChange}
                    title='توضیحات'
                    type='text'
                    value={service.description}
                    variant='light'
                    lines={4}
                  />
                </Grid>

                <Grid gridColumn={"-1/1"}>
                  <Button
                    type='button'
                    variant='danger'
                    icon={<Icon icon='mdi:delete' />}
                    title='حذف'
                    onClick={() => removeService(index)}
                  />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Group>
    </Grid>
  );
}
