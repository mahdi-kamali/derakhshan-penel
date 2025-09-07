import { Field } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { ILogin } from "@/types/Auth/Auth.type";
import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import { SwiperSlide } from "swiper/react";

interface IProps {}

export default function BODY(props: IProps) {
  const { values, handleChange } = useFormikContext<any>();

  const LOGIN = (
    <Grid
      width='80%'
      gap='0'
      margin='0 auto'>
      <Field.Text
        name='phone'
        type='text'
        icon={<Icon icon='line-md:phone' />}
        onChange={handleChange}
        value={values.phone}
        placeHodler='شماره تلفن'
        title='شماره تلفن'
        variant='light'
      />

      <Grid marginTop={"1rem"}>
        <Field.Text
          name='password'
          type='password'
          icon={<Icon icon='mdi:password' />}
          onChange={handleChange}
          value={values.password}
          placeHodler='رمز عبور'
          title='رمز عبور'
          variant='light'
        />
      </Grid>
    </Grid>
  );

  const REGISTER = <p>register</p>;

  return [
    <SwiperSlide>{LOGIN}</SwiperSlide>,
    <SwiperSlide>{REGISTER}</SwiperSlide>,
  ];
}
