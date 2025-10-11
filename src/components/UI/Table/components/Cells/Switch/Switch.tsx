import styles from "./styles.module.scss";
import { Switch as MUISwitchh } from "@mui/material";

interface IProps {
  onChange: (value: boolean) => void;
  disabled?: boolean;
  value: boolean;
}

export default function Switch(props: IProps) {
  const { onChange, value, disabled } = props;
  return (
    <div className={styles.switch}>
      <MUISwitchh
        onChange={(event) => onChange(event.target.checked)}
        checked={value}
      />
      <span>{value ? "فعال" : "غیر فعال"}</span>
    </div>
  );
}
