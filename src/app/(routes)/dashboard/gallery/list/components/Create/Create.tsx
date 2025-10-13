import { Box, Button, Field, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import {
  CreateGalleryAPI,
  GetAllGalleriesAPI,
} from "@/services/Gallery.services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormikProvider, useFormik } from "formik";

export default function Create() {
  const queryClient = useQueryClient();
  const { mutate: CreateGallery, isIdle: loading } = useMutation({
    mutationFn: CreateGalleryAPI,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetAllGalleriesAPI.name],
      });
    },
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      isActive: true,
      creating: true,
    },
    onSubmit(values, { setFieldValue }) {
      CreateGallery(values);
      setFieldValue("creating", false);
    },
  });

  const { values, handleChange, setFieldValue, submitForm, errors } = formik;

  return (
    <FormikProvider value={formik}>
      <Box
        header={
          <Grid
            gridTemplateColumns={" 1fr max-content"}
            gap={"1rem"}>
            <p>ایجاد گالری جدید</p>
            <Button
              type='button'
              variant='success'
              title='ایجاد'
              icon={<Icon icon='gridicons:add-outline' />}
              onClick={() => setFieldValue("creating", true)}
            />
          </Grid>
        }>
        <Grid
          expanded={values.creating}
          color='black'>
          <Field.Text
            errors={errors}
            variant='light'
            name='title'
            icon={<Icon icon='fluent:slide-text-title-20-filled' />}
            onChange={handleChange}
            title='عنوان گالری'
            type='text'
            value={values.title}
            placeHodler='عنوان گالری را وارد کنید.'
          />
          <Grid
            gridTemplateColumns={"1fr 1fr"}
            maxWidth={"20rem"}
            marginTop={"1rem"}
            gap={"1rem"}>
            <Button
              type='button'
              variant='success'
              title='تایید'
              icon={<Icon icon='el:ok' />}
              onClick={submitForm}
            />
            <Button
              type='button'
              variant='danger'
              title='لغو'
              icon={<Icon icon='line-md:cancel-twotone' />}
              onClick={() => setFieldValue("creating", false)}
            />
          </Grid>
        </Grid>
      </Box>
    </FormikProvider>
  );
}
