import { Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { FormikContextType } from "formik";

interface IProps {
  language: LanguagesENUM;
  formik: FormikContextType<ISection>;
}

export default function Component(props: IProps) {
  const { language, formik } = props;

  const { values, handleChange, setFieldValue } = formik;

  const { type } = values;

  if (type !== "CONTACT_US") return <></>;

  const components = values.components[language];

  const { company, email, fax, image, location, phone } = components.info;

  type Info = typeof components.info;
  const fieldName = (field: keyof Info) =>
    `components[${language}].info.${field}`;

  return (
    <Grid paddingBottom={"0.25em"}>
      <Grid
        gap={"1rem"}
        gridTemplateColumns={"1fr 1fr"}>
        <Field.Text
          type='text'
          name={fieldName("company")}
          icon={<Icon icon='mdi:company' />}
          onChange={handleChange}
          title='شرکت'
          value={company}
          variant='light'
        />
        <Field.Text
          type='tel'
          name={fieldName("phone")}
          icon={<Icon icon='line-md:phone-filled' />}
          onChange={handleChange}
          title='تلفن'
          value={phone}
          variant='light'
          dir='ltr'
        />

        <Field.Text
          type='tel'
          name={fieldName("fax")}
          icon={<Icon icon='fa-solid:fax' />}
          onChange={handleChange}
          title='فکس'
          value={fax}
          variant='light'
        />
        <Field.Text
          type='text'
          name={fieldName("email")}
          icon={<Icon icon='material-symbols:attach-email' />}
          onChange={handleChange}
          title='ایمیل'
          value={email}
          variant='light'
        />
        <Grid gridColumn={"-1/1"}>
          <Field.Image
            type='single'
            value={image}
            name={fieldName("image")}
            icon={<Icon icon='tdesign:location-filled' />}
            onChange={(image) => {
              setFieldValue(fieldName("image"), image);
            }}
            title='عکس آواتار'
            variant='light'
          />
        </Grid>
        <Grid gridColumn={"-1/1"}>
          <Field.Text
            type='text'
            name={fieldName("location")}
            icon={<Icon icon='tdesign:location-filled' />}
            onChange={handleChange}
            title='موقعیت'
            value={location}
            variant='light'
            lines={3}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
