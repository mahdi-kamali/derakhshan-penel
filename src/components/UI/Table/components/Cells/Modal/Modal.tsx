import MuiModal from "@mui/material/Modal";
import { ReactElement } from "react";
import styles from "./styles.module.scss";
import { Grow } from "@mui/material";

interface IProps {
  children: ReactElement;
  show?: boolean;
  header: ReactElement;
  onClose: () => void;
}

export default function Modal(props: IProps) {
  const { children, show = false, onClose } = props;

  return (
    <MuiModal
      classes={{
        backdrop: styles.backdrop,
      }}
      open={show}
      onClose={onClose}
      closeAfterTransition>
      <Grow in={show}>
        <div className={styles.content}>
          <div className={styles.header}>{props.header}</div>
          <div className={styles.children}>{props.children}</div>
        </div>
      </Grow>
    </MuiModal>
  );
}
