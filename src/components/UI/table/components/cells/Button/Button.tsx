import { IVariant } from "@/types/Variables";
import styles from "./styles.module.scss";
import Spinners from "@/components/UI/Spinners";
import Cell from "../Cell";

interface IProps {
  variant: IVariant;
  icon: React.ReactElement;
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export default function Button(props: IProps) {
  const {
    variant,
    icon,
    title,
    onClick = () => {},
    disabled = false,
    loading = false,
  } = props;

  const className = [styles.button, styles[variant]].join(" ");

  return (
    <Cell.Container>
      <button
        className={className}
        disabled={disabled}
        onClick={onClick}>
        {loading && (
          <>
            <Spinners.Bars />
            <span>درحال پردازش ...</span>
          </>
        )}
        {!loading && (
          <>
            {icon}
            <span>{title}</span>
          </>
        )}
      </button>
    </Cell.Container>
  );
}
