

import styles from "./styles.module.scss"

interface IProps {
  children: React.ReactElement;
}

export default function Container(props: IProps) {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
}
