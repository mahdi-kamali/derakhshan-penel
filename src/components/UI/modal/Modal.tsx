import MuiModal from "@mui/material/Modal";
import { ReactElement } from "react";

import styles from "./styles.module.scss";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { Fade, Grow } from "@mui/material";

interface IProps {
  children: ReactElement | ReactElement[];
  show?: boolean;
  onClose: () => void;
  actions?: {
    submit: {
      enabled: boolean;
      onSubmit?: () => void;
    };
    cancel: {
      enabled: boolean;
      onCancel?: () => void;
    };
  };
}

export default function Modal(props: IProps) {
  const { children, show = false, onClose, actions } = props;
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
          <div className={styles.children}>{children}</div>

          {actions && (
            <div className={styles.actions}>
              <Button
                type='button'
                title='لغو و بستن'
                variant='danger'
                icon={<Icon icon='line-md:close' />}
                onClick={onClose}
                disabled={actions.cancel.enabled === false}
              />

              <Button
                type='button'
                title='ثبت'
                variant='success'
                icon={<Icon icon='lsicon:submit-outline' />}
                onClick={() => {
                  if (actions?.submit?.onSubmit) actions?.submit?.onSubmit();
                  onClose();
                }}
                disabled={actions.submit.enabled === false}
              />
            </div>
          )}
        </div>
      </Grow>
    </MuiModal>
  );
}
