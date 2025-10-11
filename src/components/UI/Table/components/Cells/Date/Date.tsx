import { dateToJalai } from "@/utils/Converters";

interface IProps {
  value: string;
}

export default function Date(props: IProps) {
  const { value } = props;
  return <div>{dateToJalai(value)}</div>;
}
