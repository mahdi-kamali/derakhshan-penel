import { IMAGE_URL, STORAGE_URL } from "@/common/urls/urls";
import { IVariant } from "@/types/Variables";
import styles from "./styles.module.scss";
import Icon from "@/components/UI/Icon/Icon";
interface IProps {
  title: string;
  variant: IVariant;
  href: string;
}

export default function Download(props: IProps) {
  const { href, title, variant } = props;
  return (
    <a
      href={STORAGE_URL(href)}
      target='_blank'
      className={styles.download}>
      <Icon icon='line-md:download' />
      {title}
    </a>
  );
}
