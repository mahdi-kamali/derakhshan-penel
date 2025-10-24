import { Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { ISiteSettings } from "@/types/Site-Settings/SiteSettings.types";
import { FormikContextType, useFormikContext } from "formik";
interface IProps {
  formik: FormikContextType<ISiteSettings>;
}

export default function HEADER(props: IProps) {
  const { values, handleChange, setFieldValue, errors, setValues } =
    useFormikContext<ISiteSettings>();

  return (
    <Grid
      gap={"1rem"}
      gridTemplateColumns={"1fr 1fr "}>
      <Field.Text
        errors={errors}
        variant='light'
        icon={<Icon icon='fluent:slide-text-title-edit-16-filled' />}
        name='siteName'
        type='text'
        onChange={handleChange}
        title='نام سایت'
        value={values.siteName}
        placeHodler=''
        disabled
      />
    </Grid>
  );
}
