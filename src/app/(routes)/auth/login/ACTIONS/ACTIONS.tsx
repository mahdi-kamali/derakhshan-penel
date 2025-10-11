import { Button } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { useFormikContext } from "formik";

interface IProps {}

export default function ACTIONS() {
  const { submitForm } = useFormikContext();

  return (
    <Button
      type='submit'
      variant='success'
      title='ورود'
      icon={<Icon icon='line-md:login' />}
      onClick={submitForm}
    />
  );
}
